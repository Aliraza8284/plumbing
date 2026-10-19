// pages/Cleaning.jsx
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, RotateCcw, Sparkles } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const IN_THE_WAY = [
  ["Grease and soap scum", "It goes down the drain as liquid and cools into a coating on the pipe walls. It builds up layer by layer."],
  ["Tree roots", "They slip into joints looking for water, then grow into thick mats that catch everything else."],
  ["Wipes and paper", "Even wipes sold as flushable don't break down like toilet paper. They pile up and snag on rough spots."],
  ["Scale and mineral buildup", "Hard water leaves crusty deposits that slowly narrow the pipe."],
];

const SIGNS = [
  "Slow drains in more than one fixture",
  "Gurgling when you flush or run the washer",
  "Water coming up in the tub or a floor drain",
  "A sewer smell inside or near the cleanout",
  "The lowest drain in the house backs up first",
];

const TIPS = [
  "Wipes, paper towels and cotton swabs go in the trash, not the toilet.",
  "Let cooking grease cool, then bin it. Wipe pans before washing.",
  "Got big trees near the line? Ask us about regular cleaning before it backs up.",
];

/* Buildup stuck to the pipe walls, placed by a simple pattern */
const WALL_GUNK = [...Array(19)].map((_, i) => {
  const x = 90 + i * 36;
  const top = i % 2 === 0;
  return { x, y: top ? 70 : 190, r: 13 + (i % 3) * 4 };
});

const DUR = 2.4; // seconds for the cable to travel the pipe
const delayFor = (x) => (((x - 20) / 760) * DUR).toFixed(2);

