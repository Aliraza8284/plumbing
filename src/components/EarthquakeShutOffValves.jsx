// pages/EarthquakeShutOffValves.jsx
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  ArrowRight,
  Activity,
  Flame,
  RotateCcw,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

/* ---------- Background artwork: seismograph traces drawn as SVG paths ---------- */
const trace = (y, amp, seed) => {
  let d = `M0 ${y}`;
  for (let x = 8; x <= 1600; x += 8) {
    const env = Math.exp(-(((x - 1020) / 230) ** 2));
    const n = Math.sin(x * 0.07 + seed) * Math.sin(x * 0.023 + seed * 2);
    d += ` L${x} ${(y + n * (3 + amp * env)).toFixed(1)}`;
  }
  return d;
};
const TRACES = [90, 190, 290, 390, 490, 590].map((y, i) => trace(y, 30 + (i % 3) * 14, i + 1));

function SeismicBackdrop({ active, stroke = "#425664", opacity = 0.32 }) {
  return (
    <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g className={`gf-lines ${active ? "gf-lines-on" : ""}`} fill="none" stroke={stroke} strokeWidth="1.6" opacity={opacity}>
        {TRACES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

const STEPS = [
  { icon: Activity, title: "It senses the shaking", text: "A motion-triggered mechanism reacts to strong ground movement automatically." },
  { icon: Flame, title: "It closes the gas line", text: "The valve shuts on its own, before a damaged pipe or appliance connection can leak gas." },
  { icon: RotateCcw, title: "It stays shut until you reset it", text: "Once you've checked for leaks, you reset the valve. We show you how at install." },
];

const FAQ = [
  { q: "Does this shut off water too?", a: "No. This valve controls natural gas only. If you also want a water shut-off, call us and we'll discuss options." },
  { q: "Do I need a permit?", a: "Often, yes, and the rules differ by city. We tell you what yours requires before we start." },
  { q: "How do I turn the gas back on?", a: "After a shut-off, check for gas smell first, then reset the valve as we showed you. If you smell gas at any point, leave the building and call your gas utility." },
  { q: "Will it fit my gas meter?", a: "Most single-family homes work. We confirm the meter and pipe layout at the site visit." },
];

export default function EarthquakeShutOffValves() {
  const [phase, setPhase] = useState("idle"); // idle | shaking | closed
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const simulate = () => {
    if (phase !== "idle") return;
    setPhase("shaking");
    timer.current = setTimeout(() => setPhase("closed"), 1500);
  };
  const reset = () => {
    clearTimeout(timer.current);
    setPhase("idle");
  };

  const closed = phase === "closed";
  const status = {
    idle: "Gas flowing. Valve open.",
    shaking: "Shaking detected…",
    closed: "Gas shut off automatically.",
  }[phase];

  return (
    <main className="gf-page gf-quake bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }

        .gf-lines { transform-box: view-box; transform-origin: 50% 50%; transition: transform .7s cubic-bezier(.2,.7,.2,1); }
        .gf-lines-on { transform: scaleY(1.6); }

        .gf-shake { animation: gfshake .1s linear 15; }
        @keyframes gfshake { 0%{transform:translate(0,0)} 25%{transform:translate(3px,-2px)} 50%{transform:translate(-3px,2px)} 75%{transform:translate(2px,3px)} 100%{transform:translate(0,0)} }

        .gf-gas { stroke-dasharray: 3 12; animation: gfgas 1s linear infinite; }
        @keyframes gfgas { to { stroke-dashoffset: -15; } }

        .gf-bignum { -webkit-text-stroke: 1.5px #C6AD8F; color: transparent; transition: color .4s ease; }
        .gf-step:hover .gf-bignum, .gf-step:focus-within .gf-bignum { color: #C6AD8F; }

        .gf-faq summary { list-style: none; }
        .gf-faq summary::-webkit-details-marker { display: none; }
        .gf-chev { transition: transform .3s ease; }
        .gf-faq[open] .gf-chev { transform: rotate(180deg); }

        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden bg-[#C6AD8F]">
        <SeismicBackdrop active={phase !== "idle"} />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[54px] lg:text-[64px]">
              Your gas valve closes itself when the ground starts to shake.
            </h1>
            <p className="mt-5 max-w-[50ch] text-[16px] leading-[1.7] text-[#1f2a33]/85">
              Automatic gas shut-off valves that protect your home during an earthquake. Press the
              button to see what happens.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={phase === "closed" ? reset : simulate}
                disabled={phase === "shaking"}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#1f2a33] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#425664] disabled:cursor-wait disabled:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a33]"
              >
                {phase === "closed" ? (
                  <>
                    <RotateCcw size={16} aria-hidden="true" /> Reset the demo
                  </>
                ) : (
                  <>
                    <Activity size={16} aria-hidden="true" /> Simulate an earthquake
                  </>
                )}
              </button>
              
              {/* Call Button Replaced */}
              <a
                href={PHONE_TEL}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#1f2a33]/30 bg-white/40 px-7 py-3.5 text-[14px] font-bold transition duration-300 hover:border-[#1f2a33] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a33]"
              >
                <Phone size={16} className="text-[#1f2a33]" />
                Call {PHONE_DISPLAY}
                <ArrowRight 
                  size={18} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
            </div>
          </div>

          {/* Valve illustration */}
          <div>
            <div className={phase === "shaking" ? "gf-shake" : ""}>
              <svg viewBox="0 0 440 260" role="img" aria-label="Gas pipe with an automatic shut-off valve" className="block w-full">
                <defs>
                  <clipPath id="gf-body">
                    <rect x="170" y="110" width="100" height="100" rx="14" />
                  </clipPath>
                </defs>
                {/* pipe */}
                <rect x="0" y="146" width="440" height="36" fill="#1f2a33" />
                <rect x="0" y="152" width="440" height="24" fill="#425664" />
                <line x1="0" y1="164" x2="165" y2="164" stroke="#F6F4F2" strokeWidth="4" strokeLinecap="round" className={closed ? "" : "gf-gas"} />
                <line x1="275" y1="164" x2="440" y2="164" stroke="#F6F4F2" strokeWidth="4" strokeLinecap="round" className={closed ? "" : "gf-gas"} style={{ opacity: closed ? 0 : 1, transition: "opacity .5s" }} />
                {/* valve body + gate */}
                <rect x="170" y="110" width="100" height="100" rx="14" fill="#F6F4F2" stroke="#1f2a33" strokeWidth="4" />
                <g clipPath="url(#gf-body)">
                  <rect x="212" y="112" width="16" height="96" rx="3" fill="#425664" style={{ transform: `translateY(${closed ? 0 : -84}px)`, transition: "transform .6s cubic-bezier(.2,.7,.2,1)" }} />
                </g>
                {/* handle */}
                <line x1="220" y1="110" x2="220" y2="82" stroke="#1f2a33" strokeWidth="6" />
                <rect x="170" y="70" width="100" height="14" rx="7" fill="#F6F4F2" stroke="#1f2a33" strokeWidth="3" style={{ transformOrigin: "220px 77px", transform: closed ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .6s cubic-bezier(.2,.7,.2,1)" }} />
              </svg>
            </div>

            <p role="status" aria-live="polite" className="mt-4 inline-flex items-center gap-2.5 rounded-lg bg-[#1f2a33] px-4 py-2 text-[13.5px] font-semibold text-white">
              <span className={`h-2.5 w-2.5 rounded-full ${closed ? "bg-[#C6AD8F]" : phase === "shaking" ? "bg-white" : "bg-[#9fd4a8]"}`} />
              {status}
            </p>
          </div>
        </div>
      </section>

      {/* ================= How it works ================= */}
      <section className="bg-[#1f2a33] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[22ch] text-[32px] leading-[1.05] sm:text-[42px]">
            What happens in the first few seconds
          </h2>

          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="gf-step group border-t border-white/20 pt-6">
                <div className="flex items-end justify-between">
                  <span className="gf-bignum gf-display text-[84px] leading-[0.8]" aria-hidden="true">
                    {i + 1}
                  </span>
                  <Icon size={28} strokeWidth={2} className="text-[#C6AD8F] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-6" aria-hidden="true" />
                </div>
                <h3 className="gf-display mt-6 text-[22px] leading-tight">{title}</h3>
                <p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-white/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[32px] leading-[1.05] sm:text-[42px]">Questions we hear</h2>
            <p className="mt-5 flex max-w-[40ch] gap-3 border-l-4 border-[#C6AD8F] bg-white p-4 text-[13.5px] leading-relaxed text-[#425664] border-y border-r border-y-[#1f2a33]/5 border-r-[#1f2a33]/5">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#8a6f4d]" aria-hidden="true" />
              <span>
                <strong className="font-bold text-[#1f2a33]">Smell gas?</strong> Leave the building
                first, then call your gas utility or 911 from outside.
              </span>
            </p>
          </div>

          <div className="border-t border-[#1f2a33]/10">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="gf-faq border-b border-[#1f2a33]/10">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[16px] font-bold outline-none transition-colors hover:text-[#8a6f4d] focus-visible:text-[#8a6f4d] sm:text-[17px]">
                  {q}
                  <ChevronDown size={20} className="gf-chev shrink-0 text-[#C6AD8F]" aria-hidden="true" />
                </summary>
                <p className="max-w-[60ch] pb-6 text-[14px] leading-relaxed text-[#425664]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative overflow-hidden bg-[#425664] py-20 text-white sm:py-28">
        <SeismicBackdrop active={false} stroke="#C6AD8F" opacity={0.28} />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="gf-display max-w-[20ch] text-[34px] leading-[1.05] sm:text-[46px]">
              Have a valve installed before you need one.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-white/80">
              Call us today and we'll check your meter, explain your city's requirements and give you a
              written quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Big Call Button Replaced */}
            <a
              href={PHONE_TEL}
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              Call {PHONE_DISPLAY}
              <ArrowRight 
                size={18} 
                className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}