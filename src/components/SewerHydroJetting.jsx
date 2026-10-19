// src/components/SewerHydroJetting.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Search,
  ChevronDown,
  Gauge,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const steps = [
  {
    title: "1. Camera Inspection",
    desc: "We insert a high-definition camera into your sewer line to locate blockages, roots, or damage.",
    icon: Search,
  },
  {
    title: "2. High-Pressure Jetting",
    desc: "A specialized hose blasts water at up to 4,000 PSI to scour the pipe walls clean.",
    icon: Gauge,
  },
  {
    title: "3. Final Flush & Check",
    desc: "We flush the remaining debris away and verify the line is completely clear with the camera.",
    icon: CheckCircle2,
  },
];

const benefits = [
  "Eco-friendly — uses only water, no harsh chemicals",
  "Removes tough blockages like tree roots and grease",
  "Safe for all pipe materials when done by professionals",
  "Restores pipes to near-original flow capacity",
  "No need for messy and expensive excavation",
  "Prevents future clogs and sewage backups",
];

const faqs = [
  {
    q: "What is the difference between hydro-jetting and snaking?",
    a: "Snaking (rooting) punches a hole through a clog to restore flow, but leaves grease and scale on pipe walls. Hydro-jetting uses high-pressure water to scour the entire inner pipe wall, removing almost 100% of the buildup.",
  },
  {
    q: "Will hydro-jetting damage my pipes?",
    a: "When performed by a trained professional after a camera inspection, hydro-jetting is safe for most modern plumbing. We adjust the pressure based on your pipe's material and condition.",
  },
  {
    q: "How often should I hydro-jet my sewer line?",
    a: "For residential homes, we recommend hydro-jetting every 12 to 24 months as preventive maintenance, especially if you have older pipes or trees near your sewer line.",
  },
  {
    q: "How long does the process take?",
    a: "Most residential hydro-jetting jobs take between 1 to 3 hours, depending on the severity of the blockage and the length of the sewer line.",
  },
];

// Yahan Component ka naam update kar diya gaya hai
export default function SewerHydroJetting() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative grid min-h-[550px] lg:grid-cols-2 bg-[#F6F4F2]">
        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 relative z-10">
          <div className="mx-auto w-full max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Plumbing Services
              </p>
            </div>

            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[46px] lg:text-[52px] mb-6">
              High-Pressure
              <span className="mt-1 block text-[#C6AD8F]">
                Hydro-Jetting.
              </span>
            </h1>

            <p className="max-w-lg text-[15.5px] leading-[1.75] text-[#425664] mb-8">
              Blast away grease, tree roots, and years of scale buildup. Our
              4,000 PSI hydro-jetting service restores your pipes to full
              capacity without harsh chemicals or digging.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to={CONTACT}
                className="inline-flex items-center gap-2 rounded-lg bg-[#425664] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
              >
                <MessageSquare size={16} />
                Contact Us
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a33]/15 bg-white px-6 py-3 text-[14px] font-bold text-[#425664] transition-colors hover:border-[#425664]"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[350px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=85"
            alt="High-pressure plumbing equipment"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto lg:max-w-sm rounded-xl border border-[#1f2a33]/10 bg-white/95 backdrop-blur p-5 shadow-sm">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8a6f4d] mb-1">
              Powerful & Safe
            </p>
            <p className="text-[18px] font-extrabold text-[#1f2a33] mb-1">
              4,000 PSI Cleaning
            </p>
            <p className="text-[13px] leading-relaxed text-[#425664]">
              Cuts through the toughest blockages without damaging your pipes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="bg-white border-y border-[#1f2a33]/10 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">The Process</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
              How hydro-jetting<br/>
              <span className="text-[#425664]">works.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-6 transition-all duration-300 hover:bg-white hover:border-[#425664]/30">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664] transition-colors duration-300">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] font-extrabold text-[#1f2a33] mb-2">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#425664]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#1f2a33]/10 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=85"
                alt="Clean plumbing pipes"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#425664] text-white p-5 rounded-xl shadow-lg flex items-center gap-4 border border-[#1f2a33]/10">
              <span className="grid place-items-center w-12 h-12 rounded-full bg-white/10">
                <ShieldCheck size={24} className="text-[#C6AD8F]" />
              </span>
              <div>
                <p className="text-[18px] font-black leading-none">100%</p>
                <p className="text-[11px] font-bold uppercase tracking-wider mt-1 text-white/70">Pipe Safe</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Why Choose Us</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1] mb-6">
              A complete clean,<br />
              <span className="text-[#425664]">not just a hole.</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-[#425664] mb-8">
              Unlike a traditional drain snake that only pokes a hole through the clog, hydro-jetting scours the entire inner surface of your pipes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[#425664]">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/20 text-[#8a6f4d]">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="border-t border-[#1f2a33]/10 bg-white px-5 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">FAQs</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
              Hydro-jetting<br />
              <span className="text-[#425664]">questions.</span>
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-[#425664]">
              Get the facts about high-pressure jetting, pipe safety, and when this service is recommended.
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
                  <span className="text-[15.5px] font-bold text-[#1f2a33] group-hover:text-[#8a6f4d] transition-colors">{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#C6AD8F] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-[1.7] text-[#425664]">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 max-w-5xl mx-auto text-center bg-[#F6F4F2]">
        <div className="rounded-2xl border border-[#1f2a33]/12 bg-white px-6 py-14 sm:px-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6AD8F]/15 text-[#8a6f4d]">
            <Droplets size={24} />
          </div>
          <h2 className="gf-display text-[32px] sm:text-[38px] text-[#1f2a33]">
            Need your drains blasted clean?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-[1.7] text-[#425664]">
            Don't let grease and roots block your pipes. Contact our team today to schedule a professional hydro-jetting service.
          </p>
          <Link to={CONTACT} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#425664] px-8 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]">
            <MessageSquare size={16} /> Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}