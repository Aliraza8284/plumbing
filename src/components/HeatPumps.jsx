// pages/HeatPumps.jsx
import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Snowflake,
  Sun,
  Wrench,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

/* Working Direct Image Links */
const IMG = {
  hero: [
    "https://images.pexels.com/photos/38228166/pexels-photo-38228166.jpeg?_gl=1*uscpcq*_ga*MTIyNzI3MzQwOC4xNzkyMjQ5NzQx*_ga_8JE65Q40S6*czE3OTIyNDk3NDEkbzEkZzEkdDE3OTIyNDk4MTgkajU0JGwwJGgw"
  ],
  round: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=500&q=80",
  ],
  install: [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  ],
  repair: [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=85",
  ],
  maintenance: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
  ],
  s1: [
    "https://images.pexels.com/photos/38228166/pexels-photo-38228166.jpeg?_gl=1*uscpcq*_ga*MTIyNzI3MzQwOC4xNzkyMjQ5NzQx*_ga_8JE65Q40S6*czE3OTIyNDk3NDEkbzEkZzEkdDE3OTIyNDk4MTgkajU0JGwwJGgw"
  ],
  s2: [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80",
  ],
  s3: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80",
  ],
  s4: [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=700&q=80",
  ],
};

const FALLBACK = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=75";

const HOW = [
  [Snowflake, "In winter", "Even when it's cold outside, a heat pump can transfer heat into your home."],
  [Sun, "In summer", "A heat pump reverses direction and moves heat outside, much like an air conditioner."],
  [Wrench, "Why it saves energy", "Heat pumps transfer heat rather than generating it directly, which can reduce electricity use."],
];

const SERVICES = [
  {
    t: "Installation",
    img: IMG.install,
    alt: "Technician working on heating and cooling equipment",
    p: "We assess your home, help determine the right system size, and explain your installation options.",
    list: ["System sizing for your home", "Ducted and ductless options", "Installation checks and testing"],
  },
  {
    t: "Repair",
    img: IMG.repair,
    alt: "Technician inspecting HVAC equipment",
    p: "If your system is not heating or cooling properly, a technician can inspect the equipment and identify the problem.",
    list: ["Heating or cooling problems", "Ice on the outdoor unit", "Unusual noises or constant running"],
  },
  {
    t: "Maintenance",
    img: IMG.maintenance,
    alt: "Technician servicing heating and cooling equipment",
    p: "Routine maintenance helps keep the system working efficiently and can identify potential problems early.",
    list: ["Inspect filters and coils", "Check airflow and electrical parts", "Test system operation"],
  },
];

const QA = [
  ["Do heat pumps work when it's really cold?", "Cold-climate models can operate in low temperatures. Performance varies by model and outdoor conditions."],
  ["Ducts or ductless?", "Ducted systems can use existing ductwork. Ductless mini-splits may work well for individual rooms or homes without ducts."],
  ["Are there rebates?", "Rebates and tax credits depend on your location, equipment, and current eligibility rules."],
];

const STRIP = [
  { src: IMG.s1, alt: "Heating and cooling equipment", cap: "Heating and cooling equipment" },
  { src: IMG.s2, alt: "HVAC installation work", cap: "Installation work" },
  { src: IMG.s3, alt: "Technician working on HVAC equipment", cap: "Service and inspection" },
  { src: IMG.s4, alt: "Technician inspecting equipment", cap: "Maintenance and repair" },
];

const SIGNS = [
  "The home never reaches a comfortable temperature",
  "Your electricity bill has increased unexpectedly",
  "Ice remains on the outdoor unit",
  "The equipment makes unusual noises",
  "It has been over a year since the last maintenance check",
];

