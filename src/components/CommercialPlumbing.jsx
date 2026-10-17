// pages/CommercialPlumbing.jsx
import {
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  UtensilsCrossed,
  Building2,
  Store,
  Warehouse,
  Clock,
  ShieldCheck,
  CalendarClock,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const HERO_IMG = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=85";

/* Background image for the Sectors Section */
const SECTORS_BG_IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85";

const SECTORS = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    text: "Kitchens can't stop mid-service. We keep lines, drains and hot water running.",
    items: ["Grease traps and floor drains", "Dish and prep-sink lines", "Water heater service"],
  },
  {
    icon: Building2,
    title: "Offices",
    text: "Quiet, scheduled work around your team, with clear notice before any shutoff.",
    items: ["Restroom fixtures and flush valves", "Backflow testing", "Leak checks across floors"],
  },
  {
    icon: Store,
    title: "Retail spaces",
    text: "Customer-facing restrooms and back-of-house plumbing, handled without closing your doors.",
    items: ["Restroom repairs and upgrades", "Floor drains", "Tenant fit-out plumbing"],
  },
  {
    icon: Warehouse,
    title: "Multi-unit properties",
    text: "One contact for every tenant call, shared line and scheduled inspection.",
    items: ["Shared riser and main-line repair", "Tenant service calls", "Maintenance schedules"],
  },
];

const SERVICES = [
  "Preventive maintenance plans",
  "Emergency repair",
  "Grease trap cleaning",
  "Backflow testing and repair",
  "Water heater and boiler service",
  "Drain and sewer cleaning",
  "Leak detection",
  "New construction and fit-out",
];

const FACTS = [
  { icon: Clock, text: "Emergency line open 24 hours" },
  { icon: ShieldCheck, text: "Licensed, insured technicians" },
  { icon: CalendarClock, text: "After-hours scheduling available" },
];

const bgStyle = (from, to) => ({
  backgroundImage: `linear-gradient(100deg, ${from} 0%, ${to} 100%), url(${HERO_IMG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export default function CommercialPlumbing() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }

        /* Slow zoom on hero photo */
        .gf-page .gf-hero-bg { animation: gfzoom 14s ease-out both; }
        @keyframes gfzoom { from { transform: scale(1.08); } to { transform: scale(1); } }

        /* Service row hover effect */
        .gf-row { position: relative; isolation: isolate; overflow: hidden; }
        .gf-row::before {
          content: ""; position: absolute; inset: 0; z-index: -1; background: #C6AD8F;
          transform: translateX(-101%); transition: transform .45s cubic-bezier(.2,.7,.2,1);
        }
        .gf-row:hover::before, .gf-row:focus-visible::before { transform: translateX(0); }

        @media (prefers-reduced-motion: reduce) {
          .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ================= Hero ================= */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-[#1f2a33] text-white">
        <div className="gf-hero-bg absolute inset-0" style={bgStyle("rgba(31,42,51,0.95)", "rgba(31,42,51,0.45)")} aria-hidden="true" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="gf-display text-[44px] leading-[1.05] sm:text-[64px] lg:text-[76px]">
              Plumbing that keeps your business open.
            </h1>
            <p className="mt-6 max-w-[48ch] text-[16.5px] leading-[1.7] text-white/80 sm:text-[18px]">
              Business-grade plumbing for restaurants, offices, and retail spaces.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg"
              >
                Request a site visit
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={CONTACT}
                className="group inline-flex items-center justify-center gap-2.5 border border-white/40 px-7 py-3.5 text-[14px] font-bold text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg"
              >
                <MessageSquare size={16} className="transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Glass strip */}
        <div className="relative border-t border-white/15 bg-[#1f2a33]/55 backdrop-blur-md">
          <ul className="mx-auto grid max-w-7xl divide-white/15 px-5 sm:grid-cols-3 sm:divide-x sm:px-8">
            {FACTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 py-4 text-[13.5px] font-semibold sm:px-6 sm:first:pl-0">
                <Icon size={18} className="shrink-0 text-[#C6AD8F]" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= Sectors (With Full Background Image) ================= */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        
        {/* Section Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={SECTORS_BG_IMG}
            alt="Commercial building background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1f2a33]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="gf-display max-w-[20ch] text-[34px] leading-[1.05] text-white sm:text-[44px]">
            Built around how your building works
          </h2>

          <div className="mt-10 flex flex-col gap-3 lg:h-[460px] lg:flex-row">
            {SECTORS.map(({ icon: Icon, title, text, items }, i) => (
              <article
                key={title}
                tabIndex={0}
                className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden p-6 outline-none transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] focus-visible:ring-2 focus-visible:ring-[#C6AD8F] lg:flex-1 lg:hover:flex-[2.6] lg:focus-visible:flex-[2.6] rounded-xl border border-white/20 text-white ${
                  i % 2 === 0 ? "bg-white/10 backdrop-blur-md" : "bg-[#1f2a33]/60 backdrop-blur-md"
                }`}
              >
                <Icon
                  size={28}
                  strokeWidth={2}
                  className="text-[#C6AD8F] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 relative z-10"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <h3 className="gf-display text-[24px] leading-none">{title}</h3>
                  <p className="mt-3 max-w-[34ch] text-[13.5px] leading-relaxed text-white/90">{text}</p>
                  <ul className="mt-4 space-y-1.5 text-[13px] font-semibold text-[#C6AD8F] transition-all duration-500 lg:max-h-0 lg:translate-y-3 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-40 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                    {items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="h-px w-4 bg-[#C6AD8F]" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Services list ================= */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#1f2a33]/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="gf-display text-[34px] leading-[1.05] sm:text-[42px]">What we handle</h2>
            <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-[#425664]">
              From a weekly maintenance visit to a full tenant fit-out, one team covers the whole building.
            </p>
          </div>

          <ul className="border-t border-[#1f2a33]/10">
            {SERVICES.map((s) => (
              <li key={s} className="border-b border-[#1f2a33]/10">
                <a
                  href={CONTACT}
                  className="gf-row group flex items-center justify-between gap-4 px-2 py-5 text-[17px] font-bold outline-none sm:text-[19px]"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-3 group-focus-visible:translate-x-3">{s}</span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#425664] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1f2a33]"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="relative overflow-hidden bg-[#1f2a33] py-20 text-white sm:py-28">
        <div className="absolute inset-0" style={bgStyle("rgba(66,86,100,0.94)", "rgba(31,42,51,0.82)")} aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="gf-display max-w-[18ch] text-[36px] leading-[1.05] sm:text-[48px]">
              Tell us about your building.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-white/80">
              We'll visit, look over your plumbing and send a written plan with pricing. If something is leaking right now, contact us immediately.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] transition duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg"
            >
              Request a site visit
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={CONTACT}
              className="inline-flex items-center justify-center gap-2.5 border border-white/40 px-7 py-3.5 text-[14px] font-bold transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg"
            >
              <MessageSquare size={16} aria-hidden="true" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}