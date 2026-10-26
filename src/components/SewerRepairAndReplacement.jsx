// pages/SewerRepairAndReplacement.jsx
import {
  Phone,
  ArrowRight,
  Check,
  Camera,
  Droplets,
  Waves,
  AlertTriangle,
  TreePine,
  Wrench,
  Home,
  ShieldCheck,
  ClipboardCheck,
  Hammer,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const METHODS = [
  {
    title: "Trenchless repair",
    best: "Best when the pipe is cracked or worn but still in place",
    text: "We line or pull a new pipe through the old one, so your lawn, driveway and landscaping stay where they are.",
    points: ["Little to no digging", "Usually done in a day or two", "Fewer surprises for your yard"],
  },
  {
    title: "Traditional replacement",
    best: "Best when the pipe has collapsed or sunk out of line",
    text: "We open a trench, remove the failed section and lay new pipe at the right slope, then restore the ground.",
    points: ["Fixes collapsed or bellied pipe", "Full section replaced end to end", "Done to local code standards"], // Warranty hataya
  },
];

const SIGNS = [
  { icon: Droplets, title: "Slow drains everywhere", text: "Several fixtures drain slowly at once." },
  { icon: Waves, title: "Gurgling sounds", text: "Toilets or drains bubble when water runs elsewhere." },
  { icon: AlertTriangle, title: "Sewage smell", text: "Odors inside the house or near the cleanout." },
  { icon: TreePine, title: "Wet or sunken yard", text: "Soggy patches or dips along the sewer line." },
  { icon: Wrench, title: "Repeat clogs", text: "Snaking helps for a week, then it's back." },
  { icon: Home, title: "Cracks or settling", text: "Foundation cracks or floors that slope." },
];

const STEPS = [
  { icon: Camera, title: "Camera inspection", text: "We look inside the line and show you the footage." },
  { icon: ClipboardCheck, title: "Written quote", text: "You get the cause, the options and one clear price." },
  { icon: Hammer, title: "Repair or replace", text: "We use the method that suits your pipe and property." },
  { icon: ShieldCheck, title: "Final check", text: "We re-inspect, clean up and make sure everything is right." }, // Warranty hataya
];

export default function SewerRepairAndReplacement() {
  return (
    <main className="gf-page gf-sewer bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }

        /* Fill sweeps up from the bottom on hover */
        .gf-sweep { position: relative; overflow: hidden; isolation: isolate; }
        .gf-sweep::before {
          content: ""; position: absolute; inset: 0; z-index: -1;
          background: var(--sweep, #425664);
          transform: translateY(101%);
          transition: transform .5s cubic-bezier(.2,.7,.2,1);
        }
        .gf-sweep:hover::before, .gf-sweep:focus-within::before { transform: translateY(0); }

        /* Water flowing through the pipe */
        .gf-flow { stroke-dasharray: 2 14; animation: gfflow 1.1s linear infinite; }
        @keyframes gfflow { to { stroke-dashoffset: -16; } }
        .gf-pulse { transform-origin: 250px 150px; animation: gfpulse 2s ease-out infinite; }
        @keyframes gfpulse { from { transform: scale(.6); opacity: .8; } to { transform: scale(2.2); opacity: 0; } }

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
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Sewer Services
              </p>
            </div>
            
            <h1 className="gf-display text-[36px] leading-[1.05] sm:text-[48px] lg:text-[54px]">
              Sewer repair and replacement, without wrecking your yard
            </h1>
            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-[#425664]">
              Trenchless and traditional sewer repair. We start with a camera so you
              see the problem before you pay to fix it. {/* Yahan warranty hata diya */}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Call Button Replaced */}
              <a
                href={PHONE_TEL}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg"
              >
                <Phone size={18} className="text-[#C6AD8F]" />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
            </div>
          </div>

          {/* Cutaway illustration */}
          <figure className="overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-[#364753] shadow-sm">
            <svg viewBox="0 0 480 280" role="img" aria-label="Cutaway of a sewer line running from a house to the street main, with a crack found by camera" className="block w-full">
              <rect width="480" height="280" fill="#364753" />
              <rect y="70" width="480" height="210" fill="#2b3a45" />
              <path d="M0 70H480" stroke="#C6AD8F" strokeWidth="2" />
              <path d="M44 70V34l40-26 40 26v36z" fill="#F6F4F2" />
              <rect x="74" y="44" width="20" height="26" rx="2" fill="#425664" />
              <path d="M84 70V150H400V230" fill="none" stroke="#1f2a33" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M84 70V150H400V230" fill="none" stroke="#425664" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M84 70V150H400V230" fill="none" stroke="#C6AD8F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="gf-flow" />
              <circle cx="250" cy="150" r="14" fill="#C6AD8F" opacity="0.5" className="gf-pulse" />
              <path d="M244 142l6 8-6 4 8 8" fill="none" stroke="#F6F4F2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="250" y="196" textAnchor="middle" fontSize="13" fontWeight="600" fill="#F6F4F2">Camera finds the break</text>
              <text x="400" y="262" textAnchor="middle" fontSize="12" fill="#C6AD8F">Street main</text>
            </svg>
          </figure>
        </div>
      </section>

      {/* ================= Methods ================= */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[24ch] text-[30px] leading-[1.05] sm:text-[42px]">
            Two ways to fix it, and we'll tell you which one your pipe needs
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {METHODS.map((m, i) => (
              <article
                key={m.title}
                className="gf-sweep group rounded-xl border border-[#1f2a33]/10 bg-white p-7 sm:p-9"
                style={{ "--sweep": i === 0 ? "#425664" : "#364753" }}
              >
                <h3 className="gf-display text-[24px] transition-colors duration-500 group-hover:text-white">{m.title}</h3>
                <p className="mt-1.5 text-[13.5px] font-bold text-[#8a6f4d] transition-colors duration-500 group-hover:text-[#C6AD8F]">{m.best}</p>
                <p className="mt-4 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664] transition-colors duration-500 group-hover:text-white/85">{m.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[14px] font-semibold text-[#1f2a33] transition-colors duration-500 group-hover:text-white">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/30 text-[#425664] transition duration-500 group-hover:scale-110 group-hover:bg-[#C6AD8F] group-hover:text-[#1f2a33]">
                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Warning signs ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[24ch] text-[30px] leading-[1.05] sm:text-[42px]">
            Signs your sewer line needs attention
          </h2>
          <p className="mt-4 max-w-[56ch] text-[14.5px] leading-relaxed text-[#425664]">
            One of these can be a simple clog. Two or more usually point to the main line.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="gf-sweep group flex gap-4 rounded-xl border border-[#1f2a33]/10 bg-[#F6F4F2] p-5"
                style={{ "--sweep": "#C6AD8F" }}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-[#425664] transition duration-500 group-hover:-rotate-6 group-hover:scale-110 border border-[#1f2a33]/5">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-bold text-[#1f2a33]">{title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#425664] transition-colors duration-500 group-hover:text-[#1f2a33]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Process ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-[1.05] sm:text-[42px]">How a job runs</h2>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="group relative lg:pr-8">
                {i < STEPS.length - 1 && (
                  <span className="absolute left-14 right-2 top-[27px] hidden h-px bg-[#425664]/20 lg:block" aria-hidden="true">
                    <span className="block h-full w-0 bg-[#C6AD8F] transition-all duration-700 group-hover:w-full" />
                  </span>
                )}
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#425664] text-white transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#C6AD8F] group-hover:text-[#1f2a33]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[16px] font-bold">
                  {i + 1}. {title}
                </h3>
                <p className="mt-1.5 max-w-[30ch] text-[13.5px] leading-relaxed text-[#425664]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= Call to action ================= */}
      <section id="contact" className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-6 rounded-2xl bg-[#425664] p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr] border border-[#1f2a33]/10 shadow-sm">
            <div>
              <h2 className="gf-display text-[28px] leading-[1.1] sm:text-[36px]">
                Not sure what's wrong with your sewer line?
              </h2>
              <p className="mt-3 max-w-[50ch] text-[14.5px] leading-relaxed text-white/80">
                Call us to book a camera inspection and we'll show you what's in the pipe. If water is backing up
                right now, call and we'll dispatch a technician.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {/* Big Call Button Replaced */}
              <a
                href={PHONE_TEL}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg"
              >
                <Phone size={18} />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}