function Pipe({ run, done }) {
  const fade = (x) => ({ opacity: run ? 0 : 1, transition: run ? `opacity .3s ${delayFor(x)}s` : "none" });
  return (
    <svg
      viewBox="0 0 800 260"
      className="block w-full"
      role="img"
      aria-label={run ? "Illustration of a sewer pipe being cleared by a cable machine" : "Illustration of a sewer pipe clogged with grease, roots and paper"}
    >
      <defs>
        <linearGradient id="gf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F3EEE6" />
          <stop offset="1" stopColor="#E7DFD2" />
        </linearGradient>
        <linearGradient id="gf-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D8C3A6" />
          <stop offset=".5" stopColor="#C6AD8F" />
          <stop offset="1" stopColor="#A98F6F" />
        </linearGradient>
        <linearGradient id="gf-wall-b" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#D8C3A6" />
          <stop offset=".5" stopColor="#C6AD8F" />
          <stop offset="1" stopColor="#A98F6F" />
        </linearGradient>
        <linearGradient id="gf-inside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9E4DD" />
          <stop offset="1" stopColor="#F8F6F3" />
        </linearGradient>
        <linearGradient id="gf-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5C7283" />
          <stop offset="1" stopColor="#425664" />
        </linearGradient>
        <radialGradient id="gf-gunk" cx=".35" cy=".3" r=".8">
          <stop offset="0" stopColor="#A88B66" />
          <stop offset="1" stopColor="#7C6244" />
        </radialGradient>
        <linearGradient id="gf-grease" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F1E5C8" />
          <stop offset="1" stopColor="#DCC899" />
        </linearGradient>
        <radialGradient id="gf-head" cx=".35" cy=".3" r=".9">
          <stop offset="0" stopColor="#E3D0B2" />
          <stop offset="1" stopColor="#B39772" />
        </radialGradient>
        <clipPath id="gf-clip">
          <rect x="14" y="70" width="772" height="120" />
        </clipPath>
      </defs>

      <rect width="800" height="260" fill="url(#gf-bg)" />

      {/* pipe shell and inside */}
      <rect x="14" y="70" width="772" height="120" fill="url(#gf-inside)" />
      <rect x="14" y="48" width="772" height="22" rx="4" fill="url(#gf-wall)" />
      <rect x="14" y="190" width="772" height="22" rx="4" fill="url(#gf-wall-b)" />
      <rect x="14" y="52" width="772" height="3" fill="#fff" opacity=".35" />
      <rect x="14" y="70" width="772" height="2" fill="#1f2a33" opacity=".12" />
      <rect x="14" y="188" width="772" height="2" fill="#1f2a33" opacity=".12" />

      {/* joint rings */}
      {[200, 400, 600].map((x) => (
        <g key={x}>
          <rect x={x - 5} y="44" width="10" height="30" rx="3" fill="#B39772" />
          <rect x={x - 5} y="186" width="10" height="30" rx="3" fill="#B39772" />
        </g>
      ))}

      <g clipPath="url(#gf-clip)">
        {/* water */}
        <rect
          x="14"
          y="146"
          width="772"
          height="44"
          fill="url(#gf-water)"
          opacity=".92"
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
            transform: done || run ? "scaleY(1)" : "scaleY(.16)",
            transition: run ? `transform .9s ease ${DUR - 0.6}s` : "none",
          }}
        />

        {/* buildup on the walls */}
        {WALL_GUNK.map((g) => (
          <circle key={g.x} cx={g.x} cy={g.y} r={g.r} fill="url(#gf-gunk)" style={fade(g.x)} />
        ))}

        {/* grease */}
        <path
          d="M262 190C250 150 262 110 300 100C340 96 352 130 346 160C344 178 352 190 352 190Z"
          fill="url(#gf-grease)"
          stroke="#B9A272"
          strokeWidth="1.5"
          style={fade(300)}
        />
        <ellipse cx="294" cy="124" rx="9" ry="14" fill="#fff" opacity=".45" style={fade(300)} />

        {/* roots */}
        <g fill="none" stroke="#7C6244" strokeWidth="5" strokeLinecap="round" style={fade(520)}>
          <path d="M486 70C500 100 520 110 510 140C504 160 520 176 530 190" />
          <path d="M520 70C530 96 548 104 556 128C560 150 546 170 552 190" />
          <path d="M470 120C500 122 540 130 580 120" strokeWidth="3.5" />
        </g>

        {/* paper and wipes */}
        <path
          d="M630 190C620 160 636 128 664 124C694 122 708 150 700 172C698 182 704 190 704 190Z"
          fill="#fff"
          stroke="#D6D0C8"
          strokeWidth="1.5"
          style={fade(660)}
        />
        <path
          d="M648 150C660 146 672 156 684 150M646 168C662 164 676 172 690 166"
          fill="none"
          stroke="#C9C2B8"
          strokeWidth="2"
          strokeLinecap="round"
          style={fade(660)}
        />
      </g>

      {/* flow arrows after cleaning */}
      <g
        fill="none"
        stroke="#F6F4F2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: run ? 1 : 0, transition: run ? `opacity .5s ${DUR + 0.2}s` : "none" }}
      >
        {[140, 360, 580].map((x) => (
          <path key={x} d={`M${x} 160l16 12l-16 12`} />
        ))}
      </g>

      {/* cable and cutter */}
      <g
        style={{
          transform: `translateX(${run ? 800 : 20}px)`,
          transition: run ? `transform ${DUR}s linear` : "none",
          opacity: done ? 0 : 1,
        }}
      >
        <path d="M-900 130H0" stroke="#425664" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M-900 128H0" stroke="#fff" strokeWidth="1" opacity=".3" fill="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <path key={a} d="M0 102L-6 90L6 90Z" transform={`rotate(${a} 0 130)`} fill="#1f2a33" />
        ))}
        <circle cx="0" cy="130" r="22" fill="url(#gf-head)" stroke="#8a6f4d" strokeWidth="2" />
        <circle cx="0" cy="130" r="8" fill="#425664" />
        <circle cx="-3" cy="127" r="2.5" fill="#fff" opacity=".6" />
      </g>

      {/* labels */}
      <g
        fill="#425664"
        fontFamily="'Nunito Sans', system-ui, sans-serif"
        fontWeight="700"
        fontSize="17"
        textAnchor="middle"
        style={{ opacity: run ? 0 : 1, transition: "opacity .4s" }}
      >
        <text x="307" y="30">Grease</text>
        <text x="520" y="30">Roots</text>
        <text x="666" y="30">Paper and wipes</text>
      </g>
      <g
        fill="#425664"
        fontFamily="'Nunito Sans', system-ui, sans-serif"
        fontWeight="700"
        fontSize="18"
        textAnchor="middle"
        style={{ opacity: done ? 1 : 0, transition: "opacity .5s" }}
      >
        <text x="400" y="30">Full flow again</text>
      </g>
    </svg>
  );
}

