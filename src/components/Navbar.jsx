// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   GlobalFixs Navbar — Professional Redesign
   Colors: #F6F4F2 (light) | #425664 (dark) | #C6AD8F (accent)
   ========================================================= */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const navItems = [
    { name: "Home", type: "link", to: "/" },
    {
      name: "About Us",
      type: "dropdown",
      items: [
        { label: "History", desc: "Serving since 2002", to: "/about/history" },
        { label: "Testimonials", desc: "What clients say", to: "/about/testimonials" },
      ],
    },
    {
      name: "Plumbing",
      type: "dropdown",
      twoCol: true,
      items: [
        { label: "Bathroom Plumbing", desc: "Fixtures & repairs", to: "/plumbing/bathroom-plumbing" },
        { label: "Commercial Plumbing", desc: "Business solutions", to: "/plumbing/commercial-plumbing" },
        { label: "Drain Cleaning", desc: "Fast clog removal", to: "/plumbing/drain-cleaning" },
        { label: "Earthquake Shut Off Valves", desc: "Safety first", to: "/plumbing/earthquake-shut-off-valves" },
        { label: "Emergency Services", desc: "24/7 response", to: "/plumbing/emergency-services" },
        { label: "Gas Plumbing", desc: "Certified & safe", to: "/plumbing/gas-plumbing" },
        { label: "Hydro-Jetting", desc: "High-pressure clean", to: "/plumbing/hydro-jetting" },
        { label: "Leak Detection", desc: "Pinpoint accuracy", to: "/plumbing/leak-detection" },
        { label: "Plumbing Maintenance", desc: "Preventive care", to: "/plumbing/plumbing-maintenance" },
        { label: "Piping & Repiping", desc: "Whole-home", to: "/plumbing/piping-repiping" },
        { label: "Rooter Service", desc: "Tough blockages", to: "/plumbing/rooter-service" },
        { label: "Sewer Inspection", desc: "Camera diagnostics", to: "/plumbing/sewer-inspection" },
        { label: "Sewer Repair & Replacement", desc: "Full service", to: "/plumbing/sewer-repair-and-replacement" },
        { label: "Trenchless Sewers", desc: "No-dig repair", to: "/plumbing/trenchless-sewers" },
        { label: "Water Heaters", desc: "Repair & install", to: "/plumbing/water-heaters" },
        { label: "Water Line Plumbing", desc: "Main line experts", to: "/plumbing/water-line-plumbing" },
      ],
    },
    {
      name: "Sewers",
      type: "dropdown",
      items: [
        { label: "Cleaning", desc: "Deep sewer clean", to: "/sewers/cleaning" },
        { label: "Hydro Jetting", desc: "Powerful jetting", to: "/plumbing/hydro-jetting" }, 
        { label: "Inspection", desc: "HD camera", to: "/plumbing/sewer-inspection" }, 
        { label: "Repair & Replacement", desc: "Long-lasting", to: "/sewers/repair-and-replacement" },
        { label: "Trenchless Technology", desc: "Minimal digging", to: "/sewers/trenchless-technology" },
      ],
    },
    {
      name: "HVAC Services",
      type: "dropdown",
      items: [
        { label: "Heat Pumps", desc: "Efficient heating", to: "/hvac/heat-pumps" },
        { label: "Emergency HVAC", desc: "Same-day service", to: "/hvac/emergency-hvac" },
      ],
    },
    { name: "Coupons", type: "link", to: "/coupons" },
    { name: "Contact Us", type: "link", to: "/contact" },
  ];

  const Logo = () => (
    <Link to="/" className="group flex items-center gap-3 shrink-0 select-none" aria-label="GlobalFixs Home">
      <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#C6AD8F] to-[#b89a78] shadow-md shadow-[#C6AD8F]/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#C6AD8F]/40">
        <svg viewBox="0 0 32 32" className="w-5.5 h-5.5 text-white transition-transform duration-500 group-hover:rotate-[360deg]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 4.5a5 5 0 0 0-6.9 6.3L4 20.4a2.8 2.8 0 0 0 3.9 3.9l9.6-9.6a5 5 0 0 0 6.3-6.9l-3 3-2.7-.6-.6-2.7z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#1a1a1a]">
          Global<span className="text-[#C6AD8F]">Fixs</span>
        </span>
        <span className="hidden sm:block text-[9px] tracking-[0.25em] text-[#425664]/60 font-semibold uppercase mt-0.5">
          Plumbing • HVAC
        </span>
      </span>
    </Link>
  );

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      {/* ---------- Top Utility Bar ---------- */}
      <div className="block bg-[#425664] text-[#F6F4F2] text-[11px] sm:text-[12px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-row items-center justify-between py-2 sm:py-0 sm:h-9 gap-2 sm:gap-0">
          
          {/* Left Side: Address & Hours */}
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Address (Mobile & PC dono par) */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=155+S+Fair+Oaks+Ave,+Pasadena,+CA+91105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 hover:text-[#C6AD8F] transition-colors whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C6AD8F]" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
              {/* Mobile par chota address, PC par bara */}
              <span className="hidden sm:inline">155 S Fair Oaks Ave, Pasadena, CA</span>
              <span className="sm:hidden">Pasadena, CA</span>
            </a>

            {/* Hours (Sirf PC par dikhega, Mobile par hidden) */}
            <span className="hidden sm:flex items-center gap-2 whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#C6AD8F]" fill="currentColor"><path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm1 11.4V6h-2v7l5.2 3.1 1-1.7-4.2-2z"/></svg>
              Mon–Sun: 24 Hours
            </span>
          </div>

          {/* Right Side: Phone & Badge */}
          <div className="flex items-center gap-2 sm:gap-5">
            {/* Phone Number (Mobile & PC dono par) */}
            <a href="tel:+18442129186" className="flex items-center gap-1 sm:gap-2 text-[#C6AD8F] font-bold hover:text-white transition-colors whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
              +1 (844) 212-91-86
            </a>
            
            {/* Licensed Badge (Mobile par hidden, PC par dikhega) */}
            <span className="hidden sm:flex items-center gap-2 text-[#C6AD8F] font-semibold border-l border-white/20 pl-5 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6AD8F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6AD8F]"></span>
              </span>
              Licensed & Insured
            </span>
          </div>

        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <nav
        className={`bg-[#F6F4F2]/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-[#425664]/5 border-[#e5e0da]" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"}`}>
            <Logo />

            {/* ---------- Desktop Menu ---------- */}
            <ul className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  {item.type === "link" ? (
                    <Link
                      to={item.to}
                      className="relative flex items-center px-4 py-2.5 text-[13.5px] font-semibold text-[#1a1a1a] rounded-lg transition-all duration-200 hover:text-[#C6AD8F] hover:bg-[#C6AD8F]/8"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="relative flex items-center gap-1.5 px-4 py-2.5 text-[13.5px] font-semibold text-[#1a1a1a] rounded-lg transition-all duration-200 hover:text-[#C6AD8F] hover:bg-[#C6AD8F]/8"
                      >
                        {item.name}
                        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" fill="currentColor">
                          <path d="M6 9L1 4h10z" />
                        </svg>
                      </button>

                      {/* Dropdown Panel */}
                      <div
                        className={`
                          absolute top-full left-1/2 -translate-x-1/2 pt-3
                          opacity-0 invisible translate-y-2
                          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                          transition-all duration-300 ease-out
                          ${item.twoCol ? "w-[620px]" : "w-[300px]"}
                        `}
                      >
                        <div className="relative bg-white rounded-2xl shadow-2xl shadow-[#425664]/15 border border-[#e5e0da] overflow-hidden">
                          <div className="h-1 bg-gradient-to-r from-[#C6AD8F] via-[#d4bd9f] to-[#C6AD8F]" />

                          <div className="px-5 pt-4 pb-3 border-b border-[#f0ebe5]">
                            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F]">
                              {item.name}
                            </p>
                          </div>

                          <ul className={`py-2 ${item.twoCol ? "grid grid-cols-2" : ""} max-h-[65vh] overflow-y-auto`}>
                            {item.items.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  to={sub.to}
                                  className="group/sub flex items-start gap-3 px-5 py-2.5 transition-all duration-200 hover:bg-[#F6F4F2]"
                                >
                                  <span className="mt-1 shrink-0 grid place-items-center w-6 h-6 rounded-md bg-[#C6AD8F]/12 text-[#C6AD8F] transition-all duration-200 group-hover/sub:bg-[#C6AD8F] group-hover/sub:text-white group-hover/sub:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M5 12l5 5L20 7" />
                                    </svg>
                                  </span>
                                  <span className="flex flex-col min-w-0">
                                    <span className="text-[13.5px] font-semibold text-[#425664] transition-colors duration-200 group-hover/sub:text-[#C6AD8F] truncate">
                                      {sub.label}
                                    </span>
                                    <span className="text-[11.5px] text-[#425664]/55 transition-colors duration-200 group-hover/sub:text-[#425664]/80 truncate">
                                      {sub.desc}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Dropdown Footer CTA */}
                          <div className="px-5 py-3 bg-[#F6F4F2] border-t border-[#f0ebe5] flex items-center justify-between">
                            <span className="text-[11.5px] text-[#425664]/70 font-medium">
                              Need help choosing?
                            </span>
                            <a
                              href="tel:+18442129186"
                              className="text-[12px] font-bold text-[#C6AD8F] hover:text-[#b89a78] transition-colors duration-200 flex items-center gap-1"
                            >
                              Call Us
                              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* ---------- CTA Button (desktop) ---------- */}
            <a
              href="tel:+18442129186"
              className="hidden xl:inline-flex items-center gap-2.5 ml-4 pl-4 pr-5 py-2.5 rounded-full bg-gradient-to-r from-[#C6AD8F] to-[#b89a78] text-white text-[13px] font-bold shadow-md shadow-[#C6AD8F]/30 hover:shadow-lg hover:shadow-[#C6AD8F]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-white/20">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
                </svg>
              </span>
              Call Now
            </a>

            {/* ---------- Hamburger ---------- */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="xl:hidden relative grid place-items-center w-11 h-11 rounded-xl bg-[#425664] hover:bg-[#3a4d5a] active:scale-95 transition-all duration-200 shadow-sm"
            >
              <div className="flex flex-col justify-between w-5 h-4">
                <span className={`block h-[2.5px] w-full bg-[#F6F4F2] rounded-full origin-center transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-[2.5px] w-full bg-[#F6F4F2] rounded-full transition-all duration-200 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-[2.5px] w-full bg-[#F6F4F2] rounded-full origin-center transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Mobile Menu ---------- */}
      <div
        className={`xl:hidden overflow-hidden bg-white border-t border-[#e5e0da] transition-[max-height,opacity] duration-400 ease-in-out ${
          mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="overflow-y-auto max-h-[calc(100vh-4rem)] py-2">
          {navItems.map((item) => (
            <li key={item.name} className="border-b border-[#f0ebe5] last:border-0">
              {item.type === "link" ? (
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-6 py-4 text-[15px] font-semibold text-[#1a1a1a] hover:bg-[#F6F4F2] hover:text-[#C6AD8F] transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6AD8F]" />
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between px-6 py-4 text-[15px] font-semibold text-[#1a1a1a] hover:bg-[#F6F4F2] transition-colors duration-200"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6AD8F]" />
                      {item.name}
                    </span>
                    <svg
                      viewBox="0 0 12 12"
                      className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`}
                      fill="currentColor"
                    >
                      <path d="M6 9L1 4h10z" />
                    </svg>
                  </button>

                  <ul
                    className={`bg-[#F6F4F2] overflow-hidden transition-[max-height] duration-400 ease-in-out ${
                      openDropdown === item.name ? "max-h-[1200px]" : "max-h-0"
                    }`}
                  >
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          to={sub.to}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 pl-12 pr-6 py-3 text-[14px] text-[#425664] border-b border-[#e5e0da] last:border-0 hover:bg-[#C6AD8F] hover:text-white hover:pl-14 transition-all duration-200"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C6AD8F] shrink-0" />
                          <span className="flex flex-col">
                            <span className="font-semibold">{sub.label}</span>
                            <span className="text-[11.5px] opacity-70">{sub.desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="px-6 py-5">
            <a
              href="tel:+18442129186"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C6AD8F] to-[#b89a78] text-white text-sm font-bold shadow-md shadow-[#C6AD8F]/30 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
              </svg>
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;