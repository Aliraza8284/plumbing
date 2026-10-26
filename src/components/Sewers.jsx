// src/components/Sewers.jsx
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const IMG = {
  hero: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
};

const SERVICES = [
  { n: "01", t: "Sewer Cleaning", d: "Deep cleaning that clears years of buildup.", to: "/sewers/cleaning" },
  { n: "02", t: "Hydro Jetting", d: "High-pressure water blasts away grease and roots.", to: "/sewers/hydro-jetting" },
  { n: "03", t: "Sewer Inspection", d: "HD camera diagnostics — see exactly what's wrong.", to: "/sewers/inspection" },
  { n: "04", t: "Repair & Replacement", d: "Long-lasting fixes for damaged or collapsed lines.", to: "/sewers/repair-and-replacement" },
  { n: "05", t: "Trenchless Technology", d: "Minimal digging, maximum results.", to: "/sewers/trenchless-technology" },
];

const SIGNS = [
  "Slow drains throughout the house",
  "Gurgling sounds from drains or toilets",
  "Sewage smells inside or outside",
  "Soggy patches in the yard",
  "Water backing up in multiple fixtures",
  "Repeated clogs in the same spot",
];

const FAQ = [
  ["How do I know if my sewer line is damaged?", "Slow drains throughout the house, gurgling sounds, bad smells, or soggy patches in the yard are common signs. A camera inspection confirms it."],
  ["What is trenchless repair?", "It's a way to fix or replace sewer lines with minimal digging — often just two small access points instead of a full trench."],
  ["Do you handle emergency sewer backups?", "Yes. Call us any time — we prioritize backups because they can cause serious damage fast."],
];

function Photo({ src, alt, eager = false, className = "" }) {
  return (
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`h-full w-full object-cover ${className}`} />
  );
}

export default function Sewers() {
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
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* ---------- HERO — editorial, no box ---------- */}
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">Sewer Services</p>
          </div>

          <h1 className="gf-display text-[52px] leading-[0.98] sm:text-[80px] lg:text-[104px] max-w-[15ch]">
            Sewer problems, solved.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-end">
            <p className="max-w-[52ch] text-[16px] leading-relaxed text-[#425664]">
              From a slow drain to a collapsed line — we find the issue and fix it right, with minimal mess and clear pricing. No guessing, no upselling.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              {/* Call Button Replaced */}
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2.5 bg-[#425664] px-7 py-3.5 text-[15px] font-bold text-white hover:bg-[#364753] transition-all duration-300 shadow-md hover:shadow-lg group rounded-lg">
                <Phone size={18} className="text-[#C6AD8F]" />
                Call {PHONE_DISPLAY}
                <ArrowRight 
                  size={18} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FULL-BLEED IMAGE ---------- */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-0 sm:px-8">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#C6AD8F]">
            <Photo src={IMG.hero} alt="Sewer inspection and repair" eager />
          </div>
        </div>
      </section>

      {/* ---------- SIGNS — two-column editorial list ---------- */}
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

      {/* ---------- SERVICES — big numbered rows ---------- */}
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

      {/* ---------- FAQ — editorial accordion ---------- */}
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

      {/* ---------- CTA — plain, no box ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-end">
            <h2 className="gf-display text-[36px] leading-[1.02] sm:text-[56px] max-w-[18ch]">
              Sewer backup? Don't wait.
            </h2>
            <div className="lg:text-right">
              <p className="max-w-[44ch] text-[15px] leading-relaxed text-[#425664] lg:ml-auto">
                Call us directly. We'll diagnose it and tell you what it'll cost.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
                {/* Big Call Button Replaced */}
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2.5 bg-[#425664] px-7 py-3.5 text-[15px] font-bold text-white hover:bg-[#364753] transition-all duration-300 shadow-md hover:shadow-lg group rounded-lg">
                  <Phone size={18} className="text-[#C6AD8F]" />
                  Call {PHONE_DISPLAY}
                  <ArrowRight 
                    size={18} 
                    className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}