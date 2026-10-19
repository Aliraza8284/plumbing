// src/components/SewersPage.jsx
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ArrowUpRight } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE = "+1 (844) 212-91-86";
const TEL = "tel:+18442129186";
const CONTACT = "/contact";

const services = [
  {
    id: "cleaning",
    title: "Cleaning",
    desc: "Deep cleaning of sewer lines to restore full flow.",
    fit: "Drains are slow in more than one place, toilets gurgle, or there's a smell you can't track down.",
    what: "We run a cable through your cleanout, break up whatever is in the way and pull it out. Then we run water to make sure it flows the way it should.",
  },
  {
    id: "jetting",
    title: "Hydro Jetting",
    desc: "High-pressure jetting for tough sewer blockages.",
    fit: "Grease, scale or roots keep building up, or a clog comes back soon after it was snaked.",
    what: "A hose with a jetting nozzle pushes high-pressure water through the line and scrubs the pipe walls. If your pipe looks fragile, we look at it with a camera first.",
  },
  {
    id: "inspection",
    title: "Inspection",
    desc: "Camera-based sewer inspection with a full written report.",
    fit: "Repeat clogs, a wet or sunken patch in the yard, or you're buying a house and want to know what's underground.",
    what: "A small camera goes in through the cleanout. You watch the picture with us, and afterwards you get a written report you can keep.",
  },
  {
    id: "repair",
    title: "Repair & Replacement",
    desc: "Full sewer line repair with lifetime workmanship warranty.",
    fit: "The pipe is cracked, sagging or collapsed, or roots have wrecked the joints.",
    what: "We show you the damage on camera, then quote a repair of the bad section or a full replacement. Our work is covered by a lifetime workmanship warranty.",
  },
  {
    id: "trenchless",
    title: "Trenchless Sewer Technology",
    desc: "Modern no-dig sewer repair using pipe bursting and lining.",
    fit: "The pipe runs under a driveway, a tree or a garden you'd like to keep in one piece.",
    what: "With lining, a resin-coated liner goes inside the old pipe and hardens into a new one. With pipe bursting, a new pipe is pulled through as the old one breaks apart. Not every pipe qualifies, and the camera tells us which method fits.",
  },
];

const guide = [
  ["Drains are slow in more than one place", "Cleaning", "#cleaning"],
  ["The same clog keeps coming back", "Camera inspection", "#inspection"],
  ["Grease or roots keep building up", "Hydro jetting", "#jetting"],
  ["Soggy patch in the yard, or a sewer smell outside", "Camera inspection", "#inspection"],
  ["The pipe is cracked, sagging or collapsed", "Repair & replacement", "#repair"],
  ["You'd rather not dig up the driveway or garden", "Trenchless repair", "#trenchless"],
];

const tellUs = [
  "Which drains or toilets are affected, and whether it's one or several.",
  "When it started, and whether it has happened before.",
  "Roughly how old the house is. Photos of the cleanout or the yard help too.",
];

