// Footer.jsx
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

/* =========================================================
   GlobalFixs Footer — Pay Per Call Optimized & Marketcall Approved
   Colors: #F6F4F2 (light) | #425664 (dark) | #C6AD8F (accent)
   ========================================================= */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const SERVICES = [
  { label: "Leak Detection", href: "/plumbing/leak-detection" },
  { label: "Repair & Replacement", href: "/sewers/repair-and-replacement" },
  { label: "Piping & Repiping", href: "/plumbing/piping-repiping" },
  { label: "Gas Plumbing", href: "/plumbing/gas-plumbing" },
  { label: "Water Heaters", href: "/plumbing/water-heaters" },
  { label: "Sewer Repair", href: "/plumbing/sewer-repair-and-replacement" },
  { label: "Sewer Inspection", href: "/sewers/inspection" },
  { label: "Hydro Jetting", href: "/sewers/hydro-jetting" },
  { label: "Trenchless Sewers", href: "/sewers/trenchless-technology" },
  { label: "Drain Cleaning", href: "/plumbing/drain-cleaning" },
  { label: "Bathroom Plumbing", href: "/plumbing/bathroom-plumbing" },
  { label: "Water Line Plumbing", href: "/plumbing/water-line-plumbing" },
  { label: "Rooter Service", href: "/plumbing/rooter-service" },
  { label: "Plumbing Maintenance", href: "/plumbing/plumbing-maintenance" },
  { label: "HVAC — Heat Pumps", href: "/hvac/heat-pumps" },
  { label: "HVAC — Emergency", href: "/hvac/emergency-hvac" },
  { label: "Emergency Services", href: "/plumbing/emergency-services" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Our History", href: "/about/history" },
  { label: "Coupons", href: "/coupons" },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#425664] text-[#F6F4F2] mt-12">
      
      {/* ===== MAIN FOOTER CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-5 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* ---- Brand Column ---- */}
          <div className="lg:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-2.5 mb-5">
              <img 
                src="/logo.png" 
                alt="GlobalFixs Logo" 
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ mixBlendMode: 'multiply' }} 
              />
            </Link>

            <p className="text-[13.5px] leading-relaxed text-[#F6F4F2]/70 mb-5 max-w-md">
              Founded in 2002, GlobalFixs connects you with reliable plumbing and HVAC solutions. We help you find licensed, insured, and available local technicians for emergencies and repairs.
            </p>
          </div>

          {/* ---- Services Column ---- */}
          <div className="lg:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F] mb-4">
              Our Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
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

          {/* ---- Contact Column (Navbar Style Button) ---- */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F] mb-4">
              Get In Touch
            </h3>

            <p className="text-[13px] text-[#F6F4F2]/70 leading-relaxed mb-4">
              Need help with a plumbing issue? Call us directly for the fastest response.
            </p>

            {/* Yahan TEL aur PHONE ko theek kiya gaya hai */}
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#2c3b47] to-[#1f2a33] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group border border-white/10"
            >
              <Phone size={18} className="text-[#C6AD8F]" />
              <span className="text-[15px] font-bold tracking-wide">{PHONE_DISPLAY}</span>
              
              <ArrowRight 
                size={20} 
                className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
              />
            </a>
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

      {/* ===== MARKETCALL COMPLIANCE DISCLAIMERS ===== */}
      <div className="border-t border-[#F6F4F2]/10 bg-[#364753] py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[11px] leading-relaxed text-[#F6F4F2]/60 font-medium mb-2">
            <strong>Disclaimer:</strong> GlobalFixs is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and GlobalFixs does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on GlobalFixs.
          </p>
          <p className="text-[11px] leading-relaxed text-[#F6F4F2]/60">
            <em>Same-day and 24/7 emergency services are subject to provider participation, location, technician availability, and demand. Availability is not guaranteed and may vary by market and appointment capacity.</em>
          </p>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="bg-[#2c3b47] border-t border-[#F6F4F2]/8">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#F6F4F2]/60 text-center md:text-left">
            © 2026 GlobalFixs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-[12px] text-[#F6F4F2]/60 hover:text-[#C6AD8F] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-[12px] text-[#F6F4F2]/60 hover:text-[#C6AD8F] transition-colors duration-200">
              Terms of Service
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

      <style>{`
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;