// src/components/PlumbingMaintenance.jsx
import React from "react";
import { Check, MessageSquare, ArrowRight, ShieldCheck, Wrench, Clock } from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const services = [
  {
    title: "Annual Inspections",
    desc: "Thorough system checks to catch small issues before they become expensive problems.",
    img: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=85",
  },
  {
    title: "Drain Cleaning",
    desc: "Professional drain cleaning and snaking to prevent clogs and slow drainage.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
  },
  {
    title: "Leak Detection",
    desc: "Advanced leak detection technology to find hidden leaks without damaging your walls.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=85",
  },
  {
    title: "Water Heater Tune-ups",
    desc: "Flushing and inspection to extend the life of your water heater and improve efficiency.",
    img: "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?w=600&q=85",
  },
  {
    title: "Pipe Insulation",
    desc: "Protect your pipes from freezing and reduce energy loss with proper insulation.",
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=85",
  },
  {
    title: "Emergency Repairs",
    desc: "24/7 emergency plumbing response when unexpected issues strike.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=85",
  },
];

const features = [
  "Licensed & insured professionals",
  "Transparent, upfront pricing",
  "Same-day service available",
  "Satisfaction guaranteed",
];

export default function PlumbingMaintenance() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                  Plumbing
                </p>
              </div>

              <h1 className="gf-display text-[34px] leading-[1.05] sm:text-[44px] lg:text-[52px] mb-6">
                Plumbing<br/>
                <span className="text-[#425664]">Maintenance.</span>
              </h1>

              <p className="max-w-[500px] text-[15px] leading-relaxed text-[#425664] mb-8">
                Annual inspections and tune-ups that prevent costly emergencies. Keep your plumbing system running smoothly with our expert maintenance services.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={CONTACT}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#425664] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
                >
                  <MessageSquare size={16} />
                  Book an Inspection
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a33]/15 bg-white px-6 py-3 text-[14px] font-bold text-[#425664] transition-colors hover:border-[#425664]"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#1f2a33]/10 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=85"
                  alt="Plumbing maintenance services"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white rounded-xl p-4 sm:p-5 border border-[#1f2a33]/10 shadow-md">
                <p className="gf-display text-[28px] leading-none text-[#1f2a33]">15+</p>
                <p className="mt-1 text-[10.5px] font-bold text-[#425664] uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-20 sm:py-24 bg-white border-y border-[#1f2a33]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">What We Offer</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
              Comprehensive<br/>
              <span className="text-[#425664]">maintenance services.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
              Our preventative maintenance plans keep your home's plumbing in top condition year-round.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-xl overflow-hidden border border-[#1f2a33]/12 bg-[#F6F4F2] transition-all duration-300 hover:border-[#425664]/40 hover:bg-white hover:shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-[#1f2a33]/10">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-[17px] font-extrabold text-[#1f2a33] mb-2">{service.title}</h3>
                  <p className="text-[14px] leading-relaxed text-[#425664] flex-grow">
                    {service.desc}
                  </p>
                  <a href={CONTACT} className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8a6f4d] hover:text-[#1f2a33] transition-colors">
                    Ask about this <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&q=85"
                alt="Plumber at work"
                className="rounded-xl border border-[#1f2a33]/10 shadow-sm w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=85"
                alt="Modern bathroom"
                className="rounded-xl border border-[#1f2a33]/10 shadow-sm w-full h-64 object-cover mt-8"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Why Choose Us</span>
              </div>
              <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
                Reliable plumbing care<br/>
                <span className="text-[#425664]">you can trust.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
                We combine years of experience with modern tools and a commitment to customer satisfaction.
              </p>
              
              <ul className="mt-8 space-y-3">
                {features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/20 text-[#8a6f4d]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-semibold text-[#1f2a33]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-5 py-20 sm:px-10 sm:py-24 max-w-5xl mx-auto text-center bg-[#F6F4F2]">
        <div className="rounded-2xl border border-[#1f2a33]/12 bg-white px-6 py-14 sm:px-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6AD8F]/15 text-[#8a6f4d]">
            <Clock size={24} />
          </div>
          <h2 className="gf-display text-[32px] sm:text-[38px] text-[#1f2a33]">
            Schedule your maintenance today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-[#425664]">
            Don't wait for a plumbing emergency. Book a routine inspection and keep your home protected.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT}
              className="inline-flex items-center gap-2 rounded-lg bg-[#425664] px-8 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
            >
              <MessageSquare size={16} /> Contact Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}