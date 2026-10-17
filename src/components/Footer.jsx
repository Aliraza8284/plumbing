// Footer.jsx
import { Link } from "react-router-dom";

/* =========================================================
   GlobelFixs Footer — Professional Design
   Colors: #F6F4F2 (light) | #425664 (dark) | #C6AD8F (accent)
   ========================================================= */

const PHONE = "+1 (844) 212-91-86";
const TEL = "tel:+18442129186";
const EMAIL = "hello@globelfixs.com";
const ADDRESS = "155 S Fair Oaks Ave, Pasadena, CA 91105";

const SERVICES = [
  { label: "Leak Detection", href: "/plumbing/leak-detection" },
  { label: "Repair & Replacement", href: "/sewers/repair-and-replacement" },
  { label: "Piping & Repiping", href: "/plumbing/piping-repiping" },
  { label: "Gas Plumbing", href: "/plumbing/gas-plumbing" },
  { label: "Water Heaters", href: "/plumbing/water-heaters" },
  { label: "Sewer Repair & Replacement", href: "/plumbing/sewer-repair-and-replacement" },
  { label: "Sewer Inspection", href: "/sewers/inspection" },
  { label: "Hydro Jetting", href: "/sewers/hydro-jetting" },
  { label: "Trenchless Sewers", href: "/sewers/trenchless-technology" },
  { label: "Drain Cleaning", href: "/plumbing/drain-cleaning" },
  { label: "Bathroom Plumbing", href: "/plumbing/bathroom-plumbing" },
  { label: "Commercial Plumbing", href: "/plumbing/commercial-plumbing" },
  { label: "Water Line Plumbing", href: "/plumbing/water-line-plumbing" },
  { label: "Rooter Service", href: "/plumbing/rooter-service" },
  { label: "Plumbing Maintenance", href: "/plumbing/plumbing-maintenance" },
  { label: "HVAC — Heat Pumps", href: "/hvac/heat-pumps" },
  { label: "HVAC — Emergency", href: "/hvac/emergency-hvac" },
  { label: "Emergency Services", href: "/plumbing/emergency-services" },
  { label: "Earthquake Shut-Off Valves", href: "/plumbing/earthquake-shut-off-valves" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Our History", href: "/about/history" },
  { label: "Testimonials", href: "/about/testimonials" },
  { label: "Coupons", href: "/coupons" },
  { label: "Careers", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIALS = [
  { name: "Facebook", href: "#", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" },
  { name: "Instagram", href: "#", path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 5.3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zm5.8-7.6a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0z" },
  { name: "Twitter", href: "#", path: "M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.6.2-1.3.2-2 .1a4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2.2z" },
  { name: "Yelp", href: "#", path: "M12.9 2.2c-.1-.7-.9-1-1.4-.6L8.2 4.5c-.5.4-.4 1.3.3 1.5l3.3 1c.6.2 1.2-.3 1.2-.9V2.2zm5.1 6.6c-.4-.6-1.3-.6-1.7 0l-1.9 2.9c-.4.6 0 1.4.7 1.4h3.4c.7 0 1.2-.7.9-1.3l-1.4-3zM5.2 14.4c-.3-.6.2-1.3.9-1.2l3.4.5c.7.1 1 .9.6 1.4l-2.1 2.7c-.4.5-1.3.4-1.5-.3l-1.3-3.1zm7.3 1.4c.1-.7.9-1 1.4-.5l2.6 2.4c.5.5.3 1.3-.4 1.5l-3.4.9c-.7.2-1.2-.4-1.1-1l.9-3.3z" },
  { name: "YouTube", href: "#", path: "M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 4.8 12 4.8 12 4.8s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#425664] text-[#F6F4F2] mt-12">
      <div className="max-w-7xl mx-auto px-5 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* ---- Brand Column ---- */}
          <div className="lg:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-2.5 mb-4">
              <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#C6AD8F] to-[#b89a78] shadow-lg shadow-[#C6AD8F]/25 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 32 32" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.5 4.5a5 5 0 0 0-6.9 6.3L4 20.4a2.8 2.8 0 0 0 3.9 3.9l9.6-9.6a5 5 0 0 0 6.3-6.9l-3 3-2.7-.6-.6-2.7z" />
                </svg>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-tight text-[#F6F4F2]">
                  Globel<span className="text-[#C6AD8F]">Fixs</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C6AD8F] font-semibold uppercase mt-0.5">
                  Plumbing • HVAC
                </span>
              </span>
            </Link>

            <p className="text-[13.5px] leading-relaxed text-[#F6F4F2]/70 mb-5 max-w-md">
              Founded in 2002, GlobelFixs has been providing reliable plumbing and HVAC solutions for over two decades. Our website launched in 2008, and since then we've helped thousands of families and businesses across Greater Los Angeles with expert repairs, installations, and maintenance. Licensed, insured, and available 24/7 for emergencies.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 text-[10.5px] font-semibold text-[#F6F4F2]/85">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#C6AD8F]" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z"/></svg>
                Licensed
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 text-[10.5px] font-semibold text-[#F6F4F2]/85">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#C6AD8F]" fill="currentColor"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6z"/></svg>
                Insured
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 text-[10.5px] font-semibold text-[#F6F4F2]/85">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#C6AD8F]" fill="currentColor"><path d="m12 2 3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.9 3 1.1-6.5L2.5 8.9 9 8z"/></svg>
                5-Star Rated
              </span>
            </div>

            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid place-items-center w-9 h-9 rounded-xl bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 text-[#F6F4F2]/80 hover:bg-[#C6AD8F] hover:text-[#425664] hover:border-[#C6AD8F] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ---- Services Column ---- */}
          <div className="lg:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F] mb-4">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-[#F6F4F2]/75 hover:text-[#C6AD8F] transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C6AD8F]/60 group-hover:bg-[#C6AD8F] group-hover:scale-150 transition-all duration-200" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Contact Column ---- */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F] mb-4">
              Get In Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C6AD8F]" fill="currentColor">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] uppercase tracking-wider text-[#C6AD8F] font-semibold">Address</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12.5px] text-[#F6F4F2]/80 leading-snug hover:text-[#C6AD8F] transition-colors duration-200"
                  >
                    155 S Fair Oaks Ave<br />Pasadena, CA 91105
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C6AD8F]" fill="currentColor">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] uppercase tracking-wider text-[#C6AD8F] font-semibold">Phone</p>
                  <a href={TEL} className="text-[12.5px] text-[#F6F4F2]/85 hover:text-[#C6AD8F] transition-colors duration-200 font-semibold">
                    {PHONE}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#F6F4F2]/8 border border-[#F6F4F2]/10 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C6AD8F]" fill="currentColor">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] uppercase tracking-wider text-[#C6AD8F] font-semibold">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-[12.5px] text-[#F6F4F2]/85 hover:text-[#C6AD8F] transition-colors duration-200">
                    {EMAIL}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- Company links row ---- */}
        <div className="mt-10 pt-6 border-t border-[#F6F4F2]/10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {COMPANY.map((c) => (
              <Link
                key={c.label}
                to={c.href}
                className="text-[13px] text-[#F6F4F2]/70 hover:text-[#C6AD8F] transition-colors duration-200 font-medium"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="bg-[#3a4d5a] border-t border-[#F6F4F2]/8">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#F6F4F2]/60 text-center md:text-left">
            © 2012{" "}
            <Link 
              to="/" 
              className="text-[#C6AD8F] font-semibold hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
            >
              GlobelFixs
            </Link>
            . All rights reserved. License #PL-884219
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-[12px] text-[#F6F4F2]/60 hover:text-[#C6AD8F] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-[12px] text-[#F6F4F2]/60 hover:text-[#C6AD8F] transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/areas" className="text-[12px] text-[#F6F4F2]/60 hover:text-[#C6AD8F] transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* ---- Back to Top ---- */}
      <a
        href="#top"
        aria-label="Back to top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="hidden lg:grid place-items-center fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#C6AD8F] text-[#425664] shadow-lg shadow-[#C6AD8F]/30 hover:bg-[#d4bd9f] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 z-40"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;