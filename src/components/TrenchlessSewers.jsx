// pages/TrenchlessSewers.jsx
import { useState } from "react";
import { MessageSquare, ArrowRight, ChevronDown } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const METHODS = [
  {
    name: "Pipe lining",
    how: ["We clean the old pipe so the liner can stick to it.", "A soft liner soaked in resin is pulled into the pipe.", "It's pressed against the walls and left to harden into a new pipe inside the old one."],
    fit: "The pipe is cracked, worn or leaking at the joints, but still runs in a straight line.",
    notFit: "The pipe has sagged, collapsed or sits out of line. A liner follows the old pipe, so it can't fix the shape. It also makes the inside slightly narrower.",
  },
  {
    name: "Pipe bursting",
    how: ["We dig a small hole at each end of the line.", "A bursting head is pulled through the old pipe, breaking it outward into the soil.", "A new pipe is pulled in right behind it."],
    fit: "The old pipe is badly damaged, collapsed or too far gone to line.",
    notFit: "Other utilities run close by, or the soil won't allow it. We locate those first, and we'll tell you if bursting isn't safe.",
  },
];

const COMPARE = [
  ["What gets dug", "A trench along the whole pipe", "Usually two small access holes"],
  ["Driveway, garden, trees", "Cut through, then put back afterward", "Mostly left alone"],
  ["Best for", "Pipe that is badly sagging or out of line", "Cracked, worn, root-damaged or some collapsed pipe"],
  ["Good to know", "The price includes putting the yard back", "Not every pipe qualifies. The camera decides."],
];

const STEPS = [
  ["Camera first", "We look inside the pipe to see whether trenchless will work at all."],
  ["Clean the line", "Roots and buildup come out so the repair has a clean surface."],
  ["Open two small holes", "One near the house and one near the street, or wherever the pipe allows."],
  ["Lining or bursting", "We use the method that suits your pipe."],
  ["Camera again", "We check the new pipe from the inside before we close up."],
  ["Tidy up", "Holes get filled and the area is left clean."],
];

const FAQ = [
  ["Is trenchless always an option?", "No. If the pipe has sagged badly or collapsed in a way that can't be worked around, digging is the honest answer. We'll say so."],
  ["Is it cheaper?", "Not always. The repair itself can cost more than digging, but you skip paying to rebuild the driveway, patio or garden. If both options work, we quote both."],
  ["Will it last?", "A properly installed liner or new pipe is meant to last for decades. We'll tell you what to expect for your pipe and what our workmanship warranty covers."],
];

