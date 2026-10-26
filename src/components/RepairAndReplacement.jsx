// pages/RepairAndReplacement.jsx
import { useState } from "react";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  MoveHorizontal,
  CheckCircle2,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";
const IMG = {
  hero: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1800&q=85",
  before: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1400&q=85",
  after: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=85",
  g1: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85",
  g2: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
  g3: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  g4: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
};

const REPAIR = [
  "One cracked or broken section",
  "A joint that has pulled apart or slipped",
  "Roots getting in at one spot",
  "The rest of the pipe looks fine on camera",
];

const REPLACE = [
  "Cracks or breaks in several places",
  "Pipe that has collapsed, sagged or started crumbling",
  "Old clay, cast iron or fiber pipe that's worn out",
  "Backups that keep coming back after cleaning",
];

const STEPS = [
  ["We look first", "A camera inspection helps identify the problem before work begins."],
  ["We find the spot", "We locate the damaged section and assess how deep it sits."],
  ["You get a straight answer", "We explain the findings and discuss the price before work starts."],
  ["We do the work", "We repair the damaged section or replace the pipe as needed."],
  ["We check it and clean up", "We check the line, test the flow and tidy the work area."],
];

const JOBS = [
  { src: IMG.g1, alt: "Plumbing professional at work", cap: "Preparing for the repair", cls: "col-span-2 row-span-2" },
  { src: IMG.g2, alt: "Plumbing repair reference photo", cap: "Inspecting the problem", cls: "" },
  { src: IMG.g3, alt: "Pipe repair reference photo", cap: "Repair work", cls: "" },
  { src: IMG.g4, alt: "Residential interior reference photo", cap: "Finishing the job", cls: "col-span-2" },
];

/* Online image with fallback */
function Photo({ src, alt, eager = false, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#425664] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div role="img" aria-label={alt} className="flex h-full min-h-32 items-center justify-center p-3 text-center text-xs text-white/80">
          Image unavailable
        </div>
      )}
    </div>
  );
}

/* Before / After comparison slider */
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [beforeFailed, setBeforeFailed] = useState(false);
  const [afterFailed, setAfterFailed] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#1f2a33] sm:aspect-[16/9]">
      {/* After */}
      {!afterFailed ? (
        <img
          src={IMG.after}
          alt="After repair reference photo"
          loading="lazy"
          onError={() => setAfterFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#425664] text-xs text-white">After image unavailable</div>
      )}

      {/* Before: same frame, clipped by slider */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {!beforeFailed ? (
          <img
            src={IMG.before}
            alt="Before repair reference photo"
            loading="lazy"
            onError={() => setBeforeFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#425664] text-xs text-white">Before image unavailable</div>
        )}
      </div>

      <span className="absolute left-3 top-3 z-10 rounded-md border border-white/10 bg-[#1f2a33]/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">Before</span>
      <span className="absolute right-3 top-3 z-10 rounded-md bg-[#C6AD8F] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1f2a33] sm:text-xs">After</span>

      <div className="pointer-events-none absolute inset-y-0 z-10 w-[2px] bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1f2a33] shadow-lg">
          <MoveHorizontal size={16} />
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare before and after images"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export default function RepairAndReplacement() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[440px] items-end overflow-hidden bg-[#1f2a33] text-white sm:min-h-[540px]">
        <div className="absolute inset-0 -z-20">
          <Photo src={IMG.hero} alt="Plumbing professional at work" eager />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1f2a33] via-[#1f2a33]/70 to-[#1f2a33]/20 sm:bg-gradient-to-r sm:from-[#1f2a33] sm:via-[#1f2a33]/75 sm:to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-9 pt-24 sm:px-8 sm:pb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">Sewers</p>
          </div>

          <h1 className="gf-display max-w-3xl text-[38px] leading-[1.05] sm:text-[54px] lg:text-[64px]">
            Repair &amp; Replacement
          </h1>

          <p className="mt-4 max-w-[36ch] text-[14.5px] leading-relaxed text-white/80 sm:text-base">
            Sewer line repair and replacement with clear recommendations and upfront pricing.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {/* Call Button Replaced */}
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-6 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg group">
              <Phone size={18} />
              Call {PHONE_DISPLAY}
              <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
            </a>
            <a href="#process" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-6 py-3.5 text-[13.5px] font-bold text-white transition-colors hover:bg-white/10">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ================= REPAIR OR REPLACE ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Diagnosis</span>
            </div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px] text-[#1f2a33]">
              Does it need a patch, or a whole new line?
            </h2>
            <p className="mt-3 max-w-[40ch] text-[14.5px] leading-relaxed text-[#425664]">
              Some damaged pipes only need one section fixed. A camera inspection helps identify the problem before work begins.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#1f2a33]/12 bg-white p-6 sm:p-8">
              <h3 className="gf-display text-[22px] text-[#1f2a33]">
                A repair is usually enough when:
              </h3>
              <ul className="mt-4 space-y-2.5">
                {REPAIR.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-[#425664]">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#C6AD8F]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#1f2a33]/12 bg-white p-6 sm:p-8">
              <h3 className="gf-display text-[22px] text-[#1f2a33]">
                You're better off replacing it when:
              </h3>
              <ul className="mt-4 space-y-2.5">
                {REPLACE.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-relaxed text-[#425664]">
                    <ArrowRight size={16} className="mt-0.5 shrink-0 text-[#425664]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section id="process" className="bg-white border-b border-[#1f2a33]/10 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">The Process</span>
            </div>
            <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px] text-[#1f2a33]">
              How it goes, start to finish
            </h2>
          </div>

          <ol className="border-l-2 border-[#C6AD8F]/40">
            {STEPS.map(([title, description], index) => (
              <li key={title} className="relative pb-8 pl-8 last:pb-0 sm:pl-10">
                <span className="gf-display absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#C6AD8F] bg-[#F6F4F2] text-[13px] font-bold text-[#425664]">
                  {index + 1}
                </span>
                <h3 className="text-[16px] font-extrabold text-[#1f2a33] pt-1">
                  {title}
                </h3>
                <p className="mt-1 max-w-[52ch] text-[14px] leading-relaxed text-[#425664]">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Our Work</span>
          </div>
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[38px] text-[#1f2a33]">Out on the job</h2>
          <p className="mt-2 text-[14px] text-[#425664]">Plumbing and home-service reference photos.</p>

          <div className="mt-6 grid auto-rows-[125px] grid-cols-2 gap-3 sm:auto-rows-[180px] lg:grid-cols-4">
            {JOBS.map((job) => (
              <figure key={job.cap} className={`group relative overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-[#1f2a33] ${job.cls}`}>
                <Photo src={job.src} alt={job.alt} className="transition-transform duration-500 group-hover:scale-[1.04]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2a33]/90 to-transparent px-4 pb-3 pt-10 text-[12px] font-bold text-white sm:text-[13px]">
                  {job.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#1f2a33] py-16 text-white sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="gf-display max-w-[24ch] text-[30px] leading-[1.05] sm:text-[42px]">
              Not sure what's wrong with your sewer line?
            </h2>
            <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-white/80">
              Call us to discuss inspection and repair options. We'll give you clear answers and upfront pricing.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Big Call Button Replaced */}
            <a href={PHONE_TEL} className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg">
              <Phone size={18} />
              Call {PHONE_DISPLAY}
              <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}