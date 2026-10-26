// src/components/BathroomPlumbing.jsx
import React, { useState } from "react";
import {
  Bath,
  Droplets,
  Wrench,
  ShowerHead,
  Pipette,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const services = [
  {
    icon: Bath,
    title: "Bathtub Installation",
    description: "Upgrade your bathroom with professional bathtub installation, replacement, and rough-in services.",
  },
  {
    icon: Droplets,
    title: "Faucet & Sink Repair",
    description: "Fix dripping faucets, leaking sinks, and worn-out bathroom fixtures fast and cleanly.",
  },
  {
    icon: ShowerHead,
    title: "Shower Plumbing",
    description: "Get help with shower valves, low water pressure, fixture upgrades, and drain repairs.",
  },
  {
    icon: Wrench,
    title: "Toilet Repair",
    description: "Resolve running toilets, hidden leaks, stubborn clogs, and flushing problems.",
  },
  {
    icon: Pipette,
    title: "Pipe Leak Repair",
    description: "Find and repair hidden wall or floor plumbing leaks before they cause costly water damage.",
  },
  {
    icon: ShieldCheck,
    title: "Bathroom Upgrades",
    description: "Install updated plumbing fixtures for a cleaner, more accessible, and functional space.",
  },
];

const faqs = [
  {
    question: "What bathroom plumbing problems can you help with?",
    answer: "We handle everything from faucet and sink repairs, running toilets, shower plumbing, bathtub installations, to complex pipe leaks inside walls or under floors.",
  },
  {
    question: "Can I request a bathroom plumbing estimate?",
    answer: "Yes. Call our service team to describe your project and ask about estimates, service availability, and any applicable fees before we start.",
  },
  {
    question: "When should I call a plumber for a leak?",
    answer: "Call a qualified plumber when you notice persistent dripping, damp cabinets, water stains on ceilings, or actively leaking pipes. If water is escaping, shut off the main valve first.",
  },
  {
    question: "Can bathroom plumbing fixtures be replaced?",
    answer: "Yes. Many faucets, toilets, sinks, shower fixtures, and bathtubs can be replaced. The right solution depends on the existing plumbing layout.",
  },
];

export default function BathroomPlumbing() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        /* Animation for the red arrow */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative grid min-h-[550px] lg:grid-cols-2">
        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 relative z-10">
          <div className="mx-auto w-full max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Professional Plumbing
              </p>
            </div>

            <h1 className="gf-display text-[40px] leading-[1.05] sm:text-[52px] lg:text-[60px] mb-6">
              Better Bathrooms
              <span className="mt-1 block text-[#C6AD8F]">
                Start with the details.
              </span>
            </h1>

            <p className="max-w-lg text-[15.5px] leading-[1.75] text-[#425664] mb-8">
              From dripping faucets and running toilets to shower fixtures and 
              bathtub installations, get expert help with the bathroom plumbing 
              problems that interrupt your day.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* Call Button Replaced Contact */}
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#425664] px-7 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] group shadow-md hover:shadow-lg"
              >
                <Phone size={18} className="text-[#C6AD8F]" />
                Call {PHONE_DISPLAY}
                <ArrowRight 
                  size={20} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a33]/15 bg-white px-6 py-3 text-[14px] font-bold text-[#425664] transition-colors hover:border-[#425664]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-semibold text-[#425664]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C6AD8F]" />
                Repair & Installation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C6AD8F]" />
                Residential Experts
              </span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[350px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85"
            alt="Modern bathroom plumbing"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y border-[#1f2a33]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#1f2a33]/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["01", "Clear Communication"],
            ["02", "Careful Workmanship"],
            ["03", "Repair & Installation"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-4 py-6 sm:justify-center">
              <span className="text-[13px] font-black text-[#C6AD8F]">{number}</span>
              <span className="text-[14px] font-bold text-[#425664]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-5 py-20 sm:px-10 sm:py-24 max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">What We Do</span>
          </div>
          <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
            Bathroom plumbing,<br/>
            <span className="text-[#425664]">made simpler.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className="group flex flex-col rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-6 transition-all duration-300 hover:border-[#425664]/30 hover:bg-white"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#425664]/5 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-[17px] font-extrabold mb-2">{service.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#425664] mb-5 flex-grow">
                  {service.description}
                </p>
                {/* Call Link */}
                <a href={PHONE_TEL} className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8a6f4d] hover:text-[#1f2a33] transition-colors mt-auto">
                  Call to ask <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="bg-[#425664] text-white">
        <div className="grid lg:grid-cols-2 max-w-[1600px] mx-auto">
          <div className="relative min-h-[350px] lg:min-h-[550px]">
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85"
              alt="Modern bathroom interior"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center px-5 py-16 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">Our Approach</span>
              </div>
              <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
                Small problems<br/>
                <span className="text-[#C6AD8F]">deserve attention.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-white/80">
                A dripping faucet, loose fixture, or slow drain may seem minor, but addressing plumbing issues early can prevent major water damage and high bills.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Identify the problem before choosing a repair",
                  "Discuss suitable repair or replacement options",
                  "Ask about pricing and service availability",
                  "Keep fixtures functional and easy to maintain",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-6 text-white/90">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#C6AD8F]" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Call Button Replaced */}
              <a 
                href={PHONE_TEL} 
                className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white group shadow-md"
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

      {/* ================= PROCESS ================= */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">How It Works</span>
          </div>
          <h2 className="gf-display text-[32px] sm:text-[42px]">Three simple steps.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", title: "Tell Us the Problem", text: "Describe the leak, fixture issue, or bathroom upgrade you need." },
            { n: "02", title: "Discuss Your Options", text: "Ask about possible solutions, estimated costs, and scheduling." },
            { n: "03", title: "Plan the Service", text: "Confirm the scope of work and arrange the next steps." },
          ].map((step) => (
            <div key={step.n} className="rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-7">
              <span className="gf-display text-[28px] text-[#C6AD8F]">{step.n}</span>
              <h3 className="mt-2 text-[17px] font-extrabold">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#425664]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-[#1f2a33]/10 bg-white px-5 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">FAQs</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
              Bathroom plumbing<br/>
              <span className="text-[#425664]">questions.</span>
            </h2>
          </div>
          <div className="rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] px-6 sm:px-8">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-[#1f2a33]/10 py-5 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 text-left group"
                >
                  <span className="text-[15.5px] font-bold group-hover:text-[#8a6f4d] transition-colors">{faq.question}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#C6AD8F] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-[1.7] text-[#425664]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 py-20 sm:px-10 sm:py-28 max-w-4xl mx-auto text-center">
        <div className="rounded-2xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-10 sm:p-14">
          <h2 className="gf-display text-[36px] sm:text-[48px] leading-tight text-[#1f2a33]">
            Let's talk <span className="text-[#C6AD8F]">bathroom plumbing.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.7] text-[#425664]">
            Tell us what is happening in your bathroom and ask about service options, pricing, and availability. 24-hour service Monday through Saturday.
          </p>
          
          <div className="mt-8 flex justify-center">
            {/* Big Call Button */}
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-3 rounded-lg bg-[#425664] px-8 py-4 text-[16px] font-bold text-white transition-all duration-300 hover:bg-[#364753] group shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={20} className="text-[#C6AD8F]" />
              Call {PHONE_DISPLAY}
              <ArrowRight 
                size={22} 
                className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
              />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}