/* Plan view of a yard, drawn like a quick sketch */
function Yard({ trench }) {
  return (
    <svg viewBox="0 0 900 400" className="block w-full" role="img" aria-label={trench ? "Sketch of a yard with a long trench cut across the driveway and garden" : "Sketch of a yard with two small access holes and everything else left alone"}>
      <defs>
        <filter id="gf-sk3" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="11" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4.5" />
        </filter>
      </defs>

      <g filter="url(#gf-sk3)" stroke="#1f2a33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="892" height="392" rx="10" fill="#EFE8DC" />
        {/* street */}
        <rect x="826" y="4" width="70" height="392" fill="#D6CAB8" />
        <path d="M861 24V376" stroke="#425664" strokeDasharray="14 12" strokeWidth="3" fill="none" />
        {/* house */}
        <rect x="24" y="110" width="150" height="190" fill="#F6F4F2" />
        <path d="M24 205H174" fill="none" strokeDasharray="3 8" />
        {/* driveway */}
        <rect x="174" y="205" width="300" height="80" fill="#D6CAB8" />
        <path d="M324 205V285" fill="none" strokeWidth="2" strokeOpacity=".5" />
        {/* garden */}
        <rect x="496" y="180" width="170" height="130" rx="22" fill="#E3D9C6" />
        {[[530, 215], [575, 238], [620, 214], [545, 278], [600, 285], [640, 258]].map(([x, y]) => (
          <circle key={x + y} cx={x} cy={y} r="13" fill="#C6AD8F" />
        ))}
        {/* tree */}
        <circle cx="722" cy="136" r="56" fill="#D9CDB6" />
        <circle cx="722" cy="136" r="7" fill="#8a6f4d" />

        {/* sewer line under everything */}
        <path d="M174 245H826" fill="none" stroke="#425664" strokeWidth="4" strokeDasharray="4 10" />

        {trench ? (
          <g style={{ animation: "gffade .4s ease both" }}>
            <path d="M174 222H826V270H174Z" fill="#1f2a33" />
            <path d="M174 222H826M174 270H826" strokeWidth="2.5" stroke="#8a6f4d" fill="none" />
            <path d="M250 205l14 80M390 205l-10 80M440 205l12 80" fill="none" strokeWidth="2.5" />
            {[[300, 196], [470, 168], [566, 160], [640, 190], [760, 214]].map(([x, y], i) => (
              <path key={i} d={`M${x - 36} ${y + 22}C${x - 30} ${y - 10} ${x + 30} ${y - 10} ${x + 36} ${y + 22}Z`} fill="#8a6f4d" />
            ))}
          </g>
        ) : (
          <g style={{ animation: "gffade .4s ease both" }}>
            <rect x="188" y="222" width="56" height="46" fill="#1f2a33" />
            <rect x="760" y="222" width="56" height="46" fill="#1f2a33" />
          </g>
        )}
      </g>

      <g className="gf-hand" fill="#425664" fontSize="26" textAnchor="middle">
        <text x="99" y="98">house</text>
        <text x="324" y="190">driveway</text>
        <text x="581" y="168">garden</text>
        <text x="722" y="56">tree</text>
        <text x="861" y="392" fontSize="22">street</text>
      </g>
    </svg>
  );
}

