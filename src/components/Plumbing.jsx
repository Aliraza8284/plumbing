// src/components/Plumbing.jsx
import { Link } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  ArrowRight,
  Droplets,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const CONTACT = "/contact";
const PHONE_DISPLAY = "+1 (844) 212-91-86";
const PHONE_TEL = "tel:+18442129186";

const IMG = {
  hero: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
  round: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80",
};

const SERVICES = [
  { t: "Bathroom Plumbing", d: "Fixtures, faucets, toilets, and everything in between.", to: "/plumbing/bathroom-plumbing" },
  { t: "Drain Cleaning", d: "Fast clog removal that actually fixes the problem.", to: "/plumbing/drain-cleaning" },
  { t: "Emergency Services", d: "24/7 response when water won't wait.", to: "/plumbing/emergency-services" },
  { t: "Gas Plumbing", d: "Certified, safe, and up to code.", to: "/plumbing/gas-plumbing" },
  { t: "Hydro-Jetting", d: "High-pressure cleaning for tough blockages.", to: "/plumbing/hydro-jetting" },
  { t: "Leak Detection", d: "Pinpoint accuracy — no unnecessary digging.", to: "/plumbing/leak-detection" },
  { t: "Water Heaters", d: "Repair, replacement, and tankless installs.", to: "/plumbing/water-heaters" },
  { t: "Sewer Repair", d: "Full service, from inspection to replacement.", to: "/plumbing/sewer-repair-and-replacement" },
];

const WHY = [
  [Clock, "24/7 availability", "Plumbing problems don't keep business hours. Neither do we."],
  [ShieldCheck, "Licensed & insured", "Every technician is certified, background-checked, and covered."],
  [Wrench, "Done right the first time", "We diagnose the real cause, not just the symptom."],
];

const SIGNS = [
  "A dripping faucet that won't stop",
  "Water backing up in the sink or tub",
  "Low water pressure throughout the house",
  "A water bill that jumped for no reason",
  "Strange noises from pipes or the water heater",
  "A gas smell or a pilot light that won't stay lit",
];

const FAQ = [
  ["How fast can you get here?", "For emergencies, usually within the hour in our service area. For standard jobs, we can often schedule same-day or next-day."],
  ["Do you charge for estimates?", "We give you a clear price before any work begins, so there are no surprises on the bill."],
  ["Can you handle commercial plumbing?", "Yes — from small businesses to larger commercial properties. Ask us about scheduled maintenance contracts."],
];

function Photo({ src, alt, eager = false, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export default function Plumbing() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        .gf-page details > summary { list-style: none; }
        .gf-page details > summary::-webkit-details-marker { display: none; }
        .gf-page details[open] .gf-plus { transform: rotate(45deg); }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Plumbing Services</p>
            </div>
            <h1 className="gf-display text-[44px] leading-[1.05] sm:text-[56px] lg:text-[64px]">
              Plumbing done right, the first time
            </h1>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#425664]">
              From a dripping faucet to a full repipe, we handle the work that keeps your home or business running. Clear pricing, no runaround.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-[#364753]">
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
              <Link to={CONTACT} className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1f2a33]/20 bg-white px-6 py-3.5 text-[14px] font-bold text-[#425664] transition-colors duration-300 hover:border-[#425664]">
                <MessageSquare size={16} /> Contact Us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[420px] lg:mr-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-[#C6AD8F] shadow-sm">
              <Photo src={IMG.hero} alt="Plumber working under a sink" eager />
            </div>
            <div className="absolute -bottom-6 -left-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#F6F4F2] bg-[#425664] sm:-left-8 sm:h-36 sm:w-36 shadow-md">
              <Photo src={IMG.round} alt="Plumbing tools" eager />
            </div>
            <p className="absolute -right-2 top-8 max-w-[150px] rounded-xl border border-[#1f2a33]/10 bg-white px-4 py-3 text-[13px] font-bold leading-snug text-[#425664] shadow-sm sm:-right-6">
              Licensed, insured, and on time
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[22ch] text-[30px] leading-[1.05] sm:text-[42px]">Why people call us back</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {WHY.map(([Icon, t, d]) => (
              <div key={t}>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[18px] font-extrabold text-[#1f2a33]">{t}</h3>
                <p className="mt-2 max-w-[38ch] text-[14.5px] leading-relaxed text-[#425664]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — FLAT BORDER ONLY */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">What we can do for you</h2>
          <p className="mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">
            Pick a service to see the details, or call us and describe what's going on. We'll tell you what it'll take.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.t}
                to={s.to}
                className="group flex flex-col border border-[#1f2a33]/15 bg-white p-6 transition-colors duration-200 hover:border-[#C6AD8F]"
              >
                <span className="flex h-10 w-10 items-center justify-center text-[#8a6f4d]">
                  <Droplets size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[16px] font-extrabold text-[#1f2a33]">{s.t}</h3>
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-[#425664]">{s.d}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-bold text-[#C6AD8F] transition-transform duration-300 group-hover:translate-x-1">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signs + FAQ — SIGNS BOX FLAT BORDER ONLY */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <aside className="self-start border border-[#1f2a33]/15 p-7 sm:p-9">
            <h2 className="gf-display text-[24px] leading-tight text-[#1f2a33]">Signs you should call us</h2>
            <ul className="mt-5 space-y-3.5">
              {SIGNS.map((s) => (
                <li key={s} className="flex gap-3 text-[14px] font-semibold leading-snug text-[#425664]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#8a6f4d]" aria-hidden="true" /> {s}
                </li>
              ))}
            </ul>
            <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#425664] px-5 py-3 text-[13.5px] font-bold text-white hover:bg-[#364753] transition-colors">
              <Phone size={15} /> Call {PHONE_DISPLAY}
            </a>
          </aside>

          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">Common questions</h2>
            <div className="mt-6 border-t border-[#1f2a33]/10">
              {FAQ.map(([q, a]) => (
                <details key={q} className="border-b border-[#1f2a33]/10 py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-5 text-[15.5px] font-bold text-[#1f2a33]">
                    {q}
                    <span className="gf-plus text-[24px] font-medium leading-none text-[#C6AD8F] transition-transform duration-300" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-[#425664]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1f2a33] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="gf-display max-w-[20ch] text-[28px] leading-[1.05] sm:text-[36px]">
                Something leaking? Let's take a look.
              </h2>
              <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-white/80">
                Call us or send a message. We'll tell you what's wrong and what it'll cost.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition-colors duration-300 hover:bg-white">
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
              <Link to={CONTACT} className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-white/10">
                <MessageSquare size={16} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}