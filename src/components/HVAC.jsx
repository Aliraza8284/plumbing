// src/components/HVAC.jsx
import { Link } from "react-router-dom";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";

const CONTACT = "/contact";
const PHONE_DISPLAY = "+1 (844) 212-91-86";
const PHONE_TEL = "tel:+18442129186";

const IMG = {
  hero: "https://images.unsplash.com/photo-1631545806609-24b86e2f3d6c?w=1200&q=80",
};

const SERVICES = [
  { n: "01", t: "Heat Pumps", d: "Efficient heating and cooling in one system.", to: "/hvac/heat-pumps" },
  { n: "02", t: "Emergency HVAC", d: "Same-day service when your system quits.", to: "/hvac/emergency-hvac" },
  { n: "03", t: "AC Repair", d: "Not cooling? We'll find out why and fix it.", to: "/hvac/emergency-hvac" },
  { n: "04", t: "Heating Repair", d: "Furnace or heat pump — we keep you warm.", to: "/hvac/emergency-hvac" },
  { n: "05", t: "HVAC Maintenance", d: "Yearly tune-ups that prevent expensive failures.", to: "/hvac/heat-pumps" },
];

const SIGNS = [
  "It's running but not heating or cooling",
  "Your energy bill jumped unexpectedly",
  "Ice on the outdoor unit",
  "Strange noises or smells from vents",
  "It runs constantly but never reaches the set temperature",
  "It's been over a year since the last tune-up",
];

const FAQ = [
  ["How often should I service my HVAC?", "Once a year is the minimum — ideally once before cooling season and once before heating season."],
  ["Do heat pumps work in cold climates?", "Newer cold-climate models do. We'll tell you what to expect in your area."],
  ["How fast can you get here?", "For emergencies, usually same day. For standard service, often next day."],
];

function Photo({ src, alt, eager = false, className = "" }) {
  return (
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`h-full w-full object-cover ${className}`} />
  );
}

export default function HVAC() {
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

      {/* ---------- HERO ---------- */}
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">HVAC Services</p>
          </div>

          <h1 className="gf-display text-[52px] leading-[0.98] sm:text-[80px] lg:text-[104px] max-w-[15ch]">
            Heating and cooling, handled.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-end">
            <p className="max-w-[52ch] text-[16px] leading-relaxed text-[#425664]">
              Installation, repair, and maintenance for heat pumps, AC, and furnaces. One team for the whole system — no juggling contractors.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-[#364753] transition-colors">
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
              <Link to={CONTACT} className="inline-flex items-center justify-center gap-2 border border-[#1f2a33]/25 px-6 py-3.5 text-[14px] font-bold text-[#425664] hover:border-[#1f2a33] transition-colors">
                <MessageSquare size={16} /> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FULL-BLEED IMAGE ---------- */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-0 sm:px-8">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#C6AD8F]">
            <Photo src={IMG.hero} alt="HVAC technician working on a system" eager />
          </div>
        </div>
      </section>

      {/* ---------- SIGNS ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">01 — Signs</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                When to call
              </h2>
            </div>
            <ul className="divide-y divide-[#1f2a33]/10">
              {SIGNS.map((s, i) => (
                <li key={s} className="flex items-baseline gap-6 py-4">
                  <span className="text-[13px] font-bold text-[#C6AD8F] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-semibold text-[#1f2a33]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">02 — Services</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                What we do
              </h2>
            </div>
            <div className="divide-y divide-[#1f2a33]/10">
              {SERVICES.map((s) => (
                <Link key={s.t} to={s.to} className="group flex items-start gap-6 py-6 transition-colors hover:text-[#8a6f4d]">
                  <span className="text-[13px] font-bold text-[#C6AD8F] tabular-nums pt-1.5">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[22px] font-extrabold leading-tight text-[#1f2a33] group-hover:text-[#8a6f4d] transition-colors">{s.t}</h3>
                    <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">{s.d}</p>
                  </div>
                  <ArrowRight size={18} className="mt-2 shrink-0 text-[#C6AD8F] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">03 — Questions</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                Common questions
              </h2>
            </div>
            <div className="divide-y divide-[#1f2a33]/10">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6 text-[17px] font-bold text-[#1f2a33]">
                    {q}
                    <span className="gf-plus text-[22px] font-medium leading-none text-[#C6AD8F] transition-transform duration-300" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 max-w-[60ch] text-[14.5px] leading-relaxed text-[#425664]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-end">
            <h2 className="gf-display text-[36px] leading-[1.02] sm:text-[56px] max-w-[18ch]">
              Too hot? Too cold? Let's fix it.
            </h2>
            <div className="lg:text-right">
              <p className="max-w-[44ch] text-[15px] leading-relaxed text-[#425664] lg:ml-auto">
                Call us or send a message. We'll tell you what's wrong and what it'll cost.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-[#364753] transition-colors">
                  <Phone size={16} /> {PHONE_DISPLAY}
                </a>
                <Link to={CONTACT} className="inline-flex items-center justify-center gap-2 border border-[#1f2a33]/25 px-6 py-3.5 text-[14px] font-bold text-[#425664] hover:border-[#1f2a33] transition-colors">
                  <MessageSquare size={16} /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}