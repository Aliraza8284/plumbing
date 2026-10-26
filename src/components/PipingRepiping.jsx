// pages/PipingRepiping.jsx
import { useState } from "react";
import { Phone, ArrowRight, Check } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";
/* ---------- Pipe artwork: rigid copper runs vs flowing PEX runs (SVG) ---------- */
const COPPER = ["M0 120H260V300H520V160H800", "M0 380H140V560H400V460H800", "M520 300V640"];
const ELBOWS = [[260, 120], [260, 300], [520, 300], [520, 160], [140, 380], [140, 560], [400, 560], [400, 460]];
const PEX = ["M0 120C200 120 260 300 520 300S700 160 800 160", "M0 380C120 380 160 560 400 560S600 460 800 460", "M520 300C540 420 520 560 560 640"];

function PipeArt({ mode, id }) {
  const copper = mode === "copper";
  return (
    <svg viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g style={{ opacity: copper ? 1 : 0, transition: "opacity .6s" }} fill="none" strokeLinecap="butt" strokeLinejoin="miter">
        {COPPER.map((d) => <path key={d} d={d} stroke="#1f2a33" strokeWidth="26" strokeOpacity=".35" />)}
        {COPPER.map((d) => <path key={d + "c"} d={d} stroke="#C6AD8F" strokeWidth="18" />)}
        {COPPER.map((d) => <path key={d + "h"} d={d} stroke="#F6F4F2" strokeOpacity=".55" strokeWidth="3" transform="translate(0 -4)" />)}
        {COPPER.map((d) => <path key={d + "f"} d={d} stroke="#fff" strokeWidth="3" className="gf-flow" />)}
        {ELBOWS.map(([x, y]) => <circle key={`${id}${x}${y}`} cx={x} cy={y} r="17" fill="#C6AD8F" stroke="#1f2a33" strokeOpacity=".5" strokeWidth="4" />)}
      </g>
      <g style={{ opacity: copper ? 0 : 1, transition: "opacity .6s" }} fill="none" strokeLinecap="round">
        {PEX.map((d) => <path key={d} d={d} stroke="#1f2a33" strokeWidth="24" strokeOpacity=".35" />)}
        {PEX.map((d) => <path key={d + "p"} d={d} stroke="#F6F4F2" strokeWidth="16" />)}
        {PEX.map((d) => <path key={d + "f"} d={d} stroke="#425664" strokeWidth="3" className="gf-flow" />)}
      </g>
    </svg>
  );
}

/* ---------- Data ---------- */
const SPECS = {
  copper: [["Typical lifespan", "50 years or more"], ["Cost", "Higher upfront"], ["Installation", "Rigid pipe with soldered joints, so more labor"], ["Good to know", "Handles heat and sunlight. Very acidic water can wear it thin over time."]],
  pex: [["Typical lifespan", "40 to 50 years"], ["Cost", "Lower upfront"], ["Installation", "Flexible pipe with fewer fittings, quicker to route"], ["Good to know", "Copes better with freezing. Keep it out of direct sunlight."]],
};

const MATERIALS = [
  { name: "Galvanized steel", era: "Common in homes built before the 1960s.", spot: "Gray, threaded pipe, often with rust-colored stains at the joints.", problem: "It corrodes from the inside, which narrows the pipe. Pressure drops and water can turn brown.", fix: "Repiping is usually the lasting fix." },
  { name: "Polybutylene", era: "Used in homes built from roughly 1978 to 1995.", spot: "Gray, blue or black flexible plastic pipe, sometimes stamped PB.", problem: "It is known to fail at fittings, sometimes without warning. Some insurers ask for it to be replaced.", fix: "Replace it before it fails. We inspect first so you know the scope." },
  { name: "Copper with lead solder", era: "Copper pipe joined before lead solder was banned in 1986.", spot: "Copper pipe with dull gray joints.", problem: "Lead from the solder can reach your water. The copper itself may still be in good shape.", fix: "Test your water, then we replace joints or sections as needed." },
];

