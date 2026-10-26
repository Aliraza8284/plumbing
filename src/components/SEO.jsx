
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.globalfixs.com";

const pages = {
  "/": {
    title: "Plumbing, Sewer & HVAC Services in the USA",
    description:
      "Explore plumbing, sewer and HVAC services with GlobalFixs, including drain cleaning, leak detection, water heaters and emergency service options.",
  },
  "/about": {
    title: "About GlobalFixs",
    description:
      "Learn about GlobalFixs and how we help homeowners explore plumbing, sewer and HVAC service options.",
  },
  "/plumbing": {
    title: "Plumbing Services",
    description:
      "Explore plumbing services including drain cleaning, leak detection, pipe repairs, water heaters and emergency plumbing.",
  },
  "/sewers": {
    title: "Sewer Services",
    description:
      "Learn about sewer cleaning, sewer inspection, hydro jetting, sewer repair and trenchless sewer technology.",
  },
  "/hvac": {
    title: "HVAC Services",
    description:
      "Explore HVAC service options, heat pumps and emergency heating and cooling services with GlobalFixs.",
  },
  "/coupons": {
    title: "Service Coupons",
    description:
      "Explore available service coupons and information from GlobalFixs. Offers may vary by location and provider.",
  },
  "/contact": {
    title: "Contact GlobalFixs",
    description:
      "Contact GlobalFixs for information about plumbing, sewer and HVAC service options.",
  },
  "/about/history": {
    title: "Our History",
  },
  "/about/testimonials": {
    title: "Customer Testimonials",
  },
  "/plumbing/bathroom-plumbing": {
    title: "Bathroom Plumbing",
  },
  "/plumbing/commercial-plumbing": {
    title: "Commercial Plumbing",
  },
  "/plumbing/drain-cleaning": {
    title: "Drain Cleaning",
  },
  "/plumbing/earthquake-shut-off-valves": {
    title: "Earthquake Shut-Off Valves",
  },
  "/plumbing/emergency-services": {
    title: "Emergency Plumbing Services",
  },
  "/plumbing/gas-plumbing": {
    title: "Gas Plumbing",
  },
  "/plumbing/hydro-jetting": {
    title: "Plumbing Hydro Jetting",
  },
  "/plumbing/leak-detection": {
    title: "Leak Detection",
  },
  "/plumbing/plumbing-maintenance": {
    title: "Plumbing Maintenance",
  },
  "/plumbing/piping-repiping": {
    title: "Piping and Repiping",
  },
  "/plumbing/rooter-service": {
    title: "Rooter Service",
  },
  "/plumbing/sewer-inspection": {
    title: "Plumbing Sewer Inspection",
  },
  "/plumbing/sewer-repair-and-replacement": {
    title: "Sewer Repair and Replacement",
  },
  "/plumbing/trenchless-sewers": {
    title: "Trenchless Sewer Services",
  },
  "/plumbing/water-heaters": {
    title: "Water Heater Services",
  },
  "/plumbing/water-line-plumbing": {
    title: "Water Line Plumbing",
  },
  "/sewers/cleaning": {
    title: "Sewer Cleaning",
  },
  "/sewers/hydro-jetting": {
    title: "Sewer Hydro Jetting",
  },
  "/sewers/inspection": {
    title: "Sewer Inspection",
  },
  "/sewers/repair-and-replacement": {
    title: "Sewer Repair and Replacement Services",
  },
  "/sewers/trenchless-technology": {
    title: "Trenchless Sewer Technology",
  },
  "/hvac/heat-pumps": {
    title: "Heat Pump Services",
  },
  "/hvac/emergency-hvac": {
    title: "Emergency HVAC Services",
  },
};

function updateMeta(attribute, name, content) {
  let tag = document.head.querySelector(
    `meta[${attribute}="${name}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function updateCanonical(url) {
  let tag = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!url) {
    tag?.remove();
    return;
  }

  if (!tag) {
    tag = document.createElement("link");
    tag.rel = "canonical";
    document.head.appendChild(tag);
  }

  tag.href = url;
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path];
    const title = page
      ? `${page.title} | GlobalFixs`
      : "Page Not Found | GlobalFixs";

    const description =
      page?.description ||
      (page
        ? `Learn about ${page.title.toLowerCase()} and related service options with GlobalFixs.`
        : "The requested page could not be found.");

    const url = BASE_URL + path;

    document.title = title;

    updateMeta("name", "description", description);

    updateMeta(
      "name",
      "robots",
      page
        ? "index, follow, max-image-preview:large"
        : "noindex, follow"
    );

    updateCanonical(page ? url : null);

    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:site_name", "GlobalFixs");
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", description);
    updateMeta("property", "og:url", url);

    updateMeta(
      "name",
      "twitter:card",
      "summary_large_image"
    );
    updateMeta("name", "twitter:title", title);
    updateMeta(
      "name",
      "twitter:description",
      description
    );
  }, [pathname]);

  return null;
}
