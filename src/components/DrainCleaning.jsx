// src/components/DrainCleaning.jsx
import { useState } from "react";
import {
  Droplets,
  Wrench,
  ShieldCheck,
  Clock,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  Waves,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const services = [
  {
    icon: Droplets,
    title: "Kitchen Drain Cleaning",
    description: "Clear grease, food residue, and everyday buildup that slows down your kitchen sink.",
  },
  {
    icon: Waves,
    title: "Shower & Bathtub Drains",
    description: "Help remove hair, soap residue, and stubborn blockages from bathroom drains.",
  },
  {
    icon: Wrench,
    title: "Main Drain Clogs",
    description: "Get help diagnosing recurring or severe drain blockages before they become bigger problems.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Drain Care",
    description: "Keep drains flowing better with practical maintenance and professional recommendations.",
  },
];

const faqs = [
  {
    q: "What are the signs of a clogged drain?",
    a: "Common signs include slow-draining water, gurgling sounds, unpleasant odors, or water backing up into a sink, shower, or tub.",
  },
  {
    q: "Can you help with recurring drain clogs?",
    a: "Yes. Recurring clogs may indicate buildup or a deeper plumbing issue. A plumbing professional can assess the problem and recommend an appropriate solution.",
  },
  {
    q: "Should I use chemical drain cleaners?",
    a: "Use caution. Some chemical cleaners can damage plumbing or cause hazardous splashes. Avoid mixing cleaning products, and consider professional help for stubborn blockages.",
  },
  {
    q: "How can I prevent drain clogs?",
    a: "Use drain strainers, keep grease out of kitchen sinks, and remove visible hair and debris regularly. If clogs keep returning, arrange a professional inspection.",
  },
];

export default function DrainCleaning() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#F6F4F2]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Professional Drain Solutions
              </p>
            </div>

            <h1 className="gf-display max-w-xl text-4xl leading-[1.05] sm:text-5xl lg:text-[56px] mb-6">
              Clear the Clog.
              <span className="mt-1 block text-[#C6AD8F]">
                Restore the flow.
              </span>
            </h1>

            <p className="max-w-lg text-[15.5px] leading-[1.75] text-[#425664] mb-8">
              Slow drains and stubborn clogs can disrupt your whole day.
              Explore drain-cleaning solutions for kitchen sinks, showers,
              bathtubs, and other household drains.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#425664] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
              >
                <MessageSquare size={16} />
                Get in Touch
              </a>

              <a
                href="#drain-services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1f2a33]/15 bg-white px-6 py-3 text-[14px] font-bold text-[#425664] transition-colors hover:border-[#425664]"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-semibold text-[#425664]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C6AD8F]" />
                Residential drains
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C6AD8F]" />
                Practical solutions
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-sm border border-[#1f2a33]/10">
              <img
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85"
                alt="Clean modern bathroom with a sink and plumbing fixtures"
                className="h-[340px] w-full object-cover sm:h-[440px]"
              />
              
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-[#1f2a33]/10 bg-white/95 p-5 backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C6AD8F]/20 text-[#8a6f4d]">
                    <Waves size={24} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#1f2a33]">
                      Better Drain Flow Starts Here
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#425664]">
                      Find the right solution for your drainage problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="drain-services" className="py-20 sm:py-24 bg-white border-y border-[#1f2a33]/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">What We Do</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
              Solutions for everyday<br/>
              <span className="text-[#425664]">drain problems.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
              From a slow kitchen sink to a recurring blockage, identify the
              type of drain issue and explore the next steps.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group flex flex-col rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#425664]/40 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#1f2a33]/10 text-[#425664] transition group-hover:bg-[#425664] group-hover:text-white group-hover:border-[#425664]">
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <p className="mt-6 text-[11px] font-bold tracking-[0.15em] text-[#8a6f4d]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-1 text-[17px] font-extrabold text-[#1f2a33]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#425664] flex-grow">
                    {service.description}
                  </p>

                  <a
                    href={CONTACT}
                    className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8a6f4d] hover:text-[#1f2a33]"
                  >
                    Get Help <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="overflow-hidden bg-[#425664] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20">
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
              alt="Bright, well-maintained modern home interior"
              className="h-[320px] w-full rounded-xl object-cover sm:h-[420px] border border-white/10 shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-3 rounded-xl bg-[#C6AD8F] p-5 text-[#1f2a33] shadow-xl sm:-right-5 sm:p-6">
              <Droplets size={28} />
              <p className="mt-2 text-[13px] font-extrabold uppercase tracking-wide">
                Keep it Moving
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                Why Address It Early
              </span>
            </div>

            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
              Small drain issues can<br/>become bigger problems.
            </h2>

            <p className="mt-5 text-[15px] leading-[1.8] text-white/80">
              A slow drain may be a minor buildup issue, but repeated
              blockages, bad odors, or backed-up water can indicate something
              more serious. Early attention can help you understand the cause
              and avoid unnecessary damage.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Identify common causes of slow drainage",
                "Choose an appropriate cleaning approach",
                "Get guidance for recurring blockages",
                "Learn simple habits that help prevent clogs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#C6AD8F]" />
                  <p className="text-[14px] leading-6 text-white/90">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={CONTACT}
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#C6AD8F] px-6 py-3 text-[14px] font-bold text-[#1f2a33] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Discuss Your Problem <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                FAQs
              </span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
              Drain cleaning<br/>
              <span className="text-[#425664]">questions.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">
              Find helpful information about drain blockages, prevention, and
              when to seek professional plumbing assistance.
            </p>

            <div className="mt-8 rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-6">
              <Clock size={24} className="text-[#C6AD8F]" />
              <h3 className="mt-3 text-[15px] font-bold text-[#1f2a33]">
                Need help with a stubborn clog?
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#425664]">
                Contact a plumbing professional to discuss your issue and
                confirm service availability.
              </p>
              <a
                href={CONTACT}
                className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-bold text-[#8a6f4d] hover:text-[#1f2a33]"
              >
                <MessageSquare size={15} /> Contact Us
              </a>
            </div>
          </div>

          <div className="divide-y divide-[#1f2a33]/10 border-y border-[#1f2a33]/10">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 text-left group"
                  aria-expanded={openFaq === index}
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

                <div className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-[1.7] text-[#425664]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 bg-white">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-[#1f2a33]/12 bg-[#F6F4F2] px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-[#425664]/5 pointer-events-none" />
          
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                  Let's Get Things Flowing
                </span>
              </div>
              <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight text-[#1f2a33]">
                Don't let a clogged drain disrupt your day.
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#425664]">
                Discuss your drain problem and explore the next steps toward
                a better-flowing plumbing system.
              </p>
            </div>

            <a
              href={CONTACT}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#425664] px-8 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
            >
              <MessageSquare size={16} />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}