// pages/GasPlumbing.jsx
import { useState } from "react";
import {
  MessageSquare,
  ArrowRight,
  Check,
  Wind,
  Eye,
  Flame,
  Sprout,
  Gauge,
  Radar,
  SprayCan,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

/* ---------- Blueprint background artwork (SVG, no image file needed) ---------- */
function Blueprint({ id }) {
  return (
    <svg viewBox="0 0 1600 760" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id={`${id}-s`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#fff" strokeOpacity=".07" />
        </pattern>
        <pattern id={`${id}-l`} width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill={`url(#${id}-s)`} />
          <path d="M200 0H0V200" fill="none" stroke="#fff" strokeOpacity=".13" />
        </pattern>
      </defs>
      <rect width="1600" height="760" fill={`url(#${id}-l)`} />
      <g fill="none" stroke="#C6AD8F" strokeWidth="3" strokeLinejoin="round">
        <path d="M0 600H420V400H860V220H1220V460H1600" opacity=".45" />
        <path d="M0 690H300V650H980V560H1600" opacity=".25" />
        <path d="M0 600H420V400H860V220H1220V460H1600" className="gf-run" strokeWidth="3.5" />
      </g>
      <g fill="#425664" stroke="#C6AD8F" strokeWidth="2.5">
        {[[420, 500], [860, 310], [1220, 340]].map(([x, y]) => (
          <path key={x} d={`M${x} ${y - 14}l14 14-14 14-14-14z`} />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Data ---------- */
const APPLIANCES = [
  { id: "range", label: "Range", x: 150, up: true, title: "Range and cooktop", text: "A gas branch to the kitchen with a shut-off valve you can reach and a connector sized to your range.", checks: ["Shut-off valve within reach", "Connector matched to the range", "Leak test at every joint", "Burner and ignition check"] },
  { id: "heater", label: "Water heater", x: 250, up: false, title: "Water heater", text: "Gas supply, shut-off valve and a sediment trap, plus a look at the venting.", checks: ["Sediment trap on the supply", "Vent draft check", "Pressure and leak test", "Pilot or igniter check"] },
  { id: "dryer", label: "Dryer", x: 350, up: true, title: "Clothes dryer", text: "A dedicated branch with its own shut-off, and an exhaust that runs outside.", checks: ["Approved connector", "Exhaust vented outside", "Leak test", "Burner check"] },
  { id: "furnace", label: "Furnace", x: 450, up: false, title: "Furnace and wall heaters", text: "A supply line sized for the heater's input, with a shut-off and sediment trap.", checks: ["Line sized for the heat load", "Sediment trap", "Flue and vent inspection", "Leak test"] },
  { id: "fire", label: "Fireplace", x: 550, up: true, title: "Fireplace and gas logs", text: "A valve at the appliance, a correct flue setup and a full leak test before first use.", checks: ["Shut-off or key valve", "Flue position check", "Leak test", "Ignition check"] },
  { id: "grill", label: "Outdoor", x: 640, up: false, title: "Grill and fire pit", text: "A weather-ready line from the house to your patio, with a shut-off inside.", checks: ["Weatherproof piping", "Line protected and buried correctly", "Shut-off at the house", "Leak test"] },
];

const TESTS = [
  { icon: Gauge, title: "Pressure test", text: "We pressurize the line with a gauge attached. If the needle holds over time, the line is tight." },
  { icon: Radar, title: "Electronic gas detector", text: "A sensitive handheld detector pinpoints leaks at fittings, valves and connectors." },
  { icon: SprayCan, title: "Soap solution", text: "Bubbling at a joint shows exactly where gas is escaping, so the fix goes in the right place." },
];

const MATERIALS = [
  ["Black iron pipe", "Main lines and most interior runs", "Rigid and long-lasting, with threaded joints."],
  ["CSST (flexible stainless tubing)", "Retrofits and hard-to-reach runs", "Quicker to route through walls. Needs proper bonding."],
  ["Appliance connectors", "Final link to the appliance", "Replaced when an appliance is moved or reinstalled."],
];

const SIGNS = [
  { icon: Wind, text: "A rotten-egg smell near an appliance or the meter" },
  { icon: Eye, text: "A hissing or whistling sound near a gas line" },
  { icon: Flame, text: "A pilot light or burner flame that burns yellow or orange" },
  { icon: Sprout, text: "Dead plants in a strip over a buried line" },
];

export default function GasPlumbing() {
  const [sel, setSel] = useState("range");
  const active = APPLIANCES.find((a) => a.id === sel);

  return (
    <main className="gf-page gf-gas bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        .gf-run { stroke-dasharray: 4 18; animation: gfrun 2.2s linear infinite; stroke: #fff; stroke-opacity: .8; }
        @keyframes gfrun { to { stroke-dashoffset: -22; } }
        .gf-flowline { stroke-dasharray: 3 9; animation: gfrun 1s linear infinite; }
        .gf-fade { animation: gffade .35s ease both; }
        @keyframes gffade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .gf-hrow { position: relative; isolation: isolate; overflow: hidden; }
        .gf-hrow::before { content: ""; position: absolute; inset: 0; z-index: -1; background: #C6AD8F; transform: scaleX(0); transform-origin: left; transition: transform .45s cubic-bezier(.2,.7,.2,1); }
        .gf-hrow:hover::before { transform: scaleX(1); }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero: blueprint ================= */}
      <section className="relative overflow-hidden bg-[#425664] text-white">
        <Blueprint id="hero" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[54px] lg:text-[64px]">
              Gas lines installed, tested and signed off.
            </h1>
            <p className="mt-5 max-w-[50ch] text-[15.5px] leading-[1.7] text-white/80">
              Licensed gas line installation, leak testing, and appliance hookups. Every job ends with a
              pressure test, so you know the line holds before we leave.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get a gas line quote
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/40 px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <MessageSquare size={16} className="transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
                Contact Us
              </a>
            </div>
          </div>

          <aside className="rounded-xl border border-[#1f2a33]/10 bg-[#F6F4F2] p-6 text-[#1f2a33] shadow-sm sm:p-8" aria-label="What to do if you smell gas">
            <h2 className="gf-display text-[22px] leading-tight">If you smell gas</h2>
            <ol className="mt-5 space-y-4 text-[14.5px] leading-snug">
              {["Leave the building and take everyone with you.", "Don't flip switches, light flames or run anything electrical.", "From outside, call your gas utility or 911."].map((t, i) => (
                <li key={t} className="flex gap-3.5">
                  <span className="gf-display grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1f2a33] text-[13px] font-bold text-white">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-[#1f2a33]/10 pt-4 text-[13.5px] text-[#425664]">
              Once it's safe, contact us for the repair and a full leak test.
            </p>
          </aside>
        </div>
      </section>

      {/* ================= Appliance schematic ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[22ch] text-[32px] leading-[1.05] sm:text-[42px]">
            Pick an appliance to see what a hookup includes
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
            {/* Schematic */}
            <div>
              <svg viewBox="0 0 700 320" className="w-full" role="group" aria-label="Gas line schematic with six appliance branches">
                <path d="M62 160H680" stroke="#1f2a33" strokeOpacity=".25" strokeWidth="10" strokeLinecap="round" fill="none" />
                <path d="M62 160H680" stroke="#425664" strokeWidth="4" strokeLinecap="round" fill="none" className="gf-flowline" strokeOpacity=".5" />
                <rect x="6" y="128" width="56" height="64" rx="10" fill="#425664" />
                <text x="34" y="165" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Meter</text>
                {APPLIANCES.map((a) => {
                  const on = a.id === sel;
                  const ny = a.up ? 62 : 258;
                  return (
                    <g
                      key={a.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={on}
                      aria-label={a.label}
                      onClick={() => setSel(a.id)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSel(a.id))}
                      className="cursor-pointer outline-none [&:focus-visible_circle]:stroke-[#1f2a33] [&:focus-visible_circle]:stroke-[4px]"
                    >
                      <line x1={a.x} y1="160" x2={a.x} y2={ny} stroke={on ? "#C6AD8F" : "#1f2a33"} strokeOpacity={on ? 1 : 0.25} strokeWidth={on ? 8 : 6} strokeLinecap="round" style={{ transition: "all .3s" }} />
                      {on && <line x1={a.x} y1="160" x2={a.x} y2={ny} stroke="#425664" strokeWidth="3" strokeLinecap="round" className="gf-flowline" />}
                      <circle cx={a.x} cy={ny} r={on ? 24 : 19} fill={on ? "#C6AD8F" : "#fff"} stroke="#425664" strokeWidth="3" style={{ transition: "all .3s" }} />
                      <text x={a.x} y={a.up ? ny - 32 : ny + 42} textAnchor="middle" fontSize="13" fontWeight={on ? 800 : 600} fill="#1f2a33">{a.label}</text>
                    </g>
                  );
                })}
              </svg>

              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Appliances">
                {APPLIANCES.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    aria-pressed={a.id === sel}
                    onClick={() => setSel(a.id)}
                    className={`rounded-lg border px-4 py-2 text-[13.5px] font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] ${
                      a.id === sel ? "border-[#425664] bg-[#425664] text-white" : "border-[#1f2a33]/15 bg-white text-[#425664] hover:border-[#425664]"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div key={active.id} className="gf-fade self-start rounded-xl border border-[#1f2a33]/12 bg-white p-6 sm:p-8" aria-live="polite">
              <h3 className="gf-display text-[24px]">{active.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#425664]">{active.text}</p>
              <ul className="mt-5 space-y-2.5">
                {active.checks.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[14px] font-semibold text-[#1f2a33]">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/30 text-[#8a6f4d]">
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Leak testing ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[32px] leading-[1.05] sm:text-[42px]">How we test for leaks</h2>
            <p className="mt-4 max-w-[40ch] text-[14.5px] leading-relaxed text-[#425664]">
              A line isn't finished until it's proven tight. We use more than one method, because each
              one catches something the others can miss.
            </p>
          </div>
          <ul className="border-t border-[#1f2a33]/10">
            {TESTS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="gf-hrow group flex gap-5 border-b border-[#1f2a33]/10 px-3 py-6">
                <Icon size={28} strokeWidth={2} className="mt-1 shrink-0 text-[#425664] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
                <div>
                  <h3 className="gf-display text-[20px]">{title}</h3>
                  <p className="mt-1 max-w-[52ch] text-[14px] leading-relaxed text-[#425664] group-hover:text-[#1f2a33]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= Materials table ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[32px] leading-[1.05] sm:text-[42px]">What your gas line is made of</h2>
          
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#1f2a33]/12">
            <table className="w-full min-w-[640px] border-collapse bg-white text-left text-[14.5px]">
              <thead>
                <tr className="bg-[#425664] text-white">
                  {["Material", "Where it's used", "Good to know"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[13px] font-bold uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATERIALS.map(([m, use, note]) => (
                  <tr key={m} className="border-t border-[#1f2a33]/10 transition-colors duration-300 hover:bg-[#C6AD8F]/20">
                    <th scope="row" className="px-6 py-5 font-bold text-[#1f2a33]">{m}</th>
                    <td className="px-6 py-5 text-[#425664]">{use}</td>
                    <td className="px-6 py-5 text-[#425664]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-[#425664]">Material choice follows local code and your system. We confirm it before quoting.</p>

          <h3 className="gf-display mt-16 text-[24px]">Signs of a gas leak</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SIGNS.map(({ icon: Icon, text }) => (
              <li key={text} className="group flex gap-3.5 rounded-lg border border-[#1f2a33]/10 border-l-4 border-l-[#C6AD8F] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-l-[#425664]">
                <Icon size={20} className="mt-0.5 shrink-0 text-[#425664] transition-transform duration-300 group-hover:scale-125" aria-hidden="true" />
                <span className="text-[13.5px] font-semibold leading-snug text-[#1f2a33]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative overflow-hidden bg-[#425664] py-20 text-white sm:py-28">
        <Blueprint id="cta" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="gf-display max-w-[20ch] text-[34px] leading-[1.05] sm:text-[46px]">
              Adding an appliance or moving a line?
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-white/80">
              Tell us what you're connecting. Most gas work needs a permit and an inspection, and we'll
              explain what your city requires before we start.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <MessageSquare size={16} aria-hidden="true" />
              Contact Us
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}