export default function Cleaning() {
  const [phase, setPhase] = useState("before"); // before | running | after
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const start = () => {
    if (phase !== "before") return;
    setPhase("running");
    timer.current = setTimeout(() => setPhase("after"), (DUR + 1) * 1000);
  };
  const reset = () => {
    clearTimeout(timer.current);
    setPhase("before");
  };
  const run = phase !== "before";
  const status = { before: "Flow: a trickle", running: "Clearing the line…", after: "Flow: back to full" }[phase];

  return (
    <main className="gf-page gf-clean bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="gf-display max-w-[20ch] text-[40px] leading-[1.05] sm:text-[56px] lg:text-[62px]">
            Slow drains? Let's clear the whole line.
          </h1>
          <p className="mt-5 max-w-[52ch] text-[15.5px] leading-relaxed text-[#425664]">
            Deep cleaning of sewer lines to restore full flow. We don't just poke a hole through the
            clog. We clean the pipe so it drains the way it should.
          </p>

          <div className="mt-9 overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-white shadow-sm">
            <Pipe run={run} done={phase === "after"} />
            <div className="flex flex-col items-start justify-between gap-4 border-t border-[#1f2a33]/10 p-4 sm:flex-row sm:items-center sm:p-5">
              <p role="status" aria-live="polite" className="inline-flex items-center gap-2.5 text-[14px] font-bold text-[#425664]">
                <span className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${phase === "after" ? "bg-[#425664]" : "bg-[#C6AD8F]"}`} />
                {status}
              </p>
              {phase === "after" ? (
                <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a33]/20 px-6 py-2.5 text-[13.5px] font-bold text-[#425664] transition duration-300 hover:border-[#425664] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                  <RotateCcw size={15} aria-hidden="true" /> Show it clogged again
                </button>
              ) : (
                <button type="button" onClick={start} disabled={phase === "running"} className="group inline-flex items-center gap-2 rounded-lg bg-[#425664] px-6 py-2.5 text-[13.5px] font-bold text-white transition duration-300 hover:bg-[#364753] disabled:cursor-wait disabled:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                  <Sparkles size={15} className="transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" /> Clear the line
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
              Book a sewer cleaning
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#1f2a33]/20 px-7 py-3.5 text-[14px] font-bold text-[#425664] transition duration-300 hover:border-[#425664] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
              <MessageSquare size={16} className="transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= What's in the way ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">What's usually in the way</h2>
            <p className="mt-3 max-w-[36ch] text-[14.5px] leading-relaxed text-[#425664]">Most blocked sewer lines come down to one of these four.</p>
          </div>
          <dl className="border-t border-[#1f2a33]/10">
            {IN_THE_WAY.map(([t, d]) => (
              <div key={t} className="group grid gap-1 border-b border-[#1f2a33]/10 py-5 transition-transform duration-300 hover:translate-x-1.5 sm:grid-cols-[210px_1fr] sm:gap-6">
                <dt className="text-[16px] font-bold transition-colors duration-300 group-hover:text-[#8a6f4d]">{t}</dt>
                <dd className="text-[14.5px] leading-relaxed text-[#425664]">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= Cable vs jetting ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">Cable machine or jetting?</h2>
          <p className="mt-3 max-w-[54ch] text-[14.5px] leading-relaxed text-[#425664]">Both clean the line. They just work differently, and we pick based on what we find.</p>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Cable machine", "A rotating cable with a cutting head goes in through the cleanout. It breaks up clogs and cuts through roots.", "A clog, roots or a stubborn blockage in an otherwise sound pipe."],
              ["Hydro jetting", "A hose sends high-pressure water through the line and scrubs the pipe walls clean.", "Heavy grease, scale or buildup along the whole length of the pipe."],
            ].map(([t, how, best]) => (
              <article key={t} className="group rounded-xl border border-[#1f2a33]/12 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#425664]/30 hover:shadow-sm">
                <h3 className="gf-display text-[24px] leading-none text-[#1f2a33]">{t}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">{how}</p>
                <p className="mt-5 text-[13px] font-bold text-[#8a6f4d]">Works best for</p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-[#1f2a33]">{best}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Signs + tips ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">Signs it's time for a cleaning</h2>
            <ul className="mt-6 space-y-3">
              {SIGNS.map((s) => (
                <li key={s} className="group flex gap-3.5 text-[14.5px] leading-snug text-[#425664]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6AD8F] transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start rounded-xl border border-[#1f2a33]/10 bg-[#C6AD8F]/15 p-7 sm:p-8">
            <h3 className="gf-display text-[24px] text-[#1f2a33]">Keeping it from coming back</h3>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[14px] leading-relaxed text-[#425664] marker:text-[#8a6f4d]">
              {TIPS.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="mt-5 border-t border-[#1f2a33]/10 pt-4 text-[13.5px] font-bold leading-snug text-[#1f2a33]">
              If it clogs again fast, the pipe itself may be damaged. We'll check it with a camera.
            </p>
          </aside>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#1f2a33]/10 bg-[#425664] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="gf-display max-w-[20ch] text-[32px] leading-[1.05] sm:text-[42px]">Get your sewer line flowing again.</h2>
              <p className="mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-white/80">
                Tell us what your drains are doing. We'll work out whether you need a cleaning, jetting or a closer look with a camera.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <MessageSquare size={16} aria-hidden="true" />
                Contact Us
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}