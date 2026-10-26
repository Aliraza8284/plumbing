// src/components/Testimonials.jsx
import { useMemo, useState } from "react";
import { Star, MapPin, Phone, ArrowRight } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const REVIEWS = [
  {
    name: "Sarah Mitchell",
    city: "Hollywood, CA",
    service: "Emergency Plumbing",
    rating: 5,
    quote:
      "Called at 11 PM with a burst pipe flooding our kitchen. A technician was at the door in under 40 minutes, shut off the water, and had it fixed by 1 AM. Cleaned up like nothing happened — I couldn't believe it.",
  },
  {
    name: "David Reyes",
    city: "Pasadena, CA",
    service: "Sewer Line Replacement",
    rating: 5,
    quote:
      "Got three quotes for a sewer line replacement. GlobalFixs was the only one who explained the issue clearly, showed me the camera footage, and stuck to the original price. No surprises on the bill.",
  },
  {
    name: "Linda Kim",
    city: "Burbank, CA",
    service: "Water Heater Install",
    rating: 5,
    quote:
      "Our old water heater died on a Friday. They installed a new tankless unit on Saturday morning. Flat-rate quote upfront, no upselling, and they hauled away the old unit. Highly recommend.",
  },
  {
    name: "Marcus Chen",
    city: "Glendale, CA",
    service: "Leak Detection",
    rating: 5,
    quote:
      "Had a mystery leak that two other plumbers couldn't find. GlobalFixs used acoustic and thermal tools and pinpointed it in 20 minutes — behind a wall, no demolition needed. Fixed the same day.",
  },
  {
    name: "Priya Patel",
    city: "Santa Monica, CA",
    service: "HVAC Repair",
    rating: 5,
    quote:
      "AC stopped working during a heatwave. They diagnosed a failed capacitor, had the part on the truck, and were done in under an hour. Honest pricing, no pressure to replace the whole system.",
  },
  {
    name: "James Walker",
    city: "Long Beach, CA",
    service: "Drain Cleaning",
    rating: 5,
    quote:
      "Kitchen sink backed up for the third time. Instead of just snaking it again, they ran a camera, found the root cause, and hydro-jetted the line. Haven't had a problem since.",
  },
];

const FILTERS = ["All", "Plumbing", "Sewer", "HVAC", "Emergency"];

function categoryOf(service) {
  const s = service.toLowerCase();
  if (s.includes("sewer") || s.includes("drain") || s.includes("rooter")) return "Sewer";
  if (s.includes("hvac") || s.includes("heat") || s.includes("air") || s.includes("furnace")) return "HVAC";
  if (s.includes("emergency")) return "Emergency";
  return "Plumbing";
}

function Stars({ n = 5, size = 14 }) {
  return (
    <span className="inline-flex gap-0.5 align-middle" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < n ? "fill-[#C6AD8F] text-[#C6AD8F]" : "text-[#425664]/25"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function Testimonials() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? REVIEWS
        : REVIEWS.filter((r) => categoryOf(r.service) === filter),
    [filter]
  );

  return (
    <section className="gf-testimonials relative overflow-hidden bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-testimonials { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-testimonials .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* Soft grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f2a33 1px, transparent 1px), linear-gradient(to bottom, #1f2a33 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        {/* ---------- Header ---------- */}
        <header className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
              Testimonials
            </p>
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
          </div>
          <h1 className="gf-display mt-3 text-3xl leading-[1.1] text-[#1f2a33] sm:text-4xl md:text-[52px]">
            Real reviews from <span className="text-[#C6AD8F]">real neighbors.</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-[#425664]">
            We've been family-owned for three generations. Here's what homeowners
            across Greater Los Angeles say after we've been in their homes.
          </p>
        </header>

        {/* ---------- Filters ---------- */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-bold">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative transition-colors ${
                filter === f
                  ? "text-[#1f2a33]"
                  : "text-[#425664]/60 hover:text-[#425664]"
              }`}
            >
              {f}
              {filter === f && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C6AD8F]" />
              )}
            </button>
          ))}
        </nav>

        {/* ---------- Timeline Layout (Left - Center Line - Right) ---------- */}
        <div className="relative mt-16 sm:mt-20">
          
          {/* Center Vertical Line */}
          <div 
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[#1f2a33]/15 sm:-translate-x-1/2" 
            aria-hidden="true" 
          />

          <div className="space-y-10 sm:space-y-16">
            {filtered.map((r, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={r.name}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* --- Text Content (Data) --- */}
                  <div className={`w-full pl-12 sm:pl-0 sm:w-1/2 ${
                    isLeft ? "sm:pr-10 md:pr-16 sm:text-right" : "sm:pl-10 md:pl-16 sm:text-left"
                  }`}>
                    {/* Stars */}
                    <div className={`flex ${isLeft ? "sm:justify-end" : "sm:justify-start"}`}>
                      <Stars n={r.rating} size={14} />
                    </div>

                    {/* Quote */}
                    <blockquote className="gf-display mt-3 text-[18px] leading-[1.5] text-[#1f2a33] sm:text-[20px]">
                      “{r.quote}”
                    </blockquote>

                    {/* Byline */}
                    <div className={`mt-4 text-[13px] text-[#425664] flex flex-wrap gap-x-2 gap-y-1 items-center ${
                      isLeft ? "sm:justify-end" : "sm:justify-start"
                    }`}>
                      <span className="font-bold text-[#1f2a33]">{r.name}</span>
                      <span className="text-[#C6AD8F] hidden sm:inline">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={11} aria-hidden="true" />
                        {r.city}
                      </span>
                      <span className="text-[#C6AD8F] hidden sm:inline">·</span>
                      <span className="font-semibold uppercase tracking-[0.08em] text-[#8a6f4d] text-[11px]">
                        {r.service}
                      </span>
                    </div>
                  </div>

                  {/* --- Center Dot --- */}
                  <div className="absolute left-4 sm:left-1/2 top-1.5 sm:top-2 -translate-x-1/2 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-[#C6AD8F] ring-4 ring-[#F6F4F2]" />
                  </div>

                  {/* --- Empty Space for the other side (Desktop only) --- */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- Call CTA ---------- */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center text-center">
          <h2 className="gf-display text-2xl leading-tight text-[#1f2a33] sm:text-3xl">
            Ready to become our next <span className="text-[#C6AD8F]">5-star review?</span>
          </h2>
          <p className="mt-2 text-[14px] text-[#425664] max-w-md mx-auto">
            Flat-rate quote, licensed technician, and quality service. {/* Warranty hataya */}
          </p>
          
          {/* Call Button Replaced */}
          <a
            href={PHONE_TEL}
            className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#425664] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone size={18} className="text-[#C6AD8F]" aria-hidden="true" />
            Call {PHONE_DISPLAY}
            <ArrowRight 
              size={18} 
              className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
              aria-hidden="true" 
            />
          </a>
        </div>
        
      </div>
    </section>
  );
}