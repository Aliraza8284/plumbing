// src/components/About.jsx
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, MessageSquare, Award, MapPin, ShieldCheck } from "lucide-react";

const CONTACT = "/contact";
const PHONE_DISPLAY = "+1 (844) 212-91-86";
const PHONE_TEL = "tel:+18442129186";

const IMG = {
  hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80",
};

const STATS = [
  { value: "20+", label: "Years in Business" },
  { value: "50K+", label: "Jobs Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "40+", label: "Expert Technicians" },
];

const STORY = [
  "GlobelFixs was founded in 2002 with a simple goal: provide honest, reliable plumbing services to our local community. What started as a two-person shop has grown into one of Pasadena's most trusted names in plumbing, sewer, and HVAC.",
  "In 2008, we launched our website to make it easier for homeowners and businesses to connect with us. In 2010, we expanded into HVAC services — recognizing that our customers needed one team they could trust for both heating and cooling.",
  "By 2018, we had added full sewer and trenchless capabilities, allowing us to handle everything from a dripping faucet to a collapsed sewer line without sending you to another contractor.",
  "Today, we're a full-service plumbing, sewer, and HVAC company. From emergency repairs to complete system installations, we treat every home and business like it's our own.",
];

const VALUES = [
  { n: "01", t: "Honest & Transparent", d: "We diagnose the problem clearly, explain your options, and give you a flat-rate price before starting. No surprises on the bill." },
  { n: "02", t: "Reliable & Prompt", d: "We respect your time. Our technicians arrive in the promised window, fully equipped to handle the job." },
  { n: "03", t: "Built to Last", d: "We don't cut corners. Our repairs and installations are done right the first time, using quality materials." },
  { n: "04", t: "Community Focused", d: "Family-owned and locally operated. We treat our customers and their homes with the utmost respect." },
];

const MILESTONES = [
  ["2002", "Founded as a two-person plumbing shop in Pasadena"],
  ["2008", "Launched our website to serve more customers"],
  ["2010", "Expanded into HVAC services"],
  ["2018", "Added sewer and trenchless capabilities"],
  ["2024", "Serving 50,000+ homes and businesses across the region"],
];

const TEAM = [
  { name: "Mike Rodriguez", role: "Founder & Master Plumber", bio: "Started the company in 2002. Still goes on service calls when the team needs him." },
  { name: "Sarah Chen", role: "Operations Manager", bio: "Keeps the schedule running and makes sure every job is done right." },
  { name: "David Park", role: "Lead HVAC Technician", bio: "Certified on all major systems. Handles everything from heat pumps to furnaces." },
  { name: "Jessica Torres", role: "Customer Service Lead", bio: "The first voice you hear when you call. Knows the answer or finds it fast." },
];

const CERTS = [
  "Licensed Plumbing Contractor (CA License #123456)",
  "Licensed HVAC Contractor (CA License #654321)",
  "EPA Section 608 Certified",
  "Backflow Prevention Certified",
  "Fully Bonded & Insured",
];

const AREAS = [
  "Pasadena", "Altadena", "South Pasadena", "San Marino",
  "Arcadia", "Monrovia", "Glendale", "Burbank",
  "La Cañada", "Sierra Madre", "Temple City", "Alhambra",
];

const PROMISES = [
  "Upfront, flat-rate pricing before any work begins",
  "Respectful, tidy service in your home or business",
  "Practical, code-compliant solutions built to last",
  "Clean-up when we're done — every time",
];

function Photo({ src, alt, eager = false, className = "" }) {
  return (
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={`h-full w-full object-cover ${className}`} />
  );
}

export default function About() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">About Us</p>
          </div>

          <h1 className="gf-display text-[52px] leading-[0.98] sm:text-[80px] lg:text-[104px] max-w-[15ch]">
            Serving Pasadena since 2002.
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-end">
            <p className="max-w-[52ch] text-[16px] leading-relaxed text-[#425664]">
              Two decades of honest plumbing, sewer, and HVAC work. Local team, clear pricing, and a promise to treat your home like our own.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-[#364753] transition-colors">
                <Phone size={16} /> {PHONE_DISPLAY}
              </a>
              <Link to={CONTACT} className="inline-flex items-center justify-center gap-2 border border-[#1f2a33]/25 px-6 py-3.5 text-[14px] font-bold text-[#425664] hover:border-[#1f2a33] transition-colors">
                <MessageSquare size={16} /> Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FULL-BLEED IMAGE ---------- */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-0 sm:px-8">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#C6AD8F]">
            <Photo src={IMG.hero} alt="Our plumbing team at work" eager />
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-[#1f2a33]/10 md:divide-x md:divide-[#1f2a33]/10">
            {STATS.map((s) => (
              <div key={s.label} className="py-6 md:py-0 md:px-6 first:md:pl-0 last:md:pr-0">
                <p className="gf-display text-[36px] sm:text-[48px] leading-none text-[#1f2a33]">{s.value}</p>
                <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#8a6f4d]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">01 — Our story</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">How we got here</h2>
            </div>
            <div className="space-y-5 max-w-[60ch]">
              {STORY.map((p, i) => (
                <p key={i} className="text-[15.5px] leading-relaxed text-[#425664]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MISSION & VISION ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">Mission</p>
              <h2 className="gf-display mt-3 text-[28px] leading-[1.1] sm:text-[36px]">
                Make home services simple, honest, and done right.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
                We show up on time, explain what's wrong, give you a clear price, and fix it properly. No pressure, no upsell, no mess left behind.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">Vision</p>
              <h2 className="gf-display mt-3 text-[28px] leading-[1.1] sm:text-[36px]">
                The team your neighbors recommend.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
                We want to be the first call when something breaks — and the name you pass along to a friend. That only happens if we earn it, one job at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">02 — Values</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">What drives us</h2>
            </div>
            <div className="divide-y divide-[#1f2a33]/10">
              {VALUES.map((v) => (
                <div key={v.t} className="flex items-start gap-6 py-6">
                  <span className="text-[13px] font-bold text-[#C6AD8F] tabular-nums pt-1.5">{v.n}</span>
                  <div className="flex-1">
                    <h3 className="text-[20px] font-extrabold leading-tight text-[#1f2a33]">{v.t}</h3>
                    <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TIMELINE ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">03 — Timeline</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">Milestones</h2>
            </div>
            <div className="divide-y divide-[#1f2a33]/10">
              {MILESTONES.map(([year, text]) => (
                <div key={year} className="flex items-baseline gap-6 py-5">
                  <span className="text-[13px] font-bold text-[#C6AD8F] tabular-nums w-14 shrink-0">{year}</span>
                  <span className="text-[16px] font-semibold text-[#1f2a33]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">04 — Team</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">The people behind the work</h2>
            </div>
            <div className="divide-y divide-[#1f2a33]/10">
              {TEAM.map((m) => (
                <div key={m.name} className="py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[19px] font-extrabold text-[#1f2a33]">{m.name}</h3>
                    <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#8a6f4d] text-right">{m.role}</span>
                  </div>
                  <p className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CERTIFICATIONS ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">05 — Credentials</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">Licensed & certified</h2>
            </div>
            <ul className="divide-y divide-[#1f2a33]/10">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 shrink-0 text-[#C6AD8F]"><Award size={18} strokeWidth={2} /></span>
                  <span className="text-[15px] font-semibold text-[#1f2a33]">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- SERVICE AREAS ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">06 — Areas</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">Where we work</h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">
                Proudly serving Pasadena and the surrounding communities.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
              {AREAS.map((a) => (
                <div key={a} className="flex items-center gap-2 text-[14.5px] font-semibold text-[#1f2a33]">
                  <MapPin size={14} className="text-[#C6AD8F] shrink-0" aria-hidden="true" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROMISES ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">07 — Our promise</p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">What you can expect</h2>
            </div>
            <ul className="divide-y divide-[#1f2a33]/10">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 shrink-0 text-[#C6AD8F]"><CheckCircle2 size={18} strokeWidth={2.5} /></span>
                  <span className="text-[16px] font-semibold text-[#1f2a33]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-end">
            <h2 className="gf-display text-[36px] leading-[1.02] sm:text-[56px] max-w-[18ch]">
              Have a job in mind?
            </h2>
            <div className="lg:text-right">
              <p className="max-w-[44ch] text-[15px] leading-relaxed text-[#425664] lg:ml-auto">
                Tell us about it. We'll tell you what we'd do.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-[#364753] transition-colors">
                  <Phone size={16} /> {PHONE_DISPLAY}
                </a>
                <Link to={CONTACT} className="inline-flex items-center justify-center gap-2 border border-[#1f2a33]/25 px-6 py-3.5 text-[14px] font-bold text-[#425664] hover:border-[#1f2a33] transition-colors">
                  <MessageSquare size={16} /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}