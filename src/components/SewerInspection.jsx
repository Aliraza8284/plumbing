// pages/SewerInspection.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, ChevronDown } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const FINDINGS = [
  { id: "roots", name: "Tree roots", note: "roots coming in at a joint", look: "Thin hairs or thick ropes pushing in through the joints and across the pipe.", means: "Roots found a small gap and moved in. They catch paper and grease, which is why the clog keeps coming back.", next: "Usually jetting or root cutting to clear it. If a joint is open, we talk about repairing or lining that section." },
  { id: "crack", name: "Cracks", note: "a crack running along the wall", look: "Lines along or around the pipe wall, sometimes with dirt showing through.", means: "Water can leak out and soil can get in. Left alone, small cracks tend to get bigger.", next: "A spot repair or a liner, depending on how long the damaged stretch is." },
  { id: "belly", name: "A sag (belly)", note: "water sitting in a low spot", look: "A low spot where water pools instead of flowing away.", means: "Solids settle in the dip and build up, so you get repeat clogs in the same place.", next: "Cleaning helps for a while. The lasting fix is correcting that section of pipe." },
  { id: "grease", name: "Grease and scale", note: "crusty buildup narrowing the pipe", look: "Rough, crusty walls with the pipe narrowing down in places.", means: "The pipe is still sound but is working at a fraction of its size.", next: "Hydro jetting usually brings it back to full width." },
  { id: "offset", name: "Offset joint", note: "two pipe ends that don't line up", look: "Two pipe sections that don't meet cleanly, leaving a lip or a gap.", means: "Waste catches on the edge, and soil or roots can get in through the gap.", next: "Repairing or replacing that section." },
  { id: "collapse", name: "Collapse", note: "pipe caved in, camera stops here", look: "The pipe is crushed or caved in, and the camera can't get past it.", means: "The line is blocked or nearly blocked at that point and needs real work, not a cleaning.", next: "Repair or replacement. We note where the camera stopped so we know where to start." },
];

const WHEN = [
  "The same drain keeps clogging",
  "Slow drains in more than one room",
  "A sewer smell inside or out in the yard",
  "A wet or sunken patch over the sewer line",
  "You're buying a house with an older sewer line",
  "You're about to plant trees or redo the yard",
];

const VISIT = [
  ["We find your cleanout", "That's the capped pipe the camera goes in through. We'll help you locate it if you aren't sure where it is."],
  ["The camera goes in", "A small HD camera on a flexible cable travels down the line."],
  ["You watch with us", "We show you the picture as we go, and explain what you're looking at."],
  ["We note what we find", "Problems get noted with where they are in the line, so repairs can be planned."],
  ["You get a written report", "It says what's wrong, what isn't, and what we'd do about it."],
];

const FAQ = [
  ["How long does it take?", "Often around an hour. Long or tricky lines can take longer."],
  ["Do you dig anything up?", "No. The camera goes in through the cleanout. If your house doesn't have one, we'll explain the other ways in before we start."],
  ["What if you find nothing wrong?", "Then you've got that in writing. That's useful too, especially if you're buying the house."],
];

/* The camera's view down a pipe, drawn like a quick sketch */
function Tunnel({ kind }) {
  const rings = [112, 86, 62, 40, 22];
  return (
    <svg viewBox="0 0 320 260" className="block w-full" role="img" aria-label={`Sketch of what the camera sees: ${kind === "clear" ? "a clear pipe" : kind}`}>
      <defs>
        <filter id="gf-sk2" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3.5" />
        </filter>
      </defs>
      <rect width="320" height="260" rx="14" fill="#1f2a33" />
      <g filter="url(#gf-sk2)" fill="none" stroke="#1f2a33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {rings.map((r, i) => (
          <circle key={r} cx="160" cy="130" r={r} fill={i === rings.length - 1 ? "#F6F4F2" : i % 2 ? "#E9E1D5" : "#D6CAB8"} />
        ))}

        {kind === "roots" && (
          <g stroke="#8a6f4d" strokeWidth="3.5">
            <path d="M52 92C92 96 112 112 132 126" />
            <path d="M270 80C230 100 212 114 192 128" />
            <path d="M118 36C128 68 142 92 152 112" />
            <path d="M92 100l-10 12M128 76l-12 8M244 96l10 12M214 104l12 4" strokeWidth="2.5" />
          </g>
        )}
        {kind === "crack" && (
          <g strokeWidth="3.5">
            <path d="M62 150L86 140L96 158L122 146L134 162L128 182" />
            <path d="M232 58L214 80L228 92L208 114L214 128" />
          </g>
        )}
        {kind === "belly" && (
          <g>
            <path d="M66 190C108 218 212 218 254 190C230 168 92 168 66 190Z" fill="#425664" opacity=".75" />
            <path d="M100 192C130 200 190 200 220 192" stroke="#F6F4F2" strokeWidth="2" />
          </g>
        )}
        {kind === "grease" &&
          [...Array(9)].map((_, i) => {
            const a = (i * Math.PI * 2) / 9;
            return <circle key={i} cx={160 + 100 * Math.cos(a)} cy={130 + 100 * Math.sin(a)} r={10 + (i % 3) * 3} fill="#C6AD8F" />;
          })}
        {kind === "offset" && (
          <g>
            <circle cx="180" cy="122" r="60" fill="#1f2a33" opacity=".35" />
            <path d="M104 160C112 188 150 196 178 186" strokeWidth="4" />
          </g>
        )}
        {kind === "collapse" && (
          <g>
            <path d="M82 92C110 62 210 60 238 96C254 130 232 176 190 188C140 200 92 174 82 92Z" fill="#1f2a33" opacity=".9" />
            <path d="M104 190l16-10M200 200l12-14M240 150l14 4" stroke="#C6AD8F" strokeWidth="3" />
          </g>
        )}
      </g>
      <circle cx="160" cy="130" r="112" fill="none" stroke="#F6F4F2" strokeOpacity=".12" strokeWidth="14" />
    </svg>
  );
}

