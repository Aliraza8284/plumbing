
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Phone,
  Award,
  MapPin,
} from "lucide-react";

const PHONE_DISPLAY = "(844) 212-9186";
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
  "GlobalFixs aims to make plumbing, sewer, and HVAC service information easier to find for homeowners.",
  "Our website helps visitors explore common home service needs and learn about available service options.",
  "From drain cleaning and leak detection to heating and cooling, we cover a range of home maintenance topics.",
  "Explore our service pages to learn more and contact us for additional information.",
];

const VALUES = [
  {
    n: "01",
    t: "Honest & Transparent",
    d: "Clear information helps customers understand service options and make informed decisions.",
  },
  {
    n: "02",
    t: "Reliable & Prompt",
    d: "We aim to make it easier for visitors to find relevant home service information.",
  },
  {
    n: "03",
    t: "Built to Last",
    d: "Learn about practical plumbing maintenance, repairs, and replacement options.",
  },
  {
    n: "04",
    t: "Community Focused",
    d: "We focus on useful information for Pasadena and surrounding communities.",
  },
];

const MILESTONES = [
  ["Our focus", "Plumbing information and service options"],
  ["Our services", "Plumbing, sewer, and HVAC topics"],
  ["Our goal", "Help visitors understand home service options"],
];

const TEAM = [
  {
    name: "Customer Support",
    role: "Service Information",
    bio: "Contact us for information about the services described on this website.",
  },
  {
    name: "Plumbing Services",
    role: "Home Maintenance",
    bio: "Explore information about drain cleaning, leak detection, repairs, and maintenance.",
  },
  {
    name: "HVAC Services",
    role: "Heating & Cooling",
    bio: "Learn about common heating and cooling services and system options.",
  },
];

const CERTS = [
  "Review contractor credentials before hiring a service provider",
  "Confirm applicable licences for your location",
  "Ask about insurance and service warranties",
  "Request pricing details before authorizing work",
];

const AREAS = [
  "Pasadena",
  "Altadena",
  "South Pasadena",
  "San Marino",
  "Arcadia",
  "Monrovia",
  "Glendale",
  "Burbank",
  "La Cañada",
  "Sierra Madre",
  "Temple City",
  "Alhambra",
];

const PROMISES = [
  "Helpful information about common home service needs",
  "Guidance for comparing available service options",
  "Information about plumbing repairs and maintenance",
  "Easy access to contact information",
];