function Photo({ src, alt, eager = false, className = "" }) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const [useLastFallback, setUseLastFallback] = useState(false);

  const currentSrc = useLastFallback ? FALLBACK : sources[index];

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => {
        if (useLastFallback) return;
        if (index < sources.length - 1) {
          setIndex((previous) => previous + 1);
        } else {
          setUseLastFallback(true);
        }
      }}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export default function HeatPumps() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        .gf-page .gf-strip { scrollbar-width: thin; scrollbar-color: #C6AD8F transparent; }
        .gf-page details > summary { list-style: none; }
        .gf-page details > summary::-webkit-details-marker { display: none; }
        .gf-page details[open] .gf-plus { transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) {
          .gf-page *, .gf-page *::before, .gf-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6AD8F]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                HVAC Services
              </p>
            </div>

            <h1 className="gf-display text-[44px] leading-[1.05] sm:text-[56px] lg:text-[64px]">
              Heat Pumps
            </h1>

            <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-[#425664]">
              Energy-efficient heat pump installation, repair, and maintenance.
            </p>

            <p className="mt-3 max-w-[44ch] text-[14px] leading-relaxed text-[#425664]">
              One system can keep your home warm in winter and cool in summer.
              Explore your options for installation, repair, and ongoing care.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+18442129186"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-[#364753]"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1f2a33]/20 bg-white px-6 py-3.5 text-[14px] font-bold text-[#425664] transition-colors hover:border-[#425664]"
              >
                <MessageSquare size={16} />
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:mr-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-[#C6AD8F] shadow-sm">
              <Photo src={IMG.hero} alt="Technician working on HVAC equipment" eager />
            </div>

            <div className="absolute -bottom-6 -left-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#F6F4F2] bg-[#425664] shadow-md sm:-left-8 sm:h-36 sm:w-36">
              <Photo src={IMG.round} alt="HVAC servicing work" eager />
            </div>

            <p className="absolute -right-2 top-8 max-w-[150px] rounded-xl border border-[#1f2a33]/10 bg-white px-4 py-3 text-[13px] font-bold leading-snug text-[#425664] shadow-sm sm:-right-6">
              Heating and cooling in one system
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-[#1f2a33]/10 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[22ch] text-[30px] leading-tight sm:text-[42px]">
            How a heat pump works, in plain words
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {HOW.map(([Icon, title, description]) => (
              <div key={title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664]">
                  <Icon size={22} />
                </span>

                <h3 className="mt-4 text-[18px] font-extrabold">
                  {title}
                </h3>

                <p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-[#425664]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-tight sm:text-[42px]">
            What we can do for you
          </h2>

          <div className="mt-9 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.t}
                className="flex flex-col overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#425664]">
                  <Photo src={service.img} alt={service.alt} />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="gf-display text-[22px]">
                    {service.t}
                  </h3>

                  <p className="mt-2 flex-grow text-[13.5px] leading-relaxed text-[#425664]">
                    {service.p}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-[#1f2a33]/10 pt-5">
                    {service.list.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[13px] leading-snug">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6AD8F]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#425664] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display text-[30px] leading-tight sm:text-[42px]">
            A look at the work
          </h2>

          <div
            className="gf-strip mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
            role="region"
            aria-label="Heating and cooling service gallery"
            tabIndex={0}
          >
            {STRIP.map((photo) => (
              <figure key={photo.cap} className="w-[70%] shrink-0 snap-start sm:w-[280px]">
                <div className="aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-[#1f2a33]">
                  <Photo src={photo.src} alt={photo.alt} />
                </div>

                <figcaption className="mt-3 text-[13px] font-semibold text-white/80">
                  {photo.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs and warning signs */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="gf-display text-[30px] leading-tight sm:text-[42px]">
              Things people ask us
            </h2>

            <div className="mt-6 border-t border-[#1f2a33]/10">
              {QA.map(([question, answer]) => (
                <details key={question} className="group border-b border-[#1f2a33]/10 py-4">
                  <summary className="flex cursor-pointer items-center justify-between gap-5 text-[14px] font-bold outline-none">
                    {question}
                    <span className="gf-plus text-[24px] font-medium leading-none text-[#C6AD8F] transition-transform">
                      +
                    </span>
                  </summary>

                  <p className="mt-3 max-w-[52ch] text-[13.5px] leading-relaxed text-[#425664]">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <aside className="self-start rounded-xl border border-[#1f2a33]/10 bg-[#C6AD8F]/15 p-6 sm:p-8">
            <h2 className="gf-display text-[24px] leading-tight">
              Time to give us a call if…
            </h2>

            <ul className="mt-5 space-y-3.5">
              {SIGNS.map((sign) => (
                <li key={sign} className="flex gap-3 text-[13px] font-semibold leading-snug text-[#425664]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#425664]" />
                  {sign}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Call to action */}
      <section className="pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1f2a33] p-7 text-white sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="gf-display max-w-[20ch] text-[28px] leading-tight sm:text-[36px]">
                Thinking about a heat pump? Let's talk it through.
              </h2>

              <p className="mt-3 max-w-[44ch] text-[13.5px] leading-relaxed text-white/80">
                Tell us about your home and your heating and cooling needs.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+18442129186"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition-colors hover:bg-white"
              >
                <Phone size={16} />
                Call Now
              </a>

              <a
                href={CONTACT}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 text-[14px] font-bold transition-colors hover:bg-white/10"
              >
                <MessageSquare size={16} />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}