export default function TrenchlessSewers() {
  const [trench, setTrench] = useState(true);

  return (
    <main className="gf-page gf-tl bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&family=Caveat:wght@600&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        .gf-page .gf-hand { font-family: 'Caveat', 'Segoe Print', cursive; font-weight: 600; }
        
        .gf-fade { animation: gffade .35s ease both; }
        @keyframes gffade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        
        .gf-faq summary { list-style: none; }
        .gf-faq summary::-webkit-details-marker { display: none; }
        .gf-chev { transition: transform .3s ease; }
        .gf-faq[open] .gf-chev { transform: rotate(180deg); }
        
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h1 className="gf-display text-[40px] leading-[1.05] sm:text-[58px] lg:text-[64px]">
                Fix the pipe. Keep the driveway.
              </h1>
              <p className="mt-5 max-w-[50ch] text-[15.5px] leading-relaxed text-[#425664]">
                Minimal-digging sewer repair that saves your yard and driveway. Flip the switch to see
                what the same repair looks like both ways.
              </p>
            </div>
            <fieldset className="lg:justify-self-end">
              <legend className="sr-only">Repair method</legend>
              <div className="inline-flex rounded-lg border border-[#1f2a33]/15 bg-white p-1">
                {[[true, "Dig a trench"], [false, "Trenchless"]].map(([v, l]) => (
                  <label key={l} className="cursor-pointer">
                    <input type="radio" name="method" checked={trench === v} onChange={() => setTrench(v)} className="peer sr-only" />
                    <span className="block rounded-md px-6 py-2 text-[14px] font-bold text-[#425664] transition duration-300 peer-checked:bg-[#425664] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#425664]">{l}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <figure className="mt-8 rounded-2xl border border-[#1f2a33]/10 bg-white p-3 shadow-sm sm:p-5">
            <Yard trench={trench} />
            <figcaption aria-live="polite" className="gf-hand px-2 pb-1 pt-3 text-[26px] leading-tight text-[#425664] sm:text-[30px]">
              {trench ? "a ditch across the driveway and the garden" : "two small holes. everything else stays put"}
            </figcaption>
          </figure>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
              Find out if your pipe qualifies
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#1f2a33]/20 px-7 py-3.5 text-[14px] font-bold text-[#425664] transition duration-300 hover:border-[#425664] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
              <MessageSquare size={16} className="transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= Two methods ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">Two ways to do it without a trench</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[#1f2a33]/10">
            {METHODS.map((m, i) => (
              <article key={m.name} className={`group ${i === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <h3 className="gf-display text-[26px] leading-none transition-transform duration-300 group-hover:translate-x-1.5">{m.name}</h3>
                <p className="mt-6 text-[13.5px] font-bold text-[#8a6f4d]">How it works</p>
                <ol className="mt-2 list-decimal space-y-2 pl-6 text-[14.5px] leading-relaxed marker:font-bold marker:text-[#425664]">
                  {m.how.map((h) => <li key={h}>{h}</li>)}
                </ol>
                <p className="mt-6 text-[13.5px] font-bold text-[#8a6f4d]">A good fit when</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-[#1f2a33]">{m.fit}</p>
                <p className="mt-5 text-[13.5px] font-bold text-[#8a6f4d]">Not a good fit when</p>
                <p className="mt-1 text-[14.5px] leading-relaxed text-[#1f2a33]">{m.notFit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Compare ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">Digging or not digging</h2>
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#1f2a33]/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-[14.5px] bg-white">
              <thead>
                <tr className="border-b border-[#1f2a33]/10 bg-[#F6F4F2]">
                  <th className="w-[22%] px-6 py-4"><span className="sr-only">Topic</span></th>
                  <th className="px-6 py-4 font-bold text-[#1f2a33]">Digging a trench</th>
                  <th className="px-6 py-4 font-bold text-[#425664]">Trenchless</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-[#1f2a33]/10 transition-colors duration-300 hover:bg-[#C6AD8F]/10 last:border-0">
                    <th scope="row" className="px-6 py-4 align-top text-[13.5px] font-bold text-[#8a6f4d]">{k}</th>
                    <td className="px-6 py-4 align-top text-[#425664]">{a}</td>
                    <td className="px-6 py-4 align-top font-semibold text-[#1f2a33]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= How a job goes ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">How a trenchless job goes</h2>
            <p className="gf-hand mt-3 text-[26px] leading-tight text-[#425664]">camera first, always</p>
          </div>
          <ol className="border-t border-[#1f2a33]/10">
            {STEPS.map(([t, d], n) => (
              <li key={t} className="group flex gap-5 border-b border-[#1f2a33]/10 py-5 transition-transform duration-300 hover:translate-x-1.5">
                <span className="gf-hand w-9 shrink-0 text-[32px] leading-none text-[#C6AD8F] transition-colors duration-300 group-hover:text-[#425664]">{n + 1}</span>
                <div>
                  <h3 className="text-[16px] font-bold">{t}</h3>
                  <p className="mt-1 max-w-[54ch] text-[14px] leading-relaxed text-[#425664]">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= Questions ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">Straight answers</h2>
          <div className="border-t border-[#1f2a33]/10">
            {FAQ.map(([q, a]) => (
              <details key={q} className="gf-faq border-b border-[#1f2a33]/10">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-[15.5px] font-bold outline-none transition-colors hover:text-[#8a6f4d] focus-visible:text-[#8a6f4d]">
                  {q}
                  <ChevronDown size={20} className="gf-chev shrink-0 text-[#C6AD8F]" aria-hidden="true" />
                </summary>
                <p className="max-w-[58ch] pb-5 text-[14px] leading-relaxed text-[#425664]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="bg-[#C6AD8F]/15 border-t border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="gf-hand text-[28px] leading-none text-[#8a6f4d]">Want to keep your yard?</p>
            <h2 className="gf-display mt-2 max-w-[20ch] text-[32px] leading-[1.05] sm:text-[42px]">Let's see if your pipe qualifies.</h2>
            <p className="mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-[#1f2a33]">We start with a camera inspection, then tell you honestly whether trenchless will work.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#1f2a33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a33]">
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