/* Hand-drawn style cross-section: lines are wobbled with an SVG displacement filter */
function SketchDiagram() {
  return (
    <svg viewBox="0 0 560 440" className="block w-full" role="img" aria-label="Sketch of a sewer line from a house to the street, with tree roots and a blockage in the pipe">
      <defs>
        <filter id="gf-sketch" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
      </defs>

      <g filter="url(#gf-sketch)" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="#1f2a33" strokeWidth="3">
        {/* soil */}
        <path d="M6 184C120 178 220 188 330 182S480 178 554 184V434H6Z" fill="#E9E1D5" stroke="none" />
        <path d="M6 184C120 178 220 188 330 182S480 178 554 184" />

        {/* house */}
        <path d="M36 184V112H168V184" fill="#F6F4F2" />
        <path d="M24 114L102 54L180 114" fill="#F6F4F2" />
        <path d="M88 184V146H116V184" />
        <rect x="132" y="128" width="22" height="22" />

        {/* street main */}
        <path d="M512 192V420" stroke="#1f2a33" strokeWidth="22" />
        <path d="M512 192V420" stroke="#C6AD8F" strokeWidth="14" />

        {/* house sewer line */}
        <path d="M102 188V252L512 276" stroke="#1f2a33" strokeWidth="22" />
        <path d="M102 188V252L512 276" stroke="#C6AD8F" strokeWidth="14" />

        {/* cleanout */}
        <path d="M168 184V198" strokeWidth="5" />
        <ellipse cx="168" cy="182" rx="9" ry="4" fill="#F6F4F2" />

        {/* tree and roots */}
        <path d="M330 184V120" strokeWidth="9" />
        <path d="M290 110C272 80 304 52 330 62C356 46 392 78 368 108C388 130 346 142 330 124C312 144 276 134 290 110Z" fill="#F6F4F2" />
        <path d="M330 188C326 214 340 230 332 262" strokeWidth="2.5" />
        <path d="M330 196C312 214 300 232 308 252" strokeWidth="2.5" />
        <path d="M332 262l-8 10M332 262l9 9M308 252l-6 11" strokeWidth="2.2" />

        {/* blockage */}
        <path d="M404 268C414 258 436 260 444 270C452 280 440 290 424 289C408 290 396 278 404 268Z" fill="#425664" stroke="#1f2a33" strokeWidth="2.5" />
      </g>

      {/* camera cable, drawn plain so it stays readable */}
      <path d="M168 198C172 232 190 246 230 255L388 270" fill="none" stroke="#425664" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" className="gf-cam" />
      <circle cx="392" cy="271" r="7" fill="#F6F4F2" stroke="#425664" strokeWidth="3" />

      {/* handwritten notes */}
      <g className="gf-hand" fill="#425664" fontSize="23">
        <text x="196" y="352">tree roots get in at the joints</text>
        <path d="M262 330C290 312 306 292 318 270" fill="none" stroke="#425664" strokeWidth="2" strokeLinecap="round" />
        <text x="352" y="338">this is what the camera finds</text>
        <path d="M430 318C432 306 430 296 426 292" fill="none" stroke="#425664" strokeWidth="2" strokeLinecap="round" />
        <text x="110" y="414">street main</text>
        <path d="M200 408C300 410 420 398 488 380" fill="none" stroke="#425664" strokeWidth="2" strokeLinecap="round" />
        <text x="178" y="222">cleanout</text>
      </g>
    </svg>
  );
}

