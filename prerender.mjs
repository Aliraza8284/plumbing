
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import {
  mkdir,
  writeFile,
  readFile,
  mkdtemp,
  cp,
  rm
} from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const routes = [
  "/",
  "/about",
  "/plumbing",
  "/sewers",
  "/hvac",
  "/coupons",
  "/about/history",
  "/about/testimonials",
  "/plumbing/bathroom-plumbing",
  "/plumbing/commercial-plumbing",
  "/plumbing/drain-cleaning",
  "/plumbing/earthquake-shut-off-valves",
  "/plumbing/emergency-services",
  "/plumbing/gas-plumbing",
  "/plumbing/hydro-jetting",
  "/plumbing/leak-detection",
  "/plumbing/plumbing-maintenance",
  "/plumbing/piping-repiping",
  "/plumbing/rooter-service",
  "/plumbing/sewer-inspection",
  "/plumbing/sewer-repair-and-replacement",
  "/plumbing/trenchless-sewers",
  "/plumbing/water-heaters",
  "/plumbing/water-line-plumbing",
  "/sewers/cleaning",
  "/sewers/hydro-jetting",
  "/sewers/inspection",
  "/sewers/repair-and-replacement",
  "/sewers/trenchless-technology",
  "/hvac/heat-pumps",
  "/hvac/emergency-hvac"
];

const port = 4178;
const base = `http://127.0.0.1:${port}`;
const site = "https://www.globalfixs.com";
const distDir = path.resolve("dist");

let browser;
let server;
let tempDir;

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

try {
  // Keep a separate, unchanged copy of the Vite build.
  // This prevents SPA fallback from serving previously
  // prerendered HTML for the next route.
  tempDir = await mkdtemp(
    path.join(os.tmpdir(), "globalfixs-prerender-")
  );

  const sourceDir = path.join(tempDir, "source");

  await cp(distDir, sourceDir, {
    recursive: true
  });

  // Confirm the original Vite entry HTML exists.
  await readFile(
    path.join(sourceDir, "index.html"),
    "utf8"
  );

  server = spawn(
    process.execPath,
    [
      path.resolve("node_modules/vite/bin/vite.js"),
      "preview",
      "--host",
      "127.0.0.1",
      "--port",
      String(port),
      "--strictPort",
      "--outDir",
      sourceDir
    ],
    {
      stdio: "inherit"
    }
  );

  let ready = false;

  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) {
      throw new Error(
        "Vite preview server exited early"
      );
    }

    try {
      const response = await fetch(base);

      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}

    await sleep(500);
  }

  if (!ready) {
    throw new Error(
      "Vite preview server did not start"
    );
  }

  browser = await chromium.launch({
    headless: true
  });

  for (const route of routes) {
    const page = await browser.newPage({
      viewport: {
        width: 1280,
        height: 800
      }
    });

    const errors = [];

    page.on("pageerror", (error) => {
      errors.push(error.stack || error.message);
    });

    try {
      await page.goto(`${base}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 45000
      });

      await page.waitForSelector("#root > *", {
        timeout: 20000
      });

      // SEO metadata is currently populated by React effects.
      await page.waitForFunction(
        (expectedCanonical) => {
          const canonical = document.querySelector(
            'link[rel="canonical"]'
          );

          const description = document.querySelector(
            'meta[name="description"]'
          );

          return (
            canonical?.href === expectedCanonical &&
            Boolean(description?.content)
          );
        },
        `${site}${route}`,
        {
          timeout: 15000
        }
      );

      // Give React effects a chance to settle.
      await page.waitForTimeout(500);

      if (errors.length > 0) {
        throw new Error(
          `Browser errors on ${route}:\n${errors.join("\n")}`
        );
      }

      const info = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector(
          'meta[name="description"]'
        )?.content,
        canonical: document.querySelector(
          'link[rel="canonical"]'
        )?.href,
        rootText:
          document.querySelector("#root")
            ?.textContent?.trim().length ?? 0
      }));

      const expected = `${site}${route}`;

      if (
        !info.title ||
        !info.description ||
        info.canonical !== expected ||
        info.rootText < 50
      ) {
        throw new Error(
          `Invalid prerender for ${route}: ${JSON.stringify(info)}`
        );
      }

      const html =
        "<!doctype html>\n" +
        (await page.evaluate(
          () => document.documentElement.outerHTML
        ));

      const output =
        route === "/"
          ? path.join(distDir, "index.html")
          : path.join(
              distDir,
              route.slice(1),
              "index.html"
            );

      await mkdir(path.dirname(output), {
        recursive: true
      });

      await writeFile(output, html, "utf8");

      console.log(
        `Prerendered ${route} -> ${output}`
      );
    } finally {
      await page.close();
    }
  }

  console.log(
    `Success: ${routes.length} HTML pages generated.`
  );
} finally {
  await browser?.close();

  if (server && server.exitCode === null) {
    server.kill("SIGTERM");
  }

  if (tempDir) {
    await rm(tempDir, {
      recursive: true,
      force: true,
      maxRetries: 3,
      retryDelay: 200
    });
  }
}