function Photo({ src, alt, eager = false, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          About GlobalFixs | Plumbing Services in Pasadena
        </title>

        <meta
          name="description"
          content="Learn about GlobalFixs and explore plumbing, sewer, and HVAC service information for Pasadena and surrounding communities."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.globalfixs.com/about"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://www.globalfixs.com/about"
        />

        <meta
          property="og:title"
          content="About GlobalFixs | Plumbing Services"
        />

        <meta
          property="og:description"
          content="Explore plumbing, sewer, and HVAC service information from GlobalFixs."
        />

        <meta
          property="og:image"
          content="https://www.globalfixs.com/logo.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="About GlobalFixs"
        />

        <meta
          name="twitter:description"
          content="Explore plumbing, sewer, and HVAC service information."
        />

        <meta
          name="twitter:image"
          content="https://www.globalfixs.com/logo.png"
        />
      </Helmet>

      <main className="gf-page bg-[#F6F4F2] text-[#1f2a33]">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

          .gf-page {
            font-family: 'Nunito Sans', system-ui, sans-serif;
          }

          .gf-page .gf-display {
            font-family: 'Young Serif', Georgia, serif;
            font-weight: 400;
            letter-spacing: -0.01em;
          }

          @media (prefers-reduced-motion: reduce) {
            .gf-page *,
            .gf-page *::before {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>

        {/* HERO */}
        <section className="pb-10 pt-16 sm:pb-14 sm:pt-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6AD8F]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                About Us
              </p>
            </div>

            <h1 className="gf-display max-w-[15ch] text-[52px] leading-[0.98] sm:text-[80px] lg:text-[104px]">
              Home service information for Pasadena.
            </h1>

            <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <p className="max-w-[52ch] text-[16px] leading-relaxed text-[#425664]">
                Explore plumbing, sewer, and HVAC information to
                better understand common home maintenance needs
                and available service options.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#425664] px-8 py-3.5 text-[15px] font-bold text-white shadow-md transition-colors hover:bg-[#364753]"
                >
                  <Phone size={18} />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-0 sm:px-8">
            <div className="aspect-[16/9] overflow-hidden bg-[#C6AD8F] sm:aspect-[21/9]">
              <Photo
                src={IMG.hero}
                alt="Plumbing equipment and home service work"
                eager
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-t border-[#1f2a33]/15 py-12">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid grid-cols-2 divide-y divide-[#1f2a33]/10 md:grid-cols-4 md:divide-x md:divide-y-0 md:divide-[#1f2a33]/10">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="py-6 md:px-6 md:py-0 first:md:pl-0 last:md:pr-0"
                >
                  <p className="gf-display text-[36px] leading-none text-[#1f2a33] sm:text-[48px]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.15em] text-[#8a6f4d]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                  01 — Our story
                </p>
                <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                  About GlobalFixs
                </h2>
              </div>

              <div className="max-w-[60ch] space-y-5">
                {STORY.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15.5px] leading-relaxed text-[#425664]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                Mission
              </p>
              <h2 className="gf-display mt-3 text-[28px] leading-[1.1] sm:text-[36px]">
                Make home service information easier to understand.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
                Our goal is to help visitors explore service topics,
                understand common problems, and find useful next steps.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                Vision
              </p>
              <h2 className="gf-display mt-3 text-[28px] leading-[1.1] sm:text-[36px]">
                Helpful information for every home.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
                We want visitors to find clear, useful information
                about plumbing, sewer, and HVAC service options.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                02 — Values
              </p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                What matters to us
              </h2>
            </div>

            <div className="divide-y divide-[#1f2a33]/10">
              {VALUES.map((v) => (
                <div key={v.t} className="flex items-start gap-6 py-6">
                  <span className="pt-1.5 text-[13px] font-bold text-[#C6AD8F]">
                    {v.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-[20px] font-extrabold leading-tight text-[#1f2a33]">
                      {v.t}
                    </h3>
                    <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">
                      {v.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                03 — Our focus
              </p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                What we cover
              </h2>
            </div>

            <div className="divide-y divide-[#1f2a33]/10">
              {MILESTONES.map(([year, text]) => (
                <div key={year} className="flex items-baseline gap-6 py-5">
                  <span className="w-24 shrink-0 text-[13px] font-bold text-[#C6AD8F]">
                    {year}
                  </span>
                  <span className="text-[16px] font-semibold text-[#1f2a33]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE TOPICS */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                04 — Information
              </p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                Explore home services
              </h2>
            </div>

            <div className="divide-y divide-[#1f2a33]/10">
              {TEAM.map((m) => (
                <div key={m.name} className="py-6">
                  <h3 className="text-[19px] font-extrabold text-[#1f2a33]">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#8a6f4d]">
                    {m.role}
                  </p>
                  <p className="mt-2 max-w-[52ch] text-[14.5px] leading-relaxed text-[#425664]">
                    {m.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMER CHECKLIST */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                05 — Before you hire
              </p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                Credentials to check
              </h2>
            </div>

            <ul className="divide-y divide-[#1f2a33]/10">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 shrink-0 text-[#C6AD8F]">
                    <Award size={18} />
                  </span>
                  <span className="text-[15px] font-semibold text-[#1f2a33]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                06 — Areas
              </p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                Pasadena and nearby areas
              </h2>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">
                Explore the communities listed on our website.
                Confirm actual service availability before booking.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {AREAS.map((a) => (
                <div
                  key={a}
                  className="flex items-center gap-2 text-[14.5px] font-semibold text-[#1f2a33]"
                >
                  <MapPin
                    size={14}
                    className="shrink-0 text-[#C6AD8F]"
                    aria-hidden="true"
                  />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMISES */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.5fr_1.5fr] lg:gap-20 sm:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a6f4d]">
                07 — Helpful information
              </p>
              <h2 className="gf-display mt-3 text-[32px] leading-[1.05] sm:text-[44px]">
                What you can expect
              </h2>
            </div>

            <ul className="divide-y divide-[#1f2a33]/10">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 shrink-0 text-[#C6AD8F]">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </span>
                  <span className="text-[16px] font-semibold text-[#1f2a33]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[#1f2a33]/15 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-end gap-10 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 sm:px-8">
            <h2 className="gf-display max-w-[18ch] text-[36px] leading-[1.02] sm:text-[56px]">
              Have a question about home services?
            </h2>

            <div className="lg:text-right">
              <p className="max-w-[44ch] text-[15px] leading-relaxed text-[#425664] lg:ml-auto">
                Contact us for further information.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#425664] px-8 py-3.5 text-[15px] font-bold text-white shadow-md transition-colors hover:bg-[#364753]"
                >
                  <Phone size={18} />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