const SIGNS = [
  "Brown or rust-colored water",
  "Low pressure at more than one fixture",
  "Repeated pinhole leaks",
  "A metallic taste in your water",
  "Green or white crust on exposed pipes",
  "Galvanized or polybutylene pipes in the house",
];

const STEPS = [
  ["Inspection and quote", "We check the pipe material, condition and layout, then give you a written quote."],
  ["Permit", "We pull the permit your city requires before any pipe comes out."],
  ["Prep", "We protect floors and furniture, and tell you when the water will be off."],
  ["New lines", "New pipe goes in through small access openings, not whole walls where we can avoid it."],
  ["Test and inspection", "We pressure-test every line, and the city inspector signs off."],
  ["Patch and clean up", "Access openings are patched and ready for paint."],
];

export default function PipingRepiping() {
  const [mode, setMode] = useState("copper");
  const [mat, setMat] = useState(0);
  const [ticked, setTicked] = useState([]);
  const m = MATERIALS[mat];
  const n = ticked.length;
  const verdict = n === 0 ? "Tick anything that sounds familiar." : n === 1 ? "One sign can be a local fix. Ask for an inspection if it keeps happening." : "Two or more signs often point to aging pipes. A repiping inspection is worth booking.";

  return (
    <main className="gf-page gf-pipe bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        .gf-flow { stroke-dasharray: 2 22; animation: gfflow 1.6s linear infinite; stroke-linecap: round; }
        @keyframes gfflow { to { stroke-dashoffset: -24; } }
        .gf-fade { animation: gffade .35s ease both; }
        @keyframes gffade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        
        .gf-tl::before { content: ""; position: absolute; left: 19px; top: 40px; bottom: -4px; width: 2px; background: #425664; opacity: .2; }
        .gf-tl:last-child::before { display: none; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="flex flex-col justify-center">
            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[54px] lg:text-[58px]">
              New pipes for the whole house, done to code.
            </h1>
            <p className="mt-5 max-w-[50ch] text-[15.5px] leading-relaxed text-[#425664]">
              Whole-home repiping with copper or PEX, done to code. Choose a material to see how the two compare.
            </p>

            <fieldset className="mt-7">
              <legend className="sr-only">Pipe material</legend>
              <div className="inline-flex rounded-lg border border-[#1f2a33]/15 bg-white p-1">
                {[["copper", "Copper"], ["pex", "PEX"]].map(([v, l]) => (
                  <label key={v} className="cursor-pointer">
                    <input type="radio" name="material" value={v} checked={mode === v} onChange={() => setMode(v)} className="peer sr-only" />
                    <span className="block rounded-md px-7 py-2 text-[14px] font-bold text-[#425664] transition duration-300 peer-checked:bg-[#425664] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#425664]">{l}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <dl key={mode} className="gf-fade mt-6 max-w-[520px] divide-y divide-[#1f2a33]/10 border-y border-[#1f2a33]/10" aria-live="polite">
              {SPECS[mode].map(([k, v]) => (
                <div key={k} className="grid gap-1 py-3 sm:grid-cols-[130px_1fr] sm:gap-5">
                  <dt className="text-[13.5px] font-bold text-[#8a6f4d]">{k}</dt>
                  <dd className="text-[14.5px] text-[#1f2a33]">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Call Button Replaced */}
              <a href={PHONE_TEL} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#364753] shadow-md hover:shadow-lg">
                <Phone size={18} className="text-[#C6AD8F]" />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-[#425664] shadow-sm lg:min-h-[600px]">
            <PipeArt mode={mode} id="h" />
            <p key={mode} className="gf-fade absolute bottom-5 left-5 right-5 rounded-lg border border-white/10 bg-[#1f2a33]/85 px-4 py-3 text-[13.5px] font-medium text-white backdrop-blur-sm sm:right-auto sm:max-w-[320px]">
              {mode === "copper" ? "Rigid pipe, with a soldered joint at every turn." : "Flexible pipe that bends around corners, with fewer joints."}
            </p>
          </div>
        </div>
      </section>

      {/* ================= What's in your walls ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[20ch] text-[30px] leading-[1.05] sm:text-[42px]">
            What kind of pipe is in your walls?
          </h2>

          <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Pipe materials">
            {MATERIALS.map((t, i) => (
              <button key={t.name} role="tab" aria-selected={i === mat} onClick={() => setMat(i)} className={`rounded-lg border px-5 py-2.5 text-[14px] font-bold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] ${i === mat ? "border-[#425664] bg-[#425664] text-white" : "border-[#1f2a33]/15 text-[#425664] hover:border-[#425664]"}`}>
                {t.name}
              </button>
            ))}
          </div>

          <div key={mat} role="tabpanel" className="gf-fade mt-6 grid gap-px overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-[#1f2a33]/10 md:grid-cols-2">
            {[["Where it shows up", m.era], ["How to spot it", m.spot], ["What goes wrong", m.problem], ["What we recommend", m.fix]].map(([k, v]) => (
              <div key={k} className="bg-[#F6F4F2] p-6 transition-colors duration-300 hover:bg-white sm:p-8">
                <h3 className="text-[13.5px] font-bold text-[#8a6f4d]">{k}</h3>
                <p className="mt-2 text-[15px] leading-snug text-[#1f2a33]">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Checklist ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">Do you need a repipe?</h2>
            <p role="status" aria-live="polite" className={`mt-5 max-w-[38ch] rounded-xl border border-[#1f2a33]/10 p-5 text-[14.5px] font-semibold leading-snug transition-colors duration-500 ${n >= 2 ? "bg-[#425664] text-white" : "bg-[#C6AD8F]/20 text-[#1f2a33]"}`}>
              {verdict}
            </p>
          </div>
          <ul className="space-y-3">
            {SIGNS.map((s, i) => {
              const on = ticked.includes(i);
              return (
                <li key={s}>
                  <label className={`group flex cursor-pointer items-center gap-4 rounded-xl border px-5 py-4 text-[14.5px] font-bold transition duration-300 hover:translate-x-1 ${on ? "border-[#425664] bg-white" : "border-[#1f2a33]/10 bg-white hover:border-[#C6AD8F]"}`}>
                    <input type="checkbox" checked={on} onChange={() => setTicked((t) => (on ? t.filter((x) => x !== i) : [...t, i]))} className="peer sr-only" />
                    <span className={`grid h-6 w-6 shrink-0 place-items-center rounded border-2 transition duration-300 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#425664] ${on ? "border-[#425664] bg-[#425664] text-white" : "border-[#425664]/30 text-transparent"}`}>
                      <Check size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {s}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ================= Process ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">How a repipe runs</h2>
            <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-[#425664]">
              The length of the job depends on the size of your home. We give you a schedule with the quote, including when the water will be off.
            </p>
          </div>
          <ol>
            {STEPS.map(([t, d], i) => (
              <li key={t} className="gf-tl group relative flex gap-5 pb-8 last:pb-0">
                <span className="gf-display relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#425664] text-[14px] text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#C6AD8F] group-hover:text-[#1f2a33]">{i + 1}</span>
                <div className="pt-1.5 transition-transform duration-300 group-hover:translate-x-1.5">
                  <h3 className="text-[17px] font-bold">{t}</h3>
                  <p className="mt-1 max-w-[52ch] text-[13.5px] leading-relaxed text-[#425664]">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative overflow-hidden bg-[#425664] py-20 text-white sm:py-28">
        <div className="absolute inset-0 opacity-60" aria-hidden="true">
          <PipeArt mode="copper" id="c" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#425664] via-[#425664]/90 to-[#425664]/40" aria-hidden="true" />
        
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="gf-display max-w-[18ch] text-[34px] leading-[1.05] sm:text-[46px]">
              Find out what your pipes are made of.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-white/80">
              Call us for an inspection. You get a written report, your options in copper or PEX, and one clear quote.
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