export default function SewerInspection() {
  const [i, setI] = useState(0);
  const f = FINDINGS[i];

  return (
    <main className="gf-page gf-insp bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&family=Caveat:wght@600&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        .gf-page .gf-hand { font-family: 'Caveat', 'Segoe Print', cursive; font-weight: 600; }
        
        .gf-fade { animation: gffade .35s ease both; }
        @keyframes gffade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        
        .gf-faq summary { list-style: none; }
        .gf-faq summary::-webkit-details-marker { display: none; }
        .gf-chev { transition: transform .3s ease; }
        .gf-faq[open] .gf-chev { transform: rotate(180deg); }
        
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[54px] lg:text-[58px]">
              We look inside your sewer line before anyone digs.
            </h1>
            <p className="mt-5 max-w-[48ch] text-[15.5px] leading-relaxed text-[#425664]">
              HD camera inspection to diagnose sewer line problems accurately. You watch the picture with us,
              and you get a written report of what we saw.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                Book a camera inspection
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#1f2a33]/20 px-7 py-3.5 text-[14px] font-bold text-[#425664] transition duration-300 hover:border-[#425664] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                <MessageSquare size={16} className="transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
                Contact Us
              </Link>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[440px] rotate-[1.2deg] transition-transform duration-500 hover:rotate-0">
            <Tunnel kind="clear" />
            <figcaption className="gf-hand mt-3 text-center text-[24px] text-[#425664]">a healthy pipe looks like this</figcaption>
          </figure>
        </div>
      </section>

      {/* ================= When it's worth it ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">When an inspection is worth it</h2>
            <p className="mt-4 max-w-[38ch] text-[14.5px] leading-relaxed text-[#425664]">
              Buying a house? A standard home inspection often doesn't include the sewer line. It's
              buried, and it's expensive to find out later.
            </p>
          </div>
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {WHEN.map((w) => (
              <li key={w} className="group flex gap-3.5 border-b border-[#1f2a33]/10 py-4 text-[15px] leading-snug transition-transform duration-300 hover:translate-x-1.5">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6AD8F] transition-colors duration-300 group-hover:bg-[#425664]" aria-hidden="true" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= What the camera can show ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">What the camera can show us</h2>
          <p className="mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">
            Pick one to see what it looks like down there, what it means, and what usually happens next.
          </p>

          <div className="mt-9 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible" aria-label="Findings">
              {FINDINGS.map((x, n) => (
                <li key={x.id} className="shrink-0">
                  <button type="button" aria-pressed={n === i} onClick={() => setI(n)} className={`w-full rounded-lg border px-5 py-3 text-left text-[14.5px] font-bold transition duration-300 hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] ${n === i ? "border-[#425664] bg-[#425664] text-white" : "border-[#1f2a33]/10 bg-white text-[#425664] hover:border-[#C6AD8F]"}`}>
                    {x.name}
                  </button>
                </li>
              ))}
            </ul>

            <div key={f.id} className="gf-fade grid items-start gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <figure>
                <Tunnel kind={f.id} />
                <figcaption className="gf-hand mt-2 text-center text-[22px] text-[#425664]">{f.note}</figcaption>
              </figure>
              <dl className="space-y-4" aria-live="polite">
                {[["What it looks like", f.look], ["What it means", f.means], ["What usually happens next", f.next]].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[13.5px] font-bold text-[#8a6f4d]">{k}</dt>
                    <dd className="mt-0.5 text-[14.5px] leading-relaxed text-[#1f2a33]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================= The visit ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">Your visit, start to finish</h2>
          
          <ol className="mt-10 grid gap-8 border-t-2 border-dashed border-[#C6AD8F]/50 pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {VISIT.map(([t, d], n) => (
              <li key={t} className="group relative">
                <span className="gf-page gf-hand absolute -top-[58px] left-0 grid h-9 w-9 place-items-center rounded-full border-2 border-[#C6AD8F] bg-[#F6F4F2] text-[22px] text-[#425664] transition duration-300 group-hover:scale-110 group-hover:bg-[#C6AD8F] group-hover:text-[#1f2a33]">{n + 1}</span>
                <h3 className="text-[16px] font-bold leading-tight text-[#1f2a33]">{t}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#425664]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= Questions ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px]">Things people ask us</h2>
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
            <p className="gf-hand text-[28px] leading-none text-[#8a6f4d]">Not sure what's wrong?</p>
            <h2 className="gf-display mt-2 max-w-[20ch] text-[32px] leading-[1.05] sm:text-[42px]">Let's take a look inside.</h2>
            <p className="mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-[#1f2a33]">Contact us and tell us what you've noticed. We'll set up a time.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:bg-[#1f2a33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f2a33]">
              <MessageSquare size={16} aria-hidden="true" />
              Contact Us
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}