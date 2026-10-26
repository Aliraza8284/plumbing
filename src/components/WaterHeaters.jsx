// pages/WaterHeaters.jsx
import { useState } from "react";
import {
  Phone,
  ArrowRight,
  Droplets,
  Flame,
  Wrench,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const services = [
  {
    icon: Droplets,
    title: "Tank Water Heaters",
    desc: "Repair, maintenance, and replacement for traditional storage tank water heaters.",
  },
  {
    icon: Flame,
    title: "Tankless Water Heaters",
    desc: "Endless hot water and improved energy efficiency with a professional tankless installation.",
  },
  {
    icon: Wrench,
    title: "Water Heater Repair",
    desc: "Fast diagnosis and repair for leaks, faulty thermostats, heating elements, and pilot lights.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Flushing",
    desc: "Annual flushing and inspection to extend the lifespan of your unit and prevent sediment buildup.",
  },
];

const faqs = [
  {
    q: "How long do water heaters last?",
    a: "Traditional tank water heaters typically last 8 to 12 years, while tankless units can last up to 20 years with proper maintenance.",
  },
  {
    q: "Should I switch to a tankless water heater?",
    a: "Tankless units are highly efficient and provide endless hot water, but they have a higher upfront cost and require proper venting. We can help you decide what's best for your home.",
  },
  {
    q: "Why is my water heater making noise?",
    a: "Popping or rumbling sounds are usually caused by sediment buildup at the bottom of the tank. Flushing the tank often resolves this issue.",
  },
  {
    q: "Do you offer emergency water heater repair?",
    a: "Yes. If your water heater is leaking heavily or has completely failed, call us for emergency service.",
  },
];

export default function WaterHeaters() {
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
        
        @media (prefers-reduced-motion: reduce) { .gf-page *, .gf-page *::before { animation: none !important; transition: none !important; } }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative grid min-h-[500px] lg:grid-cols-2 bg-[#425664] text-white">
        <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 relative z-10">
          <div className="mx-auto w-full max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                Plumbing Services
              </p>
            </div>

            <h1 className="gf-display text-[38px] leading-[1.05] sm:text-[46px] lg:text-[54px] mb-6">
              Reliable Water<br/>
              <span className="text-[#C6AD8F]">Heater Services.</span>
            </h1>

            <p className="max-w-lg text-[15.5px] leading-[1.75] text-white/80 mb-8">
              From routine maintenance to full replacements, we install and repair 
              traditional tank and modern tankless water heaters.
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
            </div>
          </div>
        </div>

        <div className="relative min-h-[300px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?auto=format&fit=crop&w=1400&q=85"
            alt="Water heater installation"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-20 sm:py-24 bg-white border-b border-[#1f2a33]/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">What We Do</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
              Hot water, when<br/>
              <span className="text-[#425664]">you need it.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group flex flex-col rounded-xl border border-[#1f2a33]/12 bg-[#F6F4F2] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#425664]/40 hover:bg-white hover:shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664] transition group-hover:bg-[#425664] group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-[16px] font-extrabold text-[#1f2a33] mb-2">{service.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[#425664] flex-grow">
                    {service.desc}
                  </p>
                  {/* Call Link Replaced */}
                  <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8a6f4d] hover:text-[#1f2a33] transition-colors">
                    Call to ask <ArrowRight size={14} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="bg-[#425664] text-white">
        <div className="grid lg:grid-cols-2 max-w-[1600px] mx-auto">
          <div className="flex items-center px-5 py-16 sm:px-12 lg:px-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">Why Choose Us</span>
              </div>
              <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
                Expert installation<br/>
                <span className="text-[#C6AD8F]">and honest repairs.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-white/80">
                We don't just swap out a unit. We look at your household size and hot water usage to recommend the right size. We also handle all the old unit haul-away and permit checks.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Upfront, flat-rate pricing",
                  "Right-sized for your home's needs",
                  "Old unit removal and disposal",
                  "Licensed and code-compliant installations",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] leading-6 text-white/90">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#C6AD8F]" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Call Button Replaced */}
              <a href={PHONE_TEL} className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg group">
                <Phone size={18} />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
            </div>
          </div>
          
          <div className="relative min-h-[350px] lg:min-h-[550px]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85"
              alt="Plumber working on water heater"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">FAQs</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-[1.1]">
              Water heater<br/>
              <span className="text-[#425664]">questions.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">
              Find helpful information about water heater lifespans, maintenance, and repairs.
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
      <section className="px-5 py-20 sm:px-10 sm:py-24 bg-[#F6F4F2] border-t border-[#1f2a33]/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-[#1f2a33]/12 bg-white px-6 py-14 sm:px-12 shadow-sm">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6AD8F]/15 text-[#8a6f4d]">
              <Clock size={24} />
            </div>
            <h2 className="gf-display text-[32px] sm:text-[38px] text-[#1f2a33]">
              No hot water? We can help.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-[1.7] text-[#425664]">
              Don't suffer through cold showers. Call our team today to schedule a repair or get a quote on a new installation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {/* Big Call Button Replaced */}
              <a href={PHONE_TEL} className="inline-flex items-center gap-2.5 rounded-lg bg-[#425664] px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg group">
                <Phone size={18} className="text-[#C6AD8F]" />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}