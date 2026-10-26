// src/components/Coupons.jsx
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  ThumbsUp,
  BadgeCheck,
  Search,
  Droplets,
  Flame,
  Camera,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    text: "We connect you with professionals who stand behind their work and use quality materials.",
  },
  {
    icon: Clock,
    title: "On-Time Arrival",
    text: "We respect your schedule. Our local technicians arrive in the promised window, ready to work.",
  },
  {
    icon: BadgeCheck,
    title: "Upfront Pricing",
    text: "You approve the price before we start. No hidden fees, no surprises on the final bill.",
  },
  {
    icon: ThumbsUp,
    title: "Clean Job Sites",
    text: "Professionals lay down floor protection and clean up after themselves. We leave your home better than we found it.",
  },
];

const POPULAR_SERVICES = [
  {
    icon: Search,
    title: "Leak Detection",
    desc: "Pinpoint hidden leaks without unnecessary demolition.",
    link: "/plumbing/leak-detection",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    desc: "Clear stubborn clogs and restore full flow to your drains.",
    link: "/plumbing/drain-cleaning",
  },
  {
    icon: Flame,
    title: "Water Heaters",
    desc: "Repair, maintenance, or full installation of tank and tankless units.",
    link: "/plumbing/water-heaters",
  },
  {
    icon: Camera,
    title: "Sewer Inspection",
    desc: "HD camera inspections to see exactly what's happening underground.",
    link: "/plumbing/sewer-inspection",
  },
];

export default function Coupons() {
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

      {/* ================= Header + How to Redeem ================= */}
      <section className="relative overflow-hidden border-b border-[#1f2a33]/10 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Our Promises
              </p>
            </div>
            
            <h1 className="gf-display text-[36px] leading-[1.05] sm:text-[48px] lg:text-[54px]">
              More than a service.<br/>
              <span className="text-[#425664]">A commitment to you.</span>
            </h1>
            
            <p className="mt-5 max-w-[44ch] text-[15.5px] leading-relaxed text-[#425664]">
              We don't just connect you with pros. We help you find flat-rate pricing, 
              respectful technicians, and clear communication.
            </p>
            
            {/* Call Button Replaced */}
            <a
              href={PHONE_TEL}
              className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#425664] px-6 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg group"
            >
              <Phone size={18} className="text-[#C6AD8F]" />
              Call {PHONE_DISPLAY}
              <ArrowRight 
                size={20} 
                className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
              />
            </a>
          </div>

          <div className="rounded-xl border border-[#1f2a33]/10 bg-[#F6F4F2] p-6 sm:p-8">
            <h2 className="gf-display text-[22px] text-[#1f2a33] pb-4 border-b border-[#1f2a33]/10">
              How we work
            </h2>
            
            <ol className="mt-4 space-y-0">
              {[
                ["Inspect first", "We help you find pros who diagnose the problem before quoting any work."],
                ["Explain clearly", "The technicians show you the issue and explain your options."],
                ["Approve the price", "You agree to the flat rate before they start."],
                ["Fix it right", "The work is completed, cleaned up, and backed by professional standards."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 border-b border-[#1f2a33]/10 py-4 last:border-0 last:pb-0">
                  <span className="gf-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6AD8F]/20 text-[14px] text-[#8a6f4d]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold leading-tight text-[#1f2a33]">{t}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[#425664]">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= Guarantees ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Our Guarantees</span>
            </div>
            <h2 className="gf-display text-[28px] sm:text-[36px] text-[#1f2a33]">Why homeowners choose us</h2>
            <p className="mt-2 text-[14.5px] text-[#425664]">The same standards on every job, big or small.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GUARANTEES.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group rounded-xl border border-[#1f2a33]/12 bg-white p-6 transition-all duration-300 hover:border-[#425664]/30 hover:shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[#1f2a33] mb-2">{item.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[#425664]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= Popular Services ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Popular Services</span>
            </div>
            <h2 className="gf-display text-[28px] sm:text-[36px] text-[#1f2a33]">What we can help with</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {POPULAR_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  to={s.link}
                  className="group flex items-start gap-5 rounded-xl border border-[#1f2a33]/10 bg-[#F6F4F2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#425664]/30 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-[#425664] border border-[#1f2a33]/10">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-extrabold text-[#1f2a33] transition-colors group-hover:text-[#8a6f4d]">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#425664]">
                      {s.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-bold text-[#8a6f4d]">
                      Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#1f2a33]/10 bg-[#425664] p-8 text-white sm:p-12 md:flex-row md:items-center">
            <div>
              <h2 className="gf-display text-[26px] leading-[1.1] sm:text-[34px] text-white">
                Ready to book?
              </h2>
              <p className="mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-white/80">
                Call us today. We'll help you find a pro who will diagnose the problem, explain your options, and give you a flat-rate quote before any work begins.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Call Button Replaced */}
              <a 
                href={PHONE_TEL} 
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg"
              >
                <Phone size={18} />
                Call {PHONE_DISPLAY}
                <ArrowRight 
                  size={18} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}