import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.globalfixs.com";
const BRAND = "GlobalFixs";
const LOGO = `${SITE}/logo.png`;

// SEO metadata for all 32 routes in App.jsx.
const pages = {
  "/": ["Plumbing, Sewer & HVAC Service Options", "Explore plumbing, sewer and HVAC service options with GlobalFixs. Learn about local providers, drain cleaning, water heaters and emergency services."],
  "/about": ["About GlobalFixs", "Learn about GlobalFixs and how we help homeowners explore plumbing, sewer and HVAC service options from independent local providers."],
  "/about/history": ["Our History", "Explore the background and history of GlobalFixs and our approach to helping homeowners find plumbing, sewer and HVAC service information."],
  "/about/testimonials": ["Customer Testimonials", "Read testimonials shared about GlobalFixs and learn about customer experiences with our service information and provider connections."],
  "/contact": ["Contact GlobalFixs", "Contact GlobalFixs for information about plumbing, sewer and HVAC service options and connecting with independent local providers."],
  "/coupons": ["Plumbing, Sewer & HVAC Coupons", "Explore available coupons and service offers listed by GlobalFixs for plumbing, sewer and HVAC service options. Check offer details and eligibility."],
  "/hvac": ["HVAC Service Options", "Explore HVAC service options, including heating, cooling, heat pumps and emergency HVAC assistance, with information from GlobalFixs."],
  "/hvac/emergency-hvac": ["Emergency HVAC Services", "Learn about emergency HVAC service options for urgent heating and cooling problems and how to find assistance through GlobalFixs."],
  "/hvac/heat-pumps": ["Heat Pump Services", "Explore heat pump installation, maintenance and repair service options for home heating and cooling with GlobalFixs."],
  "/plumbing": ["Plumbing Service Options", "Explore plumbing service options for leaks, drains, pipes, water heaters and more. Learn about independent local providers through GlobalFixs."],
  "/plumbing/bathroom-plumbing": ["Bathroom Plumbing Services", "Learn about bathroom plumbing service options for sinks, toilets, showers, faucets and common plumbing repairs with GlobalFixs."],
  "/plumbing/commercial-plumbing": ["Commercial Plumbing Services", "Explore commercial plumbing service options for business properties, including piping, drains, maintenance and plumbing repairs."],
  "/plumbing/drain-cleaning": ["Drain Cleaning Services", "Learn about drain cleaning service options for clogged sinks, slow drains and plumbing blockages with GlobalFixs."],
  "/plumbing/earthquake-shut-off-valves": ["Earthquake Shut-Off Valve Services", "Explore earthquake gas shut-off valve service options, including installation and inspection information, with GlobalFixs."],
  "/plumbing/emergency-services": ["Emergency Plumbing Services", "Explore emergency plumbing service options for burst pipes, major leaks, blocked drains and other urgent plumbing problems."],
  "/plumbing/gas-plumbing": ["Gas Plumbing Services", "Learn about gas plumbing service options, including gas line installation, inspections and repairs by qualified professionals."],
  "/plumbing/hydro-jetting": ["Plumbing Hydro Jetting Services", "Explore plumbing hydro jetting options for removing stubborn buildup and blockages from drain and sewer pipes."],
  "/plumbing/leak-detection": ["Plumbing Leak Detection Services", "Learn about plumbing leak detection options for hidden water leaks, pipe leaks and moisture-related plumbing problems."],
  "/plumbing/piping-repiping": ["Piping & Repiping Services", "Explore piping and repiping service options for aging pipes, water supply lines and plumbing system upgrades."],
  "/plumbing/plumbing-maintenance": ["Plumbing Maintenance Services", "Learn about routine plumbing maintenance options, inspections and preventive care for home plumbing systems."],
  "/plumbing/rooter-service": ["Rooter Services", "Explore rooter service options for clogged drains, tree root intrusions and common sewer line blockages."],
  "/plumbing/sewer-inspection": ["Plumbing Sewer Inspection Services", "Learn about sewer line inspection options, including camera inspections to identify blockages, damage and pipe issues."],
  "/plumbing/sewer-repair-and-replacement": ["Sewer Repair & Replacement Services", "Explore sewer line repair and replacement options for damaged, aging or blocked sewer pipes with GlobalFixs."],
  "/plumbing/trenchless-sewers": ["Trenchless Sewer Services", "Learn about trenchless sewer repair and replacement options designed to reduce digging and surface disruption."],
  "/plumbing/water-heaters": ["Water Heater Services", "Explore water heater installation, maintenance and repair options for common hot water problems with GlobalFixs."],
  "/plumbing/water-line-plumbing": ["Water Line Plumbing Services", "Learn about water line installation, leak repair and replacement options for residential plumbing systems."],
  "/sewers": ["Sewer Service Options", "Explore sewer cleaning, inspections, hydro jetting, repairs and trenchless sewer service options with GlobalFixs."],
  "/sewers/cleaning": ["Sewer Cleaning Services", "Learn about sewer cleaning options for buildup, recurring clogs and sewer line blockages with GlobalFixs."],
  "/sewers/hydro-jetting": ["Sewer Hydro Jetting Services", "Explore sewer hydro jetting service options for clearing grease, debris and stubborn buildup from sewer lines."],
  "/sewers/inspection": ["Sewer Inspection Services", "Learn about sewer camera inspection options for identifying pipe damage, blockages and other sewer line concerns."],
  "/sewers/repair-and-replacement": ["Sewer Line Repair & Replacement", "Explore sewer line repair and replacement options for cracked, damaged or deteriorating sewer pipes."],
  "/sewers/trenchless-technology": ["Trenchless Sewer Technology", "Learn about trenchless sewer technology and repair methods that can help minimize excavation during sewer line work."],
};

function setMeta(selector, key, value, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const entry = pages[path];

    if (!entry) {
      document.title = `Page Not Found | ${BRAND}`;
      setMeta('meta[name="robots"]', "name", "robots", "noindex, follow");
      document.head.querySelector('link[rel="canonical"]')?.remove();
      return;
    }

    const [pageTitle, description] = entry;
    const title = `${pageTitle} | ${BRAND}`;
    const url = `${SITE}${path === "/" ? "/" : path}`;

    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-image-preview:large");
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "en_US");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", BRAND);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", LOGO);
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", `${BRAND} official logo`);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", LOGO);
    setCanonical(url);
  }, [pathname]);

  return null;
}
