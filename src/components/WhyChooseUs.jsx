// src/components/WhyChooseUs.jsx
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  MapPin,
  MessageSquare,
  Star,
  ArrowRight,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Licensed & insured",
    text: "Master plumbers, bonded and insured — lifetime workmanship warranty.",
  },
  {
    Icon: Clock,
    title: "24/7 emergency",
    text: "A live technician answers and a truck rolls out — day or night.",
  },
  {
    Icon: BadgeCheck,
    title: "Flat-rate pricing",
    text: "You approve the price before we start. No hourly surprises.",
  },
  {
    Icon: MapPin,
    title: "Local & family-owned",
    text: "Three generations serving Greater Los Angeles.",
  },
];

const STATS = [
  { value: "35+", label: "Years" },
  { value: "40+", label: "Technicians" },
  { value: "12K+", label: "Jobs" },
  { value: "4.9", label: "Rating" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800&display=swap');
        .gf-why { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-why .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* soft grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f2a33 1px, transparent 1px), linear-gradient(to bottom, #1f2a33 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="gf-why relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: heading + features + stats */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Why choose us
              </p>
            </div>
            <h2 className="gf-display mt-2 max-w-xl text-2xl leading-[1.15] sm:text-3xl">
              Fix it right the first time.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#425664]">
              Family-owned for three generations. Licensed technicians, flat-rate
              pricing, lifetime warranty — no shortcuts, no surprises.
            </p>

            {/* Feature grid (2×2) */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {FEATURES.map(({ Icon, title, text }, i) => (
                  <div
                    key={title}
                    className={[
                      "group relative p-4 transition-colors hover:bg-[#F6F4F2]",
                      i % 2 === 0 ? "sm:border-r sm:border-[#1f2a33]/10" : "",
                      i < 2 ? "border-b border-[#1f2a33]/10" : "",
                    ].join(" ")}
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#425664]/10 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="text-[14px] font-bold leading-tight">{title}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#425664]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats strip */}
            <dl className="mt-5 grid grid-cols-4 gap-2">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-[#1f2a33]/10 bg-white px-2 py-2.5 text-center"
                >
                  <dd className="gf-display text-[18px] text-[#1f2a33]">
                    {s.value}
                  </dd>
                  <dt className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#425664]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT: testimonial + CTA card */}
          <div className="lg:col-span-5">
            {/* mini testimonial */}
            <div className="rounded-xl border border-[#1f2a33]/10 bg-white p-5 shadow-sm">
              <div className="mb-2 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#C6AD8F] text-[#C6AD8F]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-[13.5px] leading-relaxed text-[#1f2a33]">
                “Called late at night with a burst pipe. Technician was here in under
                an hour, fixed it, and cleaned up like nothing happened.”
              </blockquote>
              <p className="mt-3 border-t border-[#1f2a33]/10 pt-2.5 text-[12.5px] font-bold">
                Sarah M. <span className="font-normal text-[#425664]">— Hollywood, CA</span>
              </p>
            </div>

            {/* CTA card */}
            <div className="relative mt-5 overflow-hidden rounded-xl bg-[#425664] p-6 text-white">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-20"
                style={{ background: "#C6AD8F" }}
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="gf-display text-lg leading-tight">
                  Talk to a real technician.
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/75">
                  Describe the problem — we'll give you a flat-rate quote.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to={CONTACT}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6AD8F] px-4 py-2 text-[13px] font-bold text-[#1f2a33] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <MessageSquare size={14} aria-hidden="true" /> Contact Us
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Services <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}