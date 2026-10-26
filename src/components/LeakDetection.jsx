// pages/LeakDetection.jsx
import { useState, useRef } from "react";
import {
  Phone,
  ArrowRight,
  Check,
  Waves,
  Thermometer,
  Droplets,
  Gauge,
  Layers,
  Home,
  Bath,
  Wrench,
  Flame,
  TreePine,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

/* ---------- Hero artwork: a wall with a hidden leak, revealed by a scanner lens ---------- */
const W = 1000, H = 420, R = 118;
const LEAK = { x: 640, y: 230 };

function Scanner() {
  const [p, setP] = useState({ x: 560, y: 250 });
  const ref = useRef(null);
  const clamp = (v, max) => Math.min(max, Math.max(0, v));
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    setP({ x: clamp(((e.clientX - r.left) / r.width) * W, W), y: clamp(((e.clientY - r.top) / r.height) * H, H) });
  };
  const found = Math.hypot(p.x - LEAK.x, p.y - LEAK.y) < 70;

  return (
    <div>
      <div className="rounded-2xl border border-[#1f2a33]/10 bg-[#1f2a33] p-2 shadow-sm sm:p-3">
        <svg
          ref={ref}
          viewBox={`0 0 ${W} ${H}`}
          onPointerMove={move}
          onPointerDown={move}
          className="block w-full cursor-crosshair touch-pan-y rounded-xl"
          role="img"
          aria-label="A wall with a hidden pipe. Moving the scanner lens reveals a leak behind the surface."
        >
          <defs>
            <clipPath id="gf-lens"><circle cx={p.x} cy={p.y} r={R} /></clipPath>
            <radialGradient id="gf-bloom">
              <stop offset="0" stopColor="#F6F4F2" stopOpacity=".95" />
              <stop offset=".45" stopColor="#C6AD8F" stopOpacity=".7" />
              <stop offset="1" stopColor="#C6AD8F" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Visible wall */}
          <rect width={W} height={H} fill="#E9E1D5" />
          {[100, 300, 500, 700, 900].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2={H} stroke="#C6AD8F" strokeOpacity=".35" strokeWidth="2" />
          ))}
          <rect y="372" width={W} height="48" fill="#F6F4F2" />
          <rect x="190" y="290" width="38" height="58" rx="5" fill="#F6F4F2" stroke="#C6AD8F" strokeWidth="2" />
          <ellipse cx={LEAK.x} cy="262" rx="46" ry="82" fill="#8a6f4d" opacity=".13" />

          {/* Hidden layer, shown only inside the lens */}
          <g clipPath="url(#gf-lens)">
            <rect width={W} height={H} fill="#1f2a33" />
            <path d={`M0 330H${LEAK.x}V30`} fill="none" stroke="#C6AD8F" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
            <path d={`M0 330H${LEAK.x}V30`} fill="none" stroke="#F6F4F2" strokeOpacity=".5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={LEAK.x} cy={LEAK.y} r="96" fill="url(#gf-bloom)" className="gf-bloom" />
            {[16, 34, 54].map((r, i) => (
              <circle key={r} cx={LEAK.x} cy={LEAK.y} r={r} fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="2" className="gf-ripple" style={{ animationDelay: `${i * 0.5}s` }} />
            ))}
          </g>

          <circle cx={p.x} cy={p.y} r={R} fill="none" stroke="#fff" strokeWidth="5" />
          <circle cx={p.x} cy={p.y} r={R + 6} fill="none" stroke="#1f2a33" strokeOpacity=".5" strokeWidth="2" />
        </svg>
      </div>

      <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p role="status" aria-live="polite" className={`inline-flex items-center gap-2.5 rounded-lg border border-[#1f2a33]/10 px-4 py-2 text-[13.5px] font-semibold transition-colors duration-300 ${found ? "bg-[#C6AD8F] text-[#1f2a33]" : "bg-white text-[#1f2a33]"}`}>
          <span className={`h-2.5 w-2.5 rounded-full ${found ? "bg-[#1f2a33]" : "bg-[#425664]"}`} />
          {found ? "Leak located behind the wall." : "Scanning. Move the lens over the wall."}
        </p>
        <label className="flex items-center gap-3 text-[13.5px] font-semibold text-[#425664]">
          Scanner
          <input type="range" min="0" max={W} step="10" value={Math.round(p.x / 10) * 10} onChange={(e) => setP({ x: +e.target.value, y: LEAK.y })} className="h-2 w-48 cursor-pointer accent-[#425664]" aria-label="Move the scanner across the wall" />
        </label>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */
const METHODS = [
  { icon: Waves, name: "Acoustic listening", how: "Sensitive microphones pick up the sound of water escaping a pressurized pipe. We follow it to the loudest point.", best: "Supply lines inside walls, under slabs and buried in the yard.", limits: "Very small leaks and noisy surroundings can hide the sound, so we back it up with another tool." },
  { icon: Thermometer, name: "Thermal imaging", how: "An infrared camera shows temperature differences on a surface. Hot water leaks show up warm, damp areas show up cool.", best: "Hot water lines, ceilings, walls and floors with radiant heat.", limits: "It needs a temperature difference to work, so we confirm what it shows." },
  { icon: Droplets, name: "Moisture mapping", how: "A moisture meter reads walls, floors and ceilings to map where dampness is and how far it has spread.", best: "Telling a leak from condensation, and measuring the size of the damage.", limits: "It shows where things are wet, which isn't always where the water starts." },
  { icon: Gauge, name: "Pressure isolation", how: "We close off sections of the plumbing and watch a gauge to see which section is losing pressure.", best: "Narrowing a leak to one line before we scan.", limits: "It narrows the search area but doesn't pinpoint the spot on its own." },
];

const SPOTS = [
  { icon: Layers, title: "Under the slab", text: "Hot and cold lines buried in concrete." },
  { icon: Home, title: "Inside walls", text: "Supply lines behind drywall and tile." },
  { icon: Bath, title: "Above ceilings", text: "Bathroom and kitchen lines overhead." },
  { icon: Wrench, title: "Under sinks and fixtures", text: "Slow drips at valves and supply hoses." },
  { icon: Flame, title: "Around the water heater", text: "Fittings and connections that wear over time." },
  { icon: TreePine, title: "Yard and irrigation", text: "Buried service and sprinkler lines." },
];

const METER = [
  "Turn off every tap and appliance that uses water.",
  "Find your water meter and its small leak indicator (a dial or triangle).",
  "If it's moving, or the reading changes after 30 minutes, water is going somewhere.",
  "Call us before the damage spreads.",
];

const SIGNS = [
  "A water bill that climbs with no change in use",
  "The sound of running water when everything is off",
  "Warm spots on the floor, which can mean a hot water line under the slab",
  "A musty smell or visible mold",
  "Stains, bubbling paint or warped flooring",
  "Lower water pressure than usual",
];

export default function LeakDetection() {
  const [tab, setTab] = useState(0);
  const m = METHODS[tab];
  const Icon = m.icon;

  return (
    <main className="gf-page gf-leak bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }

        .gf-bloom { transform-box: fill-box; transform-origin: center; animation: gfbloom 2.4s ease-in-out infinite; }
        @keyframes gfbloom { 50% { transform: scale(1.18); opacity: .8; } }
        .gf-ripple { transform-box: fill-box; transform-origin: center; animation: gfripple 2s ease-out infinite; }
        @keyframes gfripple { from { transform: scale(.6); opacity: .9; } to { transform: scale(2); opacity: 0; } }
        .gf-fade { animation: gffade .35s ease both; }
        @keyframes gffade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        
        .gf-spot { position: relative; border: 1px solid rgba(31,42,51,0.1); background: white; transition: all 0.3s; }
        .gf-spot::before { content: ""; position: absolute; left: -1px; top: -1px; bottom: -1px; width: 4px; background: #C6AD8F; transform: scaleY(.35); transform-origin: top; transition: transform .4s cubic-bezier(.2,.7,.2,1), background-color .3s; border-radius: 4px 0 0 4px; }
        .gf-spot:hover::before { transform: scaleY(1); background: #425664; }
        
        .gf-ring { transform-box: fill-box; transform-origin: center; animation: gfripple 4s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* ================= Hero: centered, scanner is the star ================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="gf-display text-[36px] leading-[1.05] sm:text-[54px] lg:text-[60px]">
              Find the leak without opening the wall.
            </h1>
            <p className="mx-auto mt-5 max-w-[56ch] text-[15.5px] leading-relaxed text-[#425664]">
              Acoustic and thermal imaging to pinpoint hidden leaks without demolition. Move the lens
              below to see how a hidden leak shows up.
            </p>
          </div>
          <div className="mt-10 sm:mt-14">
            <Scanner />
          </div>
        </div>
      </section>

      {/* ================= Methods ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[20ch] text-[30px] leading-[1.05] sm:text-[42px]">
            The tools we use, and what each one is good at
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.6fr]">
            <div role="tablist" aria-label="Detection methods" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {METHODS.map((t, i) => {
                const TI = t.icon;
                const on = i === tab;
                return (
                  <button key={t.name} role="tab" aria-selected={on} onClick={() => setTab(i)} className={`group flex shrink-0 items-center gap-3.5 rounded-lg border px-5 py-4 text-left text-[14.5px] font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] ${on ? "border-[#425664] bg-[#425664] text-white" : "border-[#1f2a33]/10 bg-[#F6F4F2] text-[#425664] hover:border-[#425664]/30 hover:bg-white"}`}>
                    <TI size={20} className={`transition-transform duration-300 ${on ? "" : "group-hover:scale-110"}`} aria-hidden="true" />
                    {t.name}
                  </button>
                );
              })}
            </div>

            <div key={tab} role="tabpanel" className="gf-fade rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-7 sm:p-10">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#425664] text-[#C6AD8F]">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="gf-display mt-5 text-[24px]">{m.name}</h3>
              <dl className="mt-5 space-y-4 text-[14.5px] leading-relaxed">
                {[["How it works", m.how], ["Best for", m.best], ["Keep in mind", m.limits]].map(([k, v]) => (
                  <div key={k} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
                    <dt className="font-bold text-[#8a6f4d]">{k}</dt>
                    <dd className="text-[#425664]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Where leaks hide ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">Where hidden leaks usually are</h2>
          <ul className="mt-10 grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPOTS.map(({ icon: SI, title, text }) => (
              <li key={title} className="gf-spot group flex gap-4 rounded-lg py-5 pl-7 pr-5 hover:bg-[#C6AD8F]/5">
                <SI size={22} className="mt-0.5 shrink-0 text-[#425664] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" aria-hidden="true" />
                <div>
                  <h3 className="text-[15.5px] font-bold">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#425664]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= Meter test + signs ================= */}
      <section className="border-y border-[#1f2a33]/10 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="gf-display text-[28px] leading-[1.05] sm:text-[36px]">Check your meter in 30 minutes</h2>
            <ol className="mt-7 space-y-4">
              {METER.map((s, i) => (
                <li key={s} className="group flex gap-4 text-[14.5px] leading-snug">
                  <span className="gf-display grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#1f2a33] text-[13px] text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#425664]">{i + 1}</span>
                  <span className="pt-1 text-[#425664]">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="gf-display text-[28px] leading-[1.05] sm:text-[36px]">Other signs to watch for</h2>
            <ul className="mt-7 space-y-3">
              {SIGNS.map((s) => (
                <li key={s} className="flex gap-3 text-[14.5px] leading-snug">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/30 text-[#8a6f4d]"><Check size={12} strokeWidth={3} aria-hidden="true" /></span>
                  <span className="text-[#425664]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA with ripple artwork ================= */}
      <section id="contact" className="relative overflow-hidden bg-[#425664] py-20 text-white sm:py-28">
        <svg viewBox="0 0 1600 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {[80, 170, 270, 380, 500, 630].map((r, i) => (
            <circle key={r} cx="1280" cy="300" r={r} fill="none" stroke="#C6AD8F" strokeOpacity={0.4 - i * 0.05} strokeWidth="2" className="gf-ring" style={{ animationDelay: `${i * 0.6}s` }} />
          ))}
          <circle cx="1280" cy="300" r="12" fill="#C6AD8F" />
        </svg>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="gf-display max-w-[18ch] text-[34px] leading-[1.05] sm:text-[46px]">
              Think there's a leak you can't see?
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-white/80">
              We scan first and open as little as possible, so repairs stay small and your walls and floors stay intact.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Big Call Button Replaced */}
            <a href={PHONE_TEL} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white shadow-md hover:shadow-lg">
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