// pages/TrenchlessSewerTechnology.jsx
import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  ArrowRight,
  RotateCcw,
  Check,
  X,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const D = 3.2; // seconds for the machine to travel the line
const SPAN = 620; // distance between the two pit centres in the drawing

const METHODS = {
  burst: {
    label: "Pipe bursting",
    caption:
      "A bursting head is pulled through the old pipe. It breaks the old pipe outward into the soil while a new, seamless pipe follows right behind it.",
  },
  line: {
    label: "Pipe lining",
    caption:
      "A resin-soaked liner is pushed into the old pipe and inflated against its walls. Once it cures, it becomes a new pipe inside the old one.",
  },
};

const COMPARE = [
  ["Digging", "A trench along the whole line", "One or two small access pits"],
  ["Your yard", "Lawn, driveway and plants torn up", "Mostly left as it is"],
  ["Time on site", "Often several days or more", "Often a day or two"],
  ["Cleanup", "Heavy restoration afterwards", "Fill the pits and tidy up"],
];

const STEPS = [
  ["Camera inspection", "We run a camera through the line to see the damage, the pipe material and the length of the problem."],
  ["Small access points", "We dig one or two small pits at the ends of the section, often near the cleanout or the property line."],
  ["Burst or line", "We pull a new pipe through, or cure a new liner inside the old one, depending on the condition of the pipe."],
  ["Test and reconnect", "We check the new pipe with the camera, test the flow, reconnect your fixtures and fill the pits."],
];

const DETAILS = [
  {
    t: "Pipe bursting",
    how: "Replaces the old pipe with a brand new one, the same size or larger.",
    good: ["Collapsed or crushed pipe", "Pipe that has shifted or sagged", "Heavy root damage along the line", "Old clay or cast iron beyond repair"],
    bad: ["Other utilities running very close to the pipe"],
  },
  {
    t: "Pipe lining",
    how: "Builds a new pipe inside the old one without removing it.",
    good: ["Cracks, leaks and open joints", "Roots getting in at the joints", "Pipe that is still in line and open", "Lines under driveways or patios"],
    bad: ["Collapsed or badly shifted pipe"],
  },
];

const FAQ = [
  ["Do you have to dig up my yard?", "Only the small access pits. Everything between them stays in place."],
  ["Can it fix a collapsed pipe?", "Pipe bursting can, because it replaces the pipe. Lining usually can't, since the old pipe has to be open enough to line."],
  ["Will the repair last?", "Both methods use materials made to last for decades. A camera check after the job shows us the result before we close up."],
];

/* Pebbles in the soil, placed by a simple pattern */
const PEBBLES = [...Array(26)].map((_, i) => ({
  x: 40 + ((i * 97) % 840),
  y: 116 + ((i * 53) % 190),
  r: 2.5 + (i % 4),
}));

/* Broken pieces of old pipe left in the soil after bursting */
const SHARDS = [...Array(18)].map((_, i) => ({
  x: 244 + i * 28,
  y: i % 2 === 0 ? 194 : 240,
  rot: (i * 37) % 90,
}));

