// src/components/EmergencyServices.jsx
import { useState } from "react";
import {
  Phone,
  AlertTriangle,
  Droplets,
  Waves,
  Wrench,
  ShieldAlert,
  ArrowRight,
  ChevronDown,
  Clock,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const emergencies = [
  {
    icon: Droplets,
    number: "01",
    title: "Burst Pipes",
    text: "A burst pipe can release large amounts of water quickly. Shut off the water supply if safe and arrange professional assistance.",
    tag: "WATER DAMAGE",
  },
  {
    icon: Waves,
    number: "02",
    title: "Flooding & Backups",
    text: "Water backing up into your property needs urgent assessment to identify the source and reduce further damage.",
    tag: "URGENT",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Major Water Leaks",
    text: "Leaking pipes, valves, or plumbing connections can damage walls, ceilings, floors, and personal belongings.",
    tag: "LEAK DETECTION",
  },
  {
    icon: ShieldAlert,
    number: "04",
    title: "Sewer Line Problems",
    text: "Sewage odors, wastewater backups, or multiple blocked drains can signal a serious plumbing issue.",
    tag: "PROFESSIONAL HELP",
  },
];

const faqs = [
  {
    q: "What should I do first when a pipe bursts?",
    a: "If safe, turn off your main water supply. Keep away from standing water near electrical equipment, protect belongings only if safe, and call a qualified plumbing professional.",
  },
  {
    q: "What if water is near electrical outlets?",
    a: "Do not enter standing water or touch wet electrical equipment. Keep others away. Contact emergency services or a qualified electrician as appropriate.",
  },
  {
    q: "Do emergency plumbers charge extra?",
    a: "Some providers charge additional fees for after-hours, weekend, or holiday calls. Ask about call-out fees, labor rates, and the estimated total before approving.",
  },
  {
    q: "Is service available 24 hours a day?",
    a: "Availability varies by provider and service area. Call to confirm current operating hours, response time, and whether a technician can attend your location.",
  },
];

export default function EmergencyServices() {
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

      {/* Alert Bar */}
      <div className="bg-[#1f2a33] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-[11px] font-bold uppercase tracking-[0.15em] sm:text-[12px]">
          <AlertTriangle size={15} className="text-[#C6AD8F]" />
          Plumbing Emergency? Take Safe Action First.
        </div>
      </div>

      {/* Hero */}
      <section className="relative isolate min-h-[500px] bg-[#425664] text-white sm:min-h-[550px]">
        <img
          src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=2000&q=90"
          alt="Plumbing equipment"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1f2a33]/95 via-[#1f2a33]/85 to-[#1f2a33]/40" />
        
        <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-5 py-16 sm:min-h-[550px] sm:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6AD8F] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C6AD8F]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Emergency Plumbing
              </span>
            </div>

            <h1 className="gf-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Plumbing Emergency?
              <span className="mt-2 block text-[#C6AD8F]">
                Act fast. Protect your home.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[14px] leading-7 text-white/80 sm:text-[15px]">
              Burst pipes, active leaks, flooding, and sewer backups can cause 
              serious disruption. Learn the right first steps and call a 
              plumbing provider immediately.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* Call Button Replaced */}
              <a
                href={PHONE_TEL}
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-6 py-3.5 text-[14px] font-bold uppercase tracking-wide text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg"
              >
                <Phone size={18} />
                Call {PHONE_DISPLAY}
                <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
              </a>
              <a
                href="#emergency-types"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Identify Your Problem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker (Trust Strip) */}
      <section className="bg-white border-b border-[#1f2a33]/10 text-[#1f2a33]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#1f2a33]/10 sm:grid-cols-4 sm:divide-y-0">
          {[
            { icon: Droplets, title: "Burst Pipes", detail: "Stop water if safe" },
            { icon: Waves, title: "Flooding", detail: "Avoid unsafe areas" },
            { icon: Wrench, title: "Major Leaks", detail: "Find the source" },
            { icon: ShieldAlert, title: "Sewer Backup", detail: "Avoid wastewater" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3 p-4 sm:p-5 sm:justify-center">
                <Icon className="shrink-0 text-[#C6AD8F]" size={20} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#425664]">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-[#425664]/70">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Types of Emergencies */}
      <section id="emergency-types" className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Recognize the Problem</span>
          </div>
          <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
            When every minute<br/>
            <span className="text-[#425664]">matters.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#425664]">
            Not every plumbing issue requires the same response. Explore 
            these common emergencies and learn when to call a professional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {emergencies.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.number} className="group relative overflow-hidden rounded-xl border border-[#1f2a33]/12 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-[#425664]/40 hover:shadow-sm">
                <span className="pointer-events-none absolute -right-2 -top-6 text-7xl font-black text-[#F6F4F2] transition group-hover:text-[#C6AD8F]/10 sm:text-8xl">
                  {item.number}
                </span>

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664] transition group-hover:bg-[#425664] group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="rounded border border-[#1f2a33]/10 bg-[#F6F4F2] px-2.5 py-1 text-[9px] font-bold tracking-[0.1em] text-[#8a6f4d]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[18px] font-extrabold tracking-tight text-[#1f2a33]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-[#425664]">
                    {item.text}
                  </p>

                  {/* Call Link Replaced */}
                  <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8a6f4d] hover:text-[#1f2a33] transition-all">
                    Call for help <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Safety First Section */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-[#425664] px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
              <ShieldAlert size={14} /> Safety First
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight mt-5 text-[#1f2a33]">
              Before help<br/>
              <span className="text-[#425664]">arrives.</span>
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-[#425664]">
              Take these precautions only when it is safe. Never put yourself at risk to save property or reach a shutoff valve.
            </p>

            <div className="mt-7 space-y-0">
              {[
                { number: "01", title: "Shut off the water", text: "Turn off the main supply if the valve is safely accessible." },
                { number: "02", title: "Avoid electrical hazards", text: "Keep away from standing water near outlets, wiring, and appliances." },
                { number: "03", title: "Protect the affected area", text: "Keep children and pets away. Move belongings only if the area is safe." },
                { number: "04", title: "Explain what happened", text: "Tell the provider where the problem is and whether water is still flowing." },
              ].map((step) => (
                <div key={step.number} className="flex gap-4 border-b border-[#1f2a33]/10 py-4">
                  <span className="gf-display text-[20px] text-[#C6AD8F]">{step.number}</span>
                  <div>
                    <h3 className="text-[14.5px] font-extrabold text-[#1f2a33]">{step.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#425664]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[350px] overflow-hidden rounded-2xl bg-[#425664] sm:min-h-[480px] border border-[#1f2a33]/10">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85"
              alt="Technician working"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a33] via-[#1f2a33]/40 to-transparent" />
            
            <div className="absolute left-5 right-5 top-5 rounded-lg border-l-4 border-[#C6AD8F] bg-[#1f2a33]/90 p-4 sm:left-7 sm:right-7 sm:top-7 sm:p-5 shadow-lg">
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="shrink-0 text-[#C6AD8F]" size={20} />
                <h3 className="text-[13px] font-black uppercase tracking-wide text-white">Important Warning</h3>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/80">
                If flooding creates an electrical hazard, move to safety and contact the appropriate emergency service. If you suspect a gas leak, leave the area immediately.
              </p>
            </div>

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C6AD8F]">Protect People First</p>
              <p className="mt-1 gf-display text-xl leading-tight text-white sm:text-2xl">
                Property can wait.<br />Your safety cannot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F6F4F2] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Need Help?</span>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight text-[#1f2a33]">
              Emergency<br/>
              <span className="text-[#425664]">questions.</span>
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-[#425664]">
              Read answers to common questions about plumbing emergencies, safety, availability, and service charges.
            </p>
            {/* Call Button Replaced */}
            <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-[#425664] px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#364753] group shadow-md">
              <Phone size={16} className="text-[#C6AD8F]" />
              Call {PHONE_DISPLAY}
              <ArrowRight size={16} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
            </a>
          </div>

          <div className="border-t border-[#1f2a33]/10">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="border-b border-[#1f2a33]/10">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="text-[15px] font-bold leading-6 text-[#1f2a33] group-hover:text-[#8a6f4d] transition-colors">{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#C6AD8F] transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr] opacity-100 mb-5" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-[14px] leading-relaxed text-[#425664] pr-6">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-[#1f2a33]/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-2xl bg-[#425664] p-8 md:flex-row md:items-center sm:p-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C6AD8F]">
              <Clock size={14} /> Take the Next Step
            </div>
            <h2 className="gf-display text-2xl leading-tight text-white mt-3 sm:text-4xl">
              Dealing with an emergency?
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">
              Explain what is happening, ask about current availability, and discuss the appropriate service with a plumbing professional.
            </p>
          </div>

          {/* Big Call Button Replaced */}
          <a href={PHONE_TEL} className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#C6AD8F] px-8 py-4 text-[15px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white group shadow-md hover:shadow-lg">
            <Phone size={18} />
            Call {PHONE_DISPLAY}
            <ArrowRight size={18} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
          </a>
        </div>
      </section>
    </main>
  );
}