export default function SewersPage() {
  return (
    <main className="gf-sewers bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800&family=Caveat:wght@600&display=swap');
        .gf-sewers { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-sewers .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        .gf-sewers .gf-hand { font-family: 'Caveat', 'Segoe Print', cursive; font-weight: 600; }
        .gf-cam { animation: gfcam 1.4s linear infinite; }
        @keyframes gfcam { to { stroke-dashoffset: -22; } }
        .gf-link { background: linear-gradient(currentColor, currentColor) 0 100% / 0 2px no-repeat; transition: background-size .3s ease; }
        .group:hover .gf-link, .gf-link:hover, .gf-link:focus-visible { background-size: 100% 2px; }
        @media (prefers-reduced-motion: reduce) { .gf-sewers *, .gf-sewers *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <h1 className="gf-display text-[38px] leading-[1.08] sm:text-[56px]">
              Sewer problems, sorted out properly.
            </h1>
            <p className="mt-5 max-w-[48ch] text-[18px] leading-[1.7] text-[#425664]">
              Professional sewer services with camera inspection and full warranty on every repair. We
              look inside the pipe first, so we fix what's actually wrong and not what we guessed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-4 text-[16px] font-bold text-white transition duration-300 hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                Book a camera inspection
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </Link>
              <a href={TEL} className="group inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-[#425664]/40 px-7 py-4 text-[16px] font-bold text-[#425664] transition duration-300 hover:border-[#425664] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                <Phone size={16} className="transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
                Call Now
              </a>
            </div>
            <p className="mt-5 text-[15px] text-[#425664]/85">Not sure what you need? Call and describe it. We'll tell you straight.</p>
          </div>

          <div className="rounded-[22px] bg-white p-4 ring-1 ring-[#e5e0da] sm:p-6">
            <SketchDiagram />
          </div>
        </div>
      </section>

      {/* ================= Where to start ================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.12] sm:text-[40px]">Not sure where to start?</h2>
            <p className="mt-3 max-w-[36ch] text-[16.5px] leading-relaxed text-[#425664]">
              Find what's happening at your place. This is where we'd usually begin.
            </p>
          </div>
          <ul className="border-t border-[#1f2a33]/15">
            {guide.map(([what, go, href]) => (
              <li key={what} className="border-b border-[#1f2a33]/15">
                <a href={href} className="group flex items-center justify-between gap-4 py-4 transition-transform duration-300 hover:translate-x-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
                  <span className="text-[17px] leading-snug">{what}</span>
                  <span className="flex shrink-0 items-center gap-1.5 text-[15px] font-bold text-[#425664]">
                    <span className="gf-link pb-0.5">{go}</span>
                    <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.12] sm:text-[40px]">What we do, and when it makes sense</h2>

          <div className="mt-10 divide-y divide-[#1f2a33]/15 border-y border-[#1f2a33]/15">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="group grid scroll-mt-6 gap-5 py-9 md:grid-cols-[0.9fr_1.4fr] md:gap-12">
                <div className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <h3 className="gf-display text-[26px] leading-[1.1] sm:text-[30px]">{s.title}</h3>
                  <p className="mt-2 max-w-[34ch] text-[16px] leading-relaxed text-[#425664]">{s.desc}</p>
                </div>
                <dl className="space-y-5 border-l-4 border-[#C6AD8F]/60 pl-6 transition-colors duration-300 group-hover:border-[#425664]">
                  <div>
                    <dt className="text-[14.5px] font-extrabold text-[#8a6f4d]">Good fit when</dt>
                    <dd className="mt-1 max-w-[56ch] text-[16.5px] leading-relaxed">{s.fit}</dd>
                  </div>
                  <div>
                    <dt className="text-[14.5px] font-extrabold text-[#8a6f4d]">What happens</dt>
                    <dd className="mt-1 max-w-[56ch] text-[16.5px] leading-relaxed">{s.what}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Before you call ================= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-[1.12] sm:text-[40px]">What helps us when you call</h2>
            <ul className="mt-6 space-y-4">
              {tellUs.map((t) => (
                <li key={t} className="flex gap-4 text-[17px] leading-snug">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#C6AD8F]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start rotate-[-1.2deg] rounded-md bg-[#C6AD8F]/45 p-7 shadow-[0_14px_28px_-18px_rgba(31,42,51,0.5)] transition-transform duration-500 hover:rotate-0 sm:p-8">
            <h3 className="gf-display text-[24px]">Sewage coming back up right now?</h3>
            <ol className="mt-4 list-decimal space-y-2.5 pl-6 text-[17px] leading-snug marker:font-bold">
              <li>Stop using water. No flushing, showers, dishwasher or laundry.</li>
              <li>Keep kids and pets out of the affected area.</li>
              <li>Call us. We'll tell you what to do until we get there.</li>
            </ol>
            <a href={TEL} className="mt-6 inline-flex items-center gap-2 text-[18px] font-extrabold underline decoration-2 underline-offset-4 hover:decoration-[#425664]">
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
          </aside>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-[#425664] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
            <div>
              <h2 className="gf-display max-w-[20ch] text-[32px] leading-[1.1] sm:text-[44px]">Tell us what's going on with your sewer line.</h2>
              <p className="mt-3 max-w-[46ch] text-[17px] leading-relaxed text-white/85">Send a message or call. We'll work out whether you need a camera look, a cleaning or a repair.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to={CONTACT} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-4 text-[16px] font-bold text-[#1a252d] transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <MessageSquare size={16} /> Contact Us
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </Link>
              <a href={TEL} className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 border-white/45 px-7 py-4 text-[16px] font-bold transition duration-300 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Phone size={16} aria-hidden="true" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}