function Underground({ method, play }) {
  const burst = method === "burst";
  const ride = (to) => ({
    transform: `translateX(${play ? to : 0}px)`,
    transition: play ? `transform ${D}s linear` : "none",
  });
  const grow = (origin) => ({
    transformBox: "fill-box",
    transformOrigin: origin,
    transform: play ? "scaleX(1)" : "scaleX(0)",
    transition: play ? `transform ${D}s linear` : "none",
  });
  const late = { opacity: play ? 1 : 0, transition: play ? `opacity .6s ${D}s` : "none" };

  return (
    <svg
      viewBox="0 0 900 320"
      className="block w-full"
      role="img"
      aria-label={
        burst
          ? "Cross-section of a sewer line being replaced by pipe bursting between two small pits"
          : "Cross-section of a sewer line being repaired by a liner between two small pits"
      }
    >
      <defs>
        <linearGradient id="tr-soil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C9B08D" />
          <stop offset=".45" stopColor="#B39772" />
          <stop offset="1" stopColor="#957B5B" />
        </linearGradient>
        <linearGradient id="tr-new" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6A8091" />
          <stop offset="1" stopColor="#425664" />
        </linearGradient>
        <linearGradient id="tr-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6F4F2" />
          <stop offset="1" stopColor="#E9E2D6" />
        </linearGradient>
        <clipPath id="tr-between">
          <rect x="230" y="150" width="540" height="140" />
        </clipPath>
      </defs>

      {/* sky and ground */}
      <rect width="900" height="92" fill="url(#tr-sky)" />
      <rect y="92" width="900" height="228" fill="url(#tr-soil)" />
      <rect y="86" width="900" height="8" fill="#6B7A86" />
      <rect y="86" width="900" height="2" fill="#fff" opacity=".35" />
      {PEBBLES.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#7C6244" opacity=".35" />
      ))}

      {/* house */}
      <rect x="22" y="46" width="80" height="42" fill="#fff" />
      <polygon points="12,48 62,12 112,48" fill="#425664" />
      <rect x="54" y="60" width="16" height="28" rx="2" fill="#C6AD8F" />
      <rect x="30" y="56" width="14" height="14" rx="2" fill="#DDE4E9" />
      <rect x="80" y="56" width="14" height="14" rx="2" fill="#DDE4E9" />
      <rect x="86" y="14" width="10" height="20" fill="#1f2a33" />

      {/* access pits */}
      {[150, 770].map((x) => (
        <g key={x}>
          <rect x={x} y="94" width="80" height="170" fill="#3A2F24" />
          <rect x={x} y="94" width="4" height="170" fill="#C6AD8F" opacity=".8" />
          <rect x={x + 76} y="94" width="4" height="170" fill="#C6AD8F" opacity=".8" />
        </g>
      ))}
      <text x="190" y="124" textAnchor="middle" fill="#F6F4F2" fontSize="15" fontWeight="700">Entry pit</text>
      <text x="810" y="124" textAnchor="middle" fill="#F6F4F2" fontSize="15" fontWeight="700">Exit pit</text>

      {/* riser from the house */}
      <rect x="65" y="88" width="10" height="124" fill="#B7AC9C" />

      {/* existing pipe, cut away so the inside shows */}
      <rect x="65" y="208" width="835" height="30" rx="3" fill="#B7AC9C" />
      <rect x="65" y="214" width="835" height="18" fill="#263038" />
      <rect x="65" y="225" width="835" height="7" fill="#5C7283" />
      {[310, 430, 550, 670].map((x) => (
        <path key={x} d={`M${x} 208l5 8l-4 8l5 6`} fill="none" stroke="#6B6256" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ))}

      {burst ? (
        <>
          {/* disturbed soil and pipe pieces left behind the head */}
          <g clipPath="url(#tr-between)">
            <rect x="190" y="198" width={SPAN} height="50" rx="8" fill="#7A6247" style={grow("right")} />
            <g style={grow("right")}>
              {SHARDS.map((s, i) => (
                <rect
                  key={i}
                  x={s.x}
                  y={s.y}
                  width="14"
                  height="6"
                  rx="1"
                  fill="#B7AC9C"
                  stroke="#8F8474"
                  strokeWidth="1"
                  transform={`rotate(${s.rot} ${s.x + 7} ${s.y + 3})`}
                />
              ))}
            </g>
          </g>

          {/* new pipe */}
          <rect x="190" y="211" width={SPAN} height="24" rx="4" fill="url(#tr-new)" style={grow("right")} />
          <rect x="190" y="214" width={SPAN} height="3" fill="#fff" opacity=".3" style={grow("right")} />

          {/* winch in the entry pit */}
          <rect x="158" y="170" width="44" height="34" rx="4" fill="#1f2a33" />
          <circle cx="180" cy="187" r="9" fill="#C6AD8F" />
          <circle cx="180" cy="187" r="3" fill="#1f2a33" />

          {/* cable and bursting head */}
          <g style={ride(-SPAN)}>
            <path d="M786 223H-900" stroke="#1f2a33" strokeWidth="3" fill="none" />
            <polygon points="786,223 830,199 830,247" fill="#C6AD8F" stroke="#1f2a33" strokeWidth="2" strokeLinejoin="round" />
            <rect x="830" y="201" width="26" height="44" rx="4" fill="#1f2a33" />
          </g>
        </>
      ) : (
        <>
          {/* feed tube from the surface */}
          <path d="M172 94V190Q172 223 206 223" stroke="#C6AD8F" strokeWidth="12" fill="none" strokeLinecap="round" />

          {/* liner: sand while soft, slate once cured */}
          <rect x="190" y="214" width={SPAN} height="18" rx="3" fill="#C6AD8F" style={grow("left")} />
          <rect
            x="190"
            y="214"
            width={SPAN}
            height="18"
            rx="3"
            fill="url(#tr-new)"
            style={{ opacity: play ? 1 : 0, transition: play ? `opacity .8s ${D}s` : "none" }}
          />
          <g style={ride(SPAN)}>
            <circle cx="190" cy="223" r="12" fill="#1f2a33" />
            <circle cx="190" cy="223" r="5" fill="#C6AD8F" />
          </g>
        </>
      )}

      {/* labels */}
      <g fontSize="15" fontWeight="700" fill="#1f2a33">
        <text x="500" y="182" textAnchor="middle">Existing pipe</text>
        <text x="500" y="276" textAnchor="middle" style={late}>
          {burst ? "New pipe, old pipe pushed aside" : "New pipe inside the old one"}
        </text>
        <text x="18" y="304">Home</text>
        <text x="882" y="304" textAnchor="end">City sewer</text>
      </g>
    </svg>
  );
}

