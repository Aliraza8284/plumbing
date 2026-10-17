// src/components/History.jsx
import React from "react";
import { Calendar, Award, Users, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "1998",
    title: "The First Van",
    desc: "Founder Marcus Reyes launches GlobelFixs with a single van, a master plumber's license, and a promise to fix it right the first time.",
    icon: Wrench,
  },
  {
    year: "2005",
    title: "10,000th Job Completed",
    desc: "Word of mouth grows the business. We complete our 10,000th service call and hire our first dedicated dispatch team.",
    icon: Users,
  },
  {
    year: "2012",
    title: "Expanding to HVAC",
    desc: "After years of customer requests, we add heating and cooling services, becoming a full-service home comfort company.",
    icon: ShieldCheck,
  },
  {
    year: "2018",
    title: "Second Generation Joins",
    desc: "Marcus's son joins as operations lead, bringing modern technology and smart dispatch systems to the family business.",
    icon: Award,
  },
  {
    year: "2024",
    title: "18,000+ Homes Served",
    desc: "Today, GlobelFixs is one of the most trusted names in Greater Los Angeles, serving over 18,000 homes and businesses.",
    icon: Calendar,
  },
];

export default function History() {
  return (
    <section className="relative overflow-hidden bg-[#F6F4F2] py-16 sm:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-history { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-history .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* Soft grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f2a33 1px, transparent 1px), linear-gradient(to bottom, #1f2a33 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="gf-history relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* ---------- Header ---------- */}
        <header className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
              About us
            </p>
          </div>
          <h1 className="gf-display mt-3 text-3xl leading-[1.1] text-[#1f2a33] sm:text-4xl md:text-5xl">
            Our <span className="text-[#C6AD8F]">history</span>
          </h1>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#425664] sm:text-[15.5px]">
            Three generations of master plumbers. From a single van in 1998 to a
            full-service company trusted by thousands across Los Angeles.
          </p>

          {/* Stat strip */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { v: "25+", l: "Years in business" },
              { v: "18K+", l: "Jobs completed" },
              { v: "40+", l: "Technicians" },
              { v: "4.9", l: "Average rating" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-[#1f2a33]/10 bg-white px-4 py-3"
              >
                <dd className="gf-display text-[22px] leading-none text-[#1f2a33]">
                  {s.v}
                </dd>
                <dt className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#425664]">
                  {s.l}
                </dt>
              </div>
            ))}
          </dl>
        </header>

        {/* ---------- Main Grid: Timeline + Sticky Panel ---------- */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — Timeline */}
          <div className="relative lg:col-span-7">
            {/* Vertical line */}
            <div
              className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[#C6AD8F] via-[#C6AD8F]/50 to-transparent sm:block"
              aria-hidden="true"
            />

            <ol className="space-y-6 sm:space-y-8">
              {milestones.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.year}
                    className="group relative flex gap-4 sm:gap-6"
                  >
                    {/* Icon circle */}
                    <div className="relative z-10 shrink-0">
                      <div className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#C6AD8F] bg-white text-[#C6AD8F] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C6AD8F] group-hover:text-white">
                        <Icon size={17} strokeWidth={2.5} aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-2xl border border-[#1f2a33]/10 bg-white p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#C6AD8F]/40 group-hover:shadow-md sm:p-6">
                      <div className="mb-2 flex flex-wrap items-center gap-2.5">
                        <span className="rounded-md bg-[#C6AD8F]/15 px-2.5 py-1 text-[12px] font-black tracking-wide text-[#8a6f4d]">
                          {item.year}
                        </span>
                        <h3 className="text-[15.5px] font-extrabold leading-tight text-[#1f2a33]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-[#425664]">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* RIGHT — Sticky image + values panel */}
          <aside className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 space-y-5">
              {/* Photo card */}
              <div className="relative overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-[#425664] shadow-[0_20px_48px_-24px_rgba(31,42,51,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=85"
                  alt="GlobelFixs plumbers at work"
                  className="h-[360px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a33]/90 via-[#1f2a33]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                    Since 1998
                  </p>
                  <p className="gf-display mt-1 text-[20px] leading-tight">
                    A legacy of honest work.
                  </p>
                  <p className="mt-1 text-[12.5px] text-white/75">
                    Three generations. One standard.
                  </p>
                </div>
              </div>

              {/* Values card */}
              <div className="rounded-2xl border border-[#1f2a33]/10 bg-white p-5">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                  What hasn't changed
                </p>
                <ul className="mt-3 space-y-3">
                  {[
                    "Flat-rate pricing, approved before work starts",
                    "Licensed master plumbers on every job",
                    "Lifetime workmanship warranty",
                    "Clean sites, respectful technicians",
                  ].map((v) => (
                    <li
                      key={v}
                      className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#425664]"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#C6AD8F]" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="/contact"
                className="group flex items-center justify-between rounded-xl bg-[#425664] px-5 py-4 text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
              >
                <span>
                  <span className="block text-[12.5px] font-bold leading-tight">
                    Work with us
                  </span>
                  <span className="mt-0.5 block text-[11.5px] text-white/70">
                    Get a flat-rate quote today
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}