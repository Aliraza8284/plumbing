// src/components/Services.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Droplets,
  Waves,
  Fan,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Wrench,
  Search,
  Flame,
  Gauge,
  MapPin,
  Clock,
  BadgeCheck,
  MessageSquare,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE = "+1 (844) 212-91-86";
const TEL = "tel:+18442129186";

const CATEGORIES = [
  { id: "all", name: "All Services" },
  { id: "plumbing", name: "Plumbing" },
  { id: "sewer", name: "Sewer" },
  { id: "hvac", name: "HVAC" },
  { id: "emergency", name: "Emergency" },
];

const SERVICES = [
  {
    title: "Leak Detection",
    category: "plumbing",
    Icon: Search,
    blurb:
      "Pinpoint hidden leaks with acoustic and thermal tools — no guesswork, no unnecessary demolition.",
    tags: ["Non-invasive", "Same-day"],
    href: "/plumbing/leak-detection",
  },
  {
    title: "Repair & Replacement",
    category: "plumbing",
    Icon: Wrench,
    blurb:
      "Cracked pipes, failing fittings, corroded lines — repaired or replaced with minimal digging.",
    tags: ["Spot fixes", "Full replacement"],
    href: "/sewers/repair-and-replacement",
  },
  {
    title: "Piping & Repiping",
    category: "plumbing",
    Icon: Droplets,
    blurb:
      "Whole-home repiping in copper or PEX, sized for your fixtures and future additions.",
    tags: ["Copper", "PEX"],
    href: "/plumbing/piping-repiping",
  },
  {
    title: "Gas Plumbing",
    category: "plumbing",
    Icon: Flame,
    blurb:
      "Gas line installs, leak tests and appliance hookups — permitted and inspected.",
    tags: ["Certified", "Permitted"],
    href: "/plumbing/gas-plumbing",
  },
  {
    title: "Water Heaters",
    category: "plumbing",
    Icon: Gauge,
    blurb:
      "Tank and tankless install, repair and flush. Right-sized for your household.",
    tags: ["Tankless", "Same-day"],
    href: "/plumbing/water-heaters",
  },
  {
    title: "Sewer Repair & Replacement",
    category: "sewer",
    Icon: Waves,
    blurb:
      "Trenchless and conventional sewer line repair, from single joints to full runs.",
    tags: ["Trenchless", "Full line"],
    href: "/plumbing/sewer-repair-and-replacement",
  },
  {
    title: "Sewer Inspection",
    category: "sewer",
    Icon: Search,
    blurb:
      "HD camera inspection with a written report — know exactly what's underground.",
    tags: ["Camera", "Report"],
    href: "/sewers/inspection",
  },
  {
    title: "Hydro Jetting",
    category: "sewer",
    Icon: Waves,
    blurb:
      "High-pressure jetting clears grease, roots and scale — restores full pipe diameter.",
    tags: ["Roots", "Grease"],
    href: "/sewers/hydro-jetting",
  },
  {
    title: "Trenchless Sewers",
    category: "sewer",
    Icon: Wrench,
    blurb:
      "Pipe bursting and lining that replaces or rehabilitates lines with minimal digging.",
    tags: ["No-dig", "Fast"],
    href: "/sewers/trenchless-technology",
  },
  {
    title: "Drain Cleaning",
    category: "sewer",
    Icon: Droplets,
    blurb:
      "Kitchen, bath and main-line clogs cleared with the right tool for the blockage.",
    tags: ["Same-day", "Main line"],
    href: "/sewers/cleaning",
  },
  {
    title: "HVAC Repair",
    category: "hvac",
    Icon: Fan,
    blurb:
      "Diagnostics and repair for AC, furnace and heat pumps. Honest quotes, no upsell.",
    tags: ["AC", "Furnace"],
    href: "/hvac/emergency-hvac",
  },
  {
    title: "Heat Pumps",
    category: "hvac",
    Icon: Fan,
    blurb:
      "High-efficiency heat pump install and service — rebates handled for you.",
    tags: ["Rebates", "Efficient"],
    href: "/hvac/heat-pumps",
  },
  {
    title: "Emergency HVAC",
    category: "emergency",
    Icon: AlertTriangle,
    blurb:
      "No heat, no AC? 24/7 emergency response with a live technician on the line.",
    tags: ["24/7", "Fast"],
    href: "/hvac/emergency-hvac",
  },
  {
    title: "Emergency Plumbing",
    category: "emergency",
    Icon: AlertTriangle,
    blurb:
      "Burst pipes, overflowing toilets, no water — we're on call around the clock.",
    tags: ["24/7", "Fast"],
    href: "/plumbing/emergency-services",
  },
  {
    title: "Earthquake Shut-Off Valves",
    category: "emergency",
    Icon: ShieldCheck,
    blurb:
      "Automatic gas shut-off valves that close the line the moment shaking is detected.",
    tags: ["Safety", "Auto"],
    href: "/plumbing/earthquake-shut-off-valves",
  },
];

