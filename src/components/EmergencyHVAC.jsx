// pages/EmergencyHVAC.jsx
import { useState } from "react";
import { Phone, MessageSquare, ArrowRight, AlertTriangle, Flame, Snowflake, Check } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

/* Working Direct Image Links (Updated with your Pexels & other links) */
const IMG = {
  hero: "https://images.pexels.com/photos/12045663/pexels-photo-12045663.jpeg?_gl=1*ibec8e*_ga*MTIyNzI3MzQwOC4xNzkyMjQ5NzQx*_ga_8JE65Q40S6*czE3OTIyNDk3NDEkbzEkZzEkdDE3OTIyNTA0MjQkajUzJGwwJGgw",
  furnace: "https://images.pexels.com/photos/36423794/pexels-photo-36423794.jpeg?_gl=1*14isem5*_ga*MTIyNzI3MzQwOC4xNzkyMjQ5NzQx*_ga_8JE65Q40S6*czE3OTIyNDk3NDEkbzEkZzEkdDE3OTIyNTAwMzIkajQyJGwwJGgw",
  ac: "https://images.pexels.com/photos/37747544/pexels-photo-37747544.png?_gl=1*thg3z2*_ga*MTIyNzI3MzQwOC4xNzkyMjQ5NzQx*_ga_8JE65Q40S6*czE3OTIyNDk3NDEkbzEkZzEkdDE3OTIyNTAxODckajU5JGwwJGgw",
  diagnostics: "https://cdn.prod.website-files.com/6912de94868419d1a0a6841d/694190b324bfbab4c8e0764d_hvac-installation-guide-louisville-image.webp",
};

const COVERS = ["Furnaces and heat pumps", "Air conditioners", "Same-day service"];

const HEATING = [
  "No heat during cold weather",
  "Furnace won't start, or keeps shutting off",
  "Heat pump not heating in freezing temperatures",
  "Unusual smells or sounds from heating equipment",
];

const COOLING = [
  "Air conditioner not cooling during a heat wave",
  "Outdoor unit not running",
  "Water leaking from the indoor unit",
  "System repeatedly tripping the breaker",
];

const STEPS = [
  ["Call us", "Tell us what the system is doing and how urgent it is. We'll book your same-day visit."],
  ["Technician arrives", "A technician comes to your home with the tools and common parts needed to diagnose the problem."],
  ["Diagnosis and options", "We explain what's wrong, what it will take to fix it, and your options before the work begins."],
  ["Repair and test", "We complete the repair, test the system and confirm it's heating or cooling properly."],
];

const PHOTOS = [
  { src: IMG.furnace, alt: "Technician inspecting a furnace", t: "Heating failures", d: "Furnaces, heat pumps and other heating equipment.", cls: "" },
  { src: IMG.ac, alt: "Technician servicing an outdoor air conditioner", t: "Cooling failures", d: "Air conditioners and heat pumps in cooling mode.", cls: "md:mt-12" },
  { src: IMG.diagnostics, alt: "Technician testing an HVAC system with a meter", t: "Proper diagnosis", d: "We test the system to find the cause, not just the symptom.", cls: "" },
];

const CHECKS = [
  "Thermostat is on the right mode, with working batteries",
  "The breaker for the furnace or air handler hasn't tripped",
  "The air filter isn't clogged. A blocked filter can shut a system down",
  "Vents are open and the outdoor unit is clear of snow, leaves and debris",
];

