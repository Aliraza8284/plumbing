// src/components/SewerInspectionServices.jsx
import { useState } from "react";
import {
  Search,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Camera,
  FileText,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const benefits = [
  {
    icon: Camera,
    title: "HD Camera Technology",
    desc: "High-definition cameras travel deep into your lines to show exactly what's happening.",
  },
  {
    icon: FileText,
    title: "Written Report",
    desc: "You get a detailed report of what we found, with images and recommendations.",
  },
  {
    icon: Search,
    title: "No Guesswork",
    desc: "We pinpoint the exact location of clogs, cracks, or roots before any digging.",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Purchase Inspections",
    desc: "Buying a home? Know the true condition of the sewer line before you sign.",
  },
];

const process = [
  {
    step: "01",
    title: "Locate the Cleanout",
    desc: "We find the access point to your sewer line (usually near the house or yard).",
  },
  {
    step: "02",
    title: "Camera Goes In",
    desc: "A flexible cable with a high-def camera travels through the pipe.",
  },
  {
    step: "03",
    title: "We Review Together",
    desc: "You watch the live feed with us and we explain any issues we see.",
  },
  {
    step: "04",
    title: "Get the Report",
    desc: "You receive a full written report with footage and a clear plan.",
  },
];

const faqs = [
  {
    q: "Why do I need a sewer inspection?",
    a: "An inspection is the only way to know the true condition of your underground pipes. It's essential before buying a home, after a major clog, or if you suspect tree roots.",
  },
  {
    q: "Do you have to dig up my yard?",
    a: "No. The camera goes in through the existing cleanout access point. No digging is required just for an inspection.",
  },
  {
    q: "What if you find a problem?",
    a: "We'll show you exactly what we see and explain the options. We can handle repairs like spot fixes, trenchless lining, or full replacement if needed.",
  },
  {
    q: "How long does it take?",
    a: "Most residential inspections take 45 to 60 minutes, depending on the length of the line and any blockages.",
  },
];

export default function SewerInspectionServices() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#425664] text-white">
        
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F6F4F2 1px, transparent 1px), linear-gradient(to bottom, #F6F4F2 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                Sewer Services
              </p>
            </div>

            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[46px] lg:text-[54px] mb-6">
              See inside your<br />
              <span className="text-[#C6AD8F]">sewer line.</span>
            </h1>

            <p className="max-w-lg text-[15.5px] leading-[1.75] text-white/80 mb-8">
              High-definition camera inspections to pinpoint blockages, 
              cracks, and root intrusion — without any guesswork or digging.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* Call Button Replaced */}
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#C6AD8F] px-6 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg group"
              >
                <Phone size={18} />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right side Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85"
                alt="Sewer camera inspection equipment"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -left-3 sm:-left-5 flex items-center gap-3 rounded-xl border border-[#1f2a33]/10 bg-white p-4 shadow-lg text-[#1f2a33]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#C6AD8F]/20 text-[#8a6f4d]">
                <Camera size={20} />
              </span>
              <div>
                <p className="text-[14px] font-extrabold leading-tight">HD Camera</p>
                <p className="text-[11px] font-semibold text-[#425664]">Clear footage & report</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="bg-white border-b border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Why inspect?</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight text-[#1f2a33]">
              Know exactly what's<br />
              <span className="text-[#425664]">underground.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-6 transition-all duration-300 hover:bg-white hover:border-[#425664]/30 hover:shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664]">
                  <Icon size={20} />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#1f2a33] mb-2">{title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#425664]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">The Process</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight text-[#1f2a33]">
              How an inspection<br />
              <span className="text-[#425664]">works.</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <span className="gf-display text-[28px] text-[#C6AD8F]">
                  {item.step}
                </span>
                <div className="mt-2 h-px w-10 bg-[#C6AD8F]/50" />
                <h3 className="mt-4 text-[16px] font-extrabold text-[#1f2a33]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#425664]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="border-y border-[#1f2a33]/10 bg-white px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">FAQs</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1] text-[#1f2a33]">
              Inspection<br />
              <span className="text-[#425664]">questions.</span>
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-[#425664]">
              Get the facts about how camera inspections work, what we look for, and what happens next.
            </p>
          </div>

          <div className="divide-y divide-[#1f2a33]/10 border-t border-[#1f2a33]/10">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 text-left group"
                >
                  <span className="text-[15.5px] font-bold text-[#1f2a33] group-hover:text-[#8a6f4d] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#C6AD8F] transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-relaxed text-[#425664]">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 py-16 sm:px-10 sm:py-24 max-w-5xl mx-auto text-center">
        <div className="rounded-2xl border border-[#1f2a33]/12 bg-white px-6 py-14 sm:px-12 shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6AD8F]/15 text-[#8a6f4d]">
            <AlertTriangle size={24} />
          </div>
          <h2 className="gf-display text-[32px] sm:text-[38px] text-[#1f2a33]">
            Not sure what's wrong with your line?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#425664]">
            Don't guess. Call us to inspect the line with a camera and give you a clear, honest report before any work begins.
          </p>
          {/* Big Call Button Replaced */}
          <a
            href={PHONE_TEL}
            className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#425664] px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg group"
          >
            <Phone size={18} className="text-[#C6AD8F]" />
            Call {PHONE_DISPLAY}
            <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
          </a>
        </div>
      </section>
    </main>
  );
}