const WHY = [
  {
    Icon: ShieldCheck,
    title: "Licensed & insured",
    text: "Master plumbers, bonded and insured, with a lifetime workmanship warranty on every job.",
  },
  {
    Icon: MapPin,
    title: "Local & fast",
    text: "Family-owned for three generations, with technicians stationed across the area for quick response.",
  },
  {
    Icon: Gauge,
    title: "Flat-rate pricing",
    text: "You approve the price before we start. No hourly surprises, no upselling on the job.",
  },
  {
    Icon: Clock,
    title: "24/7 emergency",
    text: "Burst pipe or no heat at 2 AM? A live technician answers and a truck rolls out.",
  },
  {
    Icon: BadgeCheck,
    title: "Workmanship warranty",
    text: "Lifetime warranty on workmanship, plus manufacturer warranties on parts we install.",
  },
  {
    Icon: Phone,
    title: "One call, done",
    text: "Plumbing, sewer and HVAC under one roof — no juggling multiple contractors.",
  },
];

export default function Services() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <div className="min-h-screen bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800&display=swap');
        .gf-services { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-services .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      <div className="gf-services">
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-[#425664]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, rgba(198,173,143,0.22) 0%, rgba(198,173,143,0) 55%), radial-gradient(90% 70% at 0% 100%, rgba(31,42,51,0.55) 0%, rgba(31,42,51,0) 60%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #F6F4F2 1px, transparent 1px), linear-gradient(to bottom, #F6F4F2 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                Our Services
              </p>
            </div>

            <h1 className="gf-display mt-4 max-w-3xl text-3xl leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              Everything your home's{" "}
              <span className="relative inline-block">
                <span className="relative z-10">water, sewer and air</span>
                <span
                  className="absolute inset-x-0 bottom-1 z-0 h-2.5 bg-[#C6AD8F]/40"
                  aria-hidden="true"
                />
              </span>{" "}
              needs.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-[15px]">
              Licensed master plumbers and HVAC technicians, flat-rate pricing, and a
              lifetime workmanship warranty on every job.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={TEL}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#C6AD8F] px-5 py-3 text-sm font-bold text-[#1f2a33] shadow-lg shadow-black/20 transition-all hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Phone size={16} aria-hidden="true" />
                Call Now
              </a>
              <a
                href="#list"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition-all hover:border-white/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Browse Services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

          </div>
        </section>

        {/* ---------- TABS + GRID ---------- */}
        <section id="list" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="gf-display text-2xl leading-tight sm:text-3xl">
                Pick a service
              </h2>
              <p className="mt-1 text-sm text-[#425664]">
                {filtered.length} service{filtered.length === 1 ? "" : "s"} shown
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Filter services by category"
            className="mb-8 flex flex-wrap gap-2"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full border px-4 py-2 text-[13px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] ${active === c.id
                    ? "border-[#425664] bg-[#425664] text-white"
                    : "border-[#1f2a33]/15 bg-white text-[#425664] hover:border-[#425664]"
                  }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(({ title, Icon, blurb, tags, href }) => (
              <Link
                key={title}
                to={href}
                className="group flex flex-col rounded-xl border border-[#1f2a33]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#425664]/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/10 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold leading-tight">{title}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-[#425664]">
                  {blurb}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#C6AD8F]/25 px-2 py-0.5 text-[11.5px] font-bold text-[#8a6f4d]"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto inline-flex items-center gap-1 text-[12.5px] font-bold text-[#425664] group-hover:text-[#1f2a33]">
                    Learn more
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="rounded-lg border border-[#1f2a33]/10 bg-white p-6 text-center text-sm text-[#425664]">
              No services in this category yet.
            </p>
          )}
        </section>

        {/* ---------- WHY US ---------- */}
        <section className="relative border-y border-[#1f2a33]/10 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              {/* LEFT */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                    Why us
                  </p>
                </div>
                <h2 className="gf-display mt-3 text-2xl leading-[1.15] sm:text-3xl lg:text-[34px]">
                  Why homeowners pick us
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#425664]">
                  We've been family-owned for three generations. The same things keep
                  bringing customers back — and it's not just the price.
                </p>
                <a
                  href={TEL}
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#425664] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
                >
                  <Phone size={16} aria-hidden="true" />
                  Talk to a technician
                </a>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-[#1f2a33]/10 bg-[#F6F4F2]">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {WHY.map(({ Icon, title, text }, i) => (
                      <div
                        key={title}
                        className={[
                          "group relative p-6 transition-colors hover:bg-white",
                          i % 2 === 0 ? "sm:border-r sm:border-[#1f2a33]/10" : "",
                          i < WHY.length - 1 ? "border-b border-[#1f2a33]/10" : "",
                          i >= WHY.length - 2 ? "sm:border-b-0" : "",
                        ].join(" ")}
                      >
                        <span
                          className="absolute right-4 top-4 text-[11px] font-bold tabular-nums text-[#425664]/30"
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#425664]/10 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                        <h3 className="text-[15px] font-bold leading-tight">{title}</h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#425664]">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}