function Photo({ src, alt, eager = false, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`flex h-full w-full items-center justify-center bg-[#425664] p-3 text-center text-xs text-white/60 ${className}`}>
        Image unavailable
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export default function EmergencyHVAC() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="relative isolate overflow-hidden bg-[#425664] text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="py-14 sm:py-20 lg:w-[56%] lg:py-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">HVAC Services</p>
            </div>
            
            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[56px]">
              Emergency HVAC
            </h1>
            <p className="mt-4 max-w-[40ch] text-[15.5px] leading-relaxed text-white/85">
              Same-day emergency heating and cooling service.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+18442129186" className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-6 py-3.5 text-[14px] font-bold text-[#1f2a33] transition-colors duration-300 hover:bg-white">
                <Phone size={16} aria-hidden="true" />
                Call Now
              </a>
              <a href={CONTACT} className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-white/10">
                <MessageSquare size={16} aria-hidden="true" />
                Contact Us
              </a>
            </div>

            <ul className="mt-9 flex flex-col gap-2 border-t border-white/20 pt-5 text-[13.5px] font-semibold sm:flex-row sm:gap-8">
              {COVERS.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <Check size={16} className="text-[#C6AD8F]" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative aspect-[16/10] bg-[#1f2a33] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[46%] lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
          <Photo src={IMG.hero} alt="HVAC technician working on a unit during an emergency call" eager />
        </div>
      </section>

      {/* ================= Safety notice ================= */}
      <section className="bg-[#C6AD8F]">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-5 py-5 sm:px-8">
          <AlertTriangle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p className="max-w-[90ch] text-[14px] leading-relaxed">
            <strong className="font-bold">Smell gas, or is your carbon monoxide alarm sounding?</strong> Leave the building first and call your gas utility or emergency services from outside. Then call us once it's safe.
          </p>
        </div>
      </section>

      {/* ================= What counts as an emergency ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[24ch] text-[28px] leading-[1.05] sm:text-[36px]">
            What we treat as an emergency
          </h2>
          <p className="mt-4 max-w-[58ch] text-[14.5px] leading-relaxed text-[#425664]">
            If your system has failed and the house is becoming unsafe or uncomfortable, call us. This is especially true when someone at home is vulnerable to extreme heat or cold.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-[#1f2a33]/10 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Flame size={22} className="text-[#8a6f4d]" aria-hidden="true" />
                <h3 className="text-[18px] font-bold text-[#1f2a33]">Heating emergencies</h3>
              </div>
              <ul className="mt-5 divide-y divide-[#1f2a33]/10">
                {HEATING.map((h) => (
                  <li key={h} className="py-3 text-[14.5px] leading-snug text-[#425664]">{h}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[#1f2a33]/10 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Snowflake size={22} className="text-[#425664]" aria-hidden="true" />
                <h3 className="text-[18px] font-bold text-[#1f2a33]">Cooling emergencies</h3>
              </div>
              <ul className="mt-5 divide-y divide-[#1f2a33]/10">
                {COOLING.map((c) => (
                  <li key={c} className="py-3 text-[14.5px] leading-snug text-[#425664]">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= How a call works ================= */}
      <section className="bg-[#1f2a33] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[28px] leading-[1.05] sm:text-[36px]">How an emergency call works</h2>
          
          <ol className="mt-9 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-[#C6AD8F] pt-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#C6AD8F]">Step 0{i + 1}</span>
                <h3 className="mt-1 text-[18px] font-bold text-white">{t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= Staggered photo columns ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[24ch] text-[28px] leading-[1.05] sm:text-[36px]">
            Trained technicians, on site and testing
          </h2>
          
          <div className="mt-9 grid gap-6 md:grid-cols-3 md:pb-12">
            {PHOTOS.map((p) => (
              <figure key={p.t} className={p.cls}>
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-[#425664]">
                  <Photo src={p.src} alt={p.alt} />
                </div>
                <figcaption className="mt-4 border-l-4 border-[#C6AD8F] pl-3">
                  <span className="block text-[15px] font-bold text-[#1f2a33]">{p.t}</span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-[#425664]">{p.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Quick checks ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="gf-display max-w-[18ch] text-[28px] leading-[1.05] sm:text-[36px]">
              Quick checks before we arrive
            </h2>
            <p className="mt-3 max-w-[42ch] text-[14.5px] leading-relaxed text-[#425664]">
              These take a couple of minutes and sometimes solve the problem. If they don't, we're on our way.
            </p>
          </div>
          
          <ul className="divide-y divide-[#1f2a33]/10 border-y border-[#1f2a33]/10">
            {CHECKS.map((c) => (
              <li key={c} className="flex gap-3 py-4 text-[14.5px] leading-snug text-[#425664]">
                <Check size={18} className="mt-0.5 shrink-0 text-[#425664]" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#425664] py-14 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="gf-display max-w-[22ch] text-[28px] leading-[1.05] sm:text-[36px]">
              No heat or no cooling? Call us now.
            </h2>
            <p className="mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-white/80">
              Tell us what's happening and we'll arrange a same-day visit.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="tel:+18442129186" className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-6 py-3.5 text-[14px] font-bold text-[#1f2a33] transition-colors duration-300 hover:bg-white">
              <Phone size={16} aria-hidden="true" />
              Call Now
            </a>
            <a href={CONTACT} className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-white/10">
              <MessageSquare size={16} aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}