export default function TrenchlessSewerTechnology() {
  const [method, setMethod] = useState("burst");
  const [play, setPlay] = useState(false);
  const timer = useRef(null);

  const schedule = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPlay(true), 450);
  };
  useEffect(() => {
    schedule();
    return () => clearTimeout(timer.current);
  }, [method]);

  const pick = (m) => {
    if (m === method) return;
    setPlay(false);
    setMethod(m);
  };
  const replay = () => {
    setPlay(false);
    schedule();
  };

  return (
    <main className="gf-page gf-trench bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        .gf-trench details > summary { list-style: none; }
        .gf-trench details > summary::-webkit-details-marker { display: none; }
        .gf-trench details[open] .gf-plus { transform: rotate(45deg); }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="bg-[#1f2a33] pb-14 pt-16 text-[#F6F4F2] sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">Sewers / Trenchless</p>
          </div>
          <h1 className="gf-display mt-4 max-w-[14ch] text-[40px] leading-[1.05] sm:text-[56px] lg:text-[64px]">Trenchless Sewer Technology</h1>
          <p className="mt-6 max-w-[48ch] text-[15.5px] leading-[1.65] text-[#F6F4F2]/80 sm:text-[16.5px]">
            Modern no-dig sewer repair using pipe bursting and lining.
          </p>

          <div className="mt-12 rounded-xl border border-white/10 bg-[#F6F4F2] p-3 text-[#1f2a33] shadow-sm sm:p-4">
            <div className="flex flex-col gap-3 pb-3 sm:flex-row sm:items-center sm:justify-between">
              <div role="tablist" aria-label="Repair method" className="inline-flex self-start rounded-lg bg-[#1f2a33]/10 p-1">
                {Object.entries(METHODS).map(([key, m]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={method === key}
                    onClick={() => pick(key)}
                    className={`rounded-md px-5 py-2.5 text-[13.5px] font-bold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] ${
                      method === key ? "bg-[#425664] text-white" : "text-[#425664] hover:bg-[#425664]/10"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={replay}
                className="inline-flex items-center gap-2 self-start rounded-lg px-4 py-2.5 text-[13.5px] font-bold text-[#425664] transition-colors duration-300 hover:bg-[#425664]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] sm:self-auto"
              >
                <RotateCcw size={16} aria-hidden="true" /> Replay
              </button>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#1f2a33]/10">
              <Underground method={method} play={play} />
            </div>

            <p role="status" aria-live="polite" className="max-w-[70ch] px-2 pb-1 pt-4 text-[14.5px] leading-[1.65] text-[#425664]">
              {METHODS[method].caption}
            </p>
          </div>
        </div>
      </section>

      {/* ================= Dig vs no-dig ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[18ch] text-[30px] leading-[1.05] sm:text-[42px] text-[#1f2a33]">The repair happens underground, not across your yard.</h2>
          
          <div className="mt-10 grid overflow-hidden rounded-xl border border-[#1f2a33]/10 md:grid-cols-2">
            <div className="bg-[#1f2a33] p-7 text-[#F6F4F2] sm:p-10">
              <h3 className="gf-display text-[24px]">Open trench</h3>
              <dl className="mt-6 divide-y divide-white/10">
                {COMPARE.map(([k, a]) => (
                  <div key={k} className="py-4">
                    <dt className="text-[13px] font-bold uppercase tracking-wide text-[#C6AD8F]">{k}</dt>
                    <dd className="mt-1 text-[15px] leading-snug">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-[#C6AD8F] p-7 text-[#1f2a33] sm:p-10">
              <h3 className="gf-display text-[24px]">Trenchless</h3>
              <dl className="mt-6 divide-y divide-[#1f2a33]/20">
                {COMPARE.map(([k, , b]) => (
                  <div key={k} className="py-4">
                    <dt className="text-[13px] font-bold uppercase tracking-wide text-[#425664]">{k}</dt>
                    <dd className="mt-1 text-[15px] font-bold leading-snug">{b}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Process ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px] text-[#1f2a33]">How a job goes</h2>
          
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#425664] pt-5">
                <span className="gf-display text-[36px] leading-none text-[#C6AD8F]">{i + 1}</span>
                <h3 className="mt-3 text-[17px] font-bold text-[#1f2a33]">{t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#425664]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= Which method ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[16ch] text-[30px] leading-[1.05] sm:text-[42px] text-[#1f2a33]">Which method fits your pipe</h2>
          <p className="mt-4 max-w-[54ch] text-[14.5px] leading-relaxed text-[#425664]">The camera inspection decides it. Here is what each method is good at.</p>
          
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {DETAILS.map((m) => (
              <article key={m.t} className="rounded-xl border border-[#1f2a33]/12 bg-white p-7 shadow-sm sm:p-9">
                <h3 className="gf-display text-[26px] text-[#1f2a33]">{m.t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#425664]">{m.how}</p>
                
                <p className="mt-6 text-[13px] font-bold uppercase tracking-wide text-[#8a6f4d]">A good fit for</p>
                <ul className="mt-3 space-y-2.5">
                  {m.good.map((g) => (
                    <li key={g} className="flex gap-3 text-[14.5px] leading-snug text-[#1f2a33]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#425664]" aria-hidden="true" />
                      {g}
                    </li>
                  ))}
                </ul>
                
                <p className="mt-6 text-[13px] font-bold uppercase tracking-wide text-[#8a6f4d]">Not ideal when</p>
                <ul className="mt-3 space-y-2.5">
                  {m.bad.map((g) => (
                    <li key={g} className="flex gap-3 text-[14.5px] leading-snug text-[#425664]">
                      <X size={16} className="mt-0.5 shrink-0 text-[#8a6f4d]" aria-hidden="true" />
                      {g}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Questions ================= */}
      <section className="bg-white border-t border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px] text-[#1f2a33]">Common questions</h2>
          <div className="border-t border-[#1f2a33]/10">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group border-b border-[#1f2a33]/10 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-[16px] font-bold text-[#1f2a33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#425664]">
                  {q}
                  <span className="gf-plus text-[24px] font-medium leading-none text-[#C6AD8F] transition-transform duration-300" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-[56ch] text-[14px] leading-relaxed text-[#425664]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#C6AD8F] py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end">
          <div>
            <h2 className="gf-display max-w-[16ch] text-[34px] leading-[1.05] sm:text-[46px] text-[#1f2a33]">Can your line be fixed without digging?</h2>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-[#1f2a33]/80">
              We'll put a camera in the pipe and tell you which method fits, and whether you need one at all.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#1f2a33] px-7 py-3.5 text-[14px] font-bold text-white transition-colors duration-300 hover:bg-[#425664] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a33]">
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