// pages/WaterLinePlumbing.jsx
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  ArrowRight,
  Droplets,
  Gauge,
  ShieldAlert,
  MapPin,
  Search,
  Wrench,
  ShieldCheck,
  Waves,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const IMG = {
  hero: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1800&q=85",
  secondary: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  iconBg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85",
};

const SERVICES = [
  {
    icon: Search,
    title: "Leak Detection & Location",
    desc: "We use non-invasive acoustic listening and thermal imaging to find the exact spot of the leak before we dig.",
  },
  {
    icon: Wrench,
    title: "Main Line Repair",
    desc: "Spot repairs for isolated breaks, corroded fittings, or root intrusion, restoring your water supply fast.",
  },
  {
    icon: Droplets,
    title: "Full Line Replacement",
    desc: "When the pipe is beyond repair, we replace the entire line with heavy-duty, code-compliant materials.",
  },
  {
    icon: ShieldCheck,
    title: "Pressure Testing",
    desc: "After any repair or installation, we pressure-test the entire system to ensure there are no hidden leaks.",
  },
];

const SIGNS = [
  "A sudden, unexplained spike in your water bill.",
  "Low water pressure throughout the entire house, not just one faucet.",
  "The sound of running water when all fixtures are turned off.",
  "Soggy patches of grass or sunken spots in your yard.",
  "Water stains on the ceiling or foundation walls.",
];

export default function WaterLinePlumbing() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= 1. HERO (Magazine Split) ================= */}
      <section className="relative overflow-hidden bg-[#F6F4F2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          
          {/* Left Text */}
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-12 lg:py-24 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Main Water Lines
              </p>
            </div>
            
            <h1 className="gf-display text-[42px] leading-[1.05] sm:text-[54px] lg:text-[64px] text-[#1f2a33]">
              Water line issues<br/>
              <span className="text-[#425664]">solved quietly.</span>
            </h1>
            
            <p className="mt-6 max-w-[46ch] text-[15.5px] leading-relaxed text-[#425664]">
              A broken main line can disrupt your whole home. We locate the problem with precision, 
              fix it with minimal digging, and restore your water pressure.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+18442129186"
                className="inline-flex items-center gap-2 rounded-lg bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white transition hover:bg-[#364753]"
              >
                <Phone size={16} />
                Call Now
              </a>
              <Link
                to={CONTACT}
                className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a33]/15 bg-white px-6 py-3.5 text-[14px] font-bold text-[#425664] transition hover:border-[#425664]"
              >
                <MessageSquare size={16} />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <img
              src={IMG.hero}
              alt="Water line plumbing"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-auto bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-lg border border-[#1f2a33]/10 max-w-xs">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#C6AD8F]/20 text-[#8a6f4d]">
                  <Gauge size={20} />
                </span>
                <div>
                  <p className="text-[14px] font-extrabold text-[#1f2a33]">Full Flow</p>
                  <p className="text-[11px] font-semibold text-[#425664]">Restored & Tested</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. SERVICES (Minimal Cards) ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">What We Do</span>
              </div>
              <h2 className="gf-display text-[32px] leading-[1.05] sm:text-[42px] text-[#1f2a33]">
                From the meter to<br/>
                <span className="text-[#425664]">every fixture.</span>
              </h2>
            </div>
            <p className="max-w-[40ch] text-[14.5px] leading-relaxed text-[#425664]">
              We handle everything from the city meter to your home's shut-off valve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="group rounded-xl border border-[#1f2a33]/10 bg-[#F6F4F2] p-6 transition-all duration-300 hover:bg-white hover:border-[#425664]/30 hover:shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-[#1f2a33]/10 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[#1f2a33] mb-2">{s.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[#425664]">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. WARNING SIGNS (Dark Section) ================= */}
      <section className="bg-[#1f2a33] py-16 sm:py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 items-center">
          
          <div className="relative">
            <img
              src={IMG.secondary}
              alt="Modern home exterior"
              className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl border border-white/10"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:flex h-24 w-24 items-center justify-center rounded-2xl bg-[#C6AD8F] text-[#1f2a33] shadow-lg border-4 border-[#1f2a33]">
              <ShieldAlert size={32} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">Warning Signs</span>
            </div>
            <h2 className="gf-display text-[32px] leading-[1.05] sm:text-[42px] text-white mb-6">
              Is your main line leaking?
            </h2>
            <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-white/70 mb-8">
              A broken water line can waste hundreds of gallons a day. If you notice these signs, 
              contact us immediately.
            </p>
            
            <ul className="space-y-4">
              {SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/20 text-[#C6AD8F]">
                    <Waves size={12} strokeWidth={3} />
                  </span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 4. CTA (Asymmetrical) ================= */}
      <section className="py-16 sm:py-24 bg-[#F6F4F2]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#425664] p-8 sm:p-12 lg:p-16">
            {/* Background Image with low opacity */}
            <div className="absolute inset-0 opacity-10">
              <img src={IMG.iconBg} alt="Background" className="h-full w-full object-cover" />
            </div>
            
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] items-center">
              <div>
                <h2 className="gf-display text-[32px] leading-[1.05] sm:text-[42px] text-white">
                  Ready to restore<br/>
                  <span className="text-[#C6AD8F]">your water pressure?</span>
                </h2>
                <p className="mt-4 max-w-[46ch] text-[14.5px] leading-relaxed text-white/80">
                  We'll find the problem, explain your options, and fix it right. No surprises, no hidden fees.
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <a
                  href="tel:+18442129186"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#C6AD8F] px-8 py-3.5 text-[14.5px] font-bold text-[#1f2a33] transition hover:bg-white"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <Link
                  to={CONTACT}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-8 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-white/10"
                >
                  <MessageSquare size={16} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}