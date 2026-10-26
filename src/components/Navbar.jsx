// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

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
      to: "/about",
      items: [
        { label: "History", desc: "Serving since 2002", to: "/about/history" },
        { label: "Testimonials", desc: "What clients say", to: "/about/testimonials" },
      ],
    },
    {
      name: "Plumbing",
      type: "dropdown",
      to: "/plumbing",
      twoCol: true,
      items: [
        { label: "Bathroom Plumbing", desc: "Fixtures & repairs", to: "/plumbing/bathroom-plumbing" },
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
      to: "/sewers",
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
      to: "/hvac",
      items: [
        { label: "Heat Pumps", desc: "Efficient heating", to: "/hvac/heat-pumps" },
        { label: "Emergency HVAC", desc: "Same-day service", to: "/hvac/emergency-hvac" },
      ],
    },
    { name: "Coupons", type: "link", to: "/coupons" },
  ];

  const Logo = () => (
    <Link to="/" className="group flex items-center shrink-0 select-none" aria-label="GlobalFixs Home">
      <img 
        src="/logo.png" 
        alt="GlobalFixs Logo" 
        className="h-20 sm:h-[95px] lg:h-[110px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        style={{ mixBlendMode: 'multiply' }} 
      />
    </Link>
  );

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-[#F6F4F2]">
      <nav
        className={`w-full bg-[#F6F4F2]/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-[#425664]/5 border-[#e5e0da]" : "border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-24 lg:h-28" : "h-28 lg:h-[120px]"}`}>
            
            {/* 1. LEFT: Logo — left se gap add kiya gaya hai */}
            <div className="flex-shrink-0 pl-6 sm:pl-10 lg:pl-14">
              <Logo />
            </div>

            {/* 2. CENTER: Menu */}
            <div className="hidden md:flex flex-1 justify-center items-center">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.type === "link" ? (
                      <Link
                        to={item.to}
                        className="relative flex items-center px-4 py-2.5 text-[14px] font-semibold text-[#1a1a1a] rounded-lg transition-all duration-200 hover:text-[#C6AD8F] hover:bg-[#C6AD8F]/8"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <>
                        <Link
                          to={item.to}
                          className="relative flex items-center gap-1.5 px-4 py-2.5 text-[14px] font-semibold text-[#1a1a1a] rounded-lg transition-all duration-200 hover:text-[#C6AD8F] hover:bg-[#C6AD8F]/8"
                        >
                          {item.name}
                          <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180 opacity-60" fill="currentColor">
                            <path d="M6 9L1 4h10z" />
                          </svg>
                        </Link>

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
                            <div className="px-5 py-3 bg-[#F6F4F2] border-t border-[#f0ebe5] flex items-center justify-between">
                              <span className="text-[11.5px] text-[#425664]/70 font-medium">
                                Need help choosing?
                              </span>
                              {/* Yahan number update kiya gaya hai */}
                              <a
                                href="tel:+18442129186"
                                className="text-[12px] font-bold text-[#C6AD8F] hover:text-[#b89a78] transition-colors duration-200 flex items-center gap-1"
                              >
                                Call (844) 212-9186
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
            </div>

            {/* 3. RIGHT: CTA Button — right side pe matching gap */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-end pr-6 sm:pr-10 lg:pr-14">
              {/* Yahan number update kiya gaya hai */}
              <a
                href="tel:+18442129186"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#425664] to-[#2c3b47] text-white text-[15px] font-bold shadow-md shadow-[#425664]/20 hover:shadow-lg hover:shadow-[#425664]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group border border-[#425664]"
              >
                <Phone size={18} className="text-[#C6AD8F]" />
                <span className="hidden lg:inline">(844) 212-9186</span>
                <span className="lg:hidden">Call Now</span>
                <ArrowRight 
                  size={20} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="md:hidden relative grid place-items-center w-10 h-10 rounded-full bg-[#425664] hover:bg-[#3a4d5a] active:scale-95 transition-all duration-300 shadow-md shadow-black/10 group z-50"
            >
              <div className="flex flex-col justify-center items-center w-5 h-4 relative">
                <span className={`absolute block h-[2px] w-full bg-[#F6F4F2] rounded-full transition-all duration-300 ease-in-out ${mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"}`} />
                <span className={`absolute block h-[2px] w-full bg-[#F6F4F2] rounded-full transition-all duration-300 ease-in-out ${mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
                <span className={`absolute block h-[2px] w-full bg-[#F6F4F2] rounded-full transition-all duration-300 ease-in-out ${mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Mobile Menu (Overlay) ---------- */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white z-40 border-t border-[#e5e0da] transition-all duration-300 ease-in-out overflow-y-auto shadow-xl ${
          mobileOpen ? "opacity-100 translate-y-0 visible h-[calc(100vh-80px)]" : "opacity-0 -translate-y-4 invisible h-0"
        }`}
      >
        <ul className="py-2 pb-10">
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
                  <div className="flex items-stretch">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 flex items-center gap-3 px-6 py-4 text-[15px] font-semibold text-[#1a1a1a] hover:bg-[#F6F4F2] hover:text-[#C6AD8F] transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6AD8F]" />
                      {item.name}
                    </Link>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      aria-label={`Toggle ${item.name} submenu`}
                      className="px-5 flex items-center justify-center text-[#1a1a1a] hover:bg-[#F6F4F2] transition-colors duration-200"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`}
                        fill="currentColor"
                      >
                        <path d="M6 9L1 4h10z" />
                      </svg>
                    </button>
                  </div>

                  <ul
                    className={`bg-[#F6F4F2] overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      openDropdown === item.name ? "max-h-[1200px]" : "max-h-0"
                    }`}
                  >
                    <li>
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 pl-12 pr-6 py-3 text-[13.5px] font-bold text-[#C6AD8F] hover:bg-[#C6AD8F] hover:text-white transition-all duration-200 border-b border-[#e5e0da]"
                      >
                        View All {item.name}
                        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                      </Link>
                    </li>
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

          <li className="px-6 py-6 bg-[#F6F4F2]/50">
            <a
              href="tel:+18442129186"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-[#C6AD8F] to-[#b89a78] text-[#1f2a33] font-bold shadow-lg shadow-[#C6AD8F]/40 hover:shadow-xl active:scale-[0.98] transition-all duration-300"
            >
              <div className="bg-white/30 p-2 rounded-full">
                <Phone size={20} strokeWidth={2.5} />
              </div>
              <span className="text-[17px]">(844) 212-9186</span>
              <ArrowRight size={20} className="text-red-500 ml-2 animate-[pulse-x_1.5s_ease-in-out_infinite]" />
            </a>
          </li>
        </ul>
      </div>
      
      {/* Custom Animation for the Arrow */}
      <style>{`
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;