// src/components/FAQ.jsx
import React from "react";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const faqs = [
  [
    "What plumbing jobs can you help with?",
    "We handle leaks, drains, water heaters, fixtures, bathroom plumbing, sewer lines, and more. Call us to confirm your specific job.",
  ],
  [
    "Will I get a quote before work starts?",
    "Yes. We explain the issue, discuss your options, and agree on a flat-rate price before any work begins.",
  ],
  [
    "Do you offer emergency plumbing?",
    "Emergency availability depends on your location and schedule. Call us to confirm current availability.",
  ],
  [
    "How do I book a visit?",
    "Give us a call. Share your details and the service you need, and we'll get a technician dispatched.",
  ],
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white border-t border-[#1f2a33]/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        
        {/* Left Side: Heading & CTA */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
              Questions, answered
            </p>
          </div>
          
          <h2 className="gf-display mt-2 text-3xl leading-tight text-[#1f2a33] sm:text-4xl lg:text-[42px]">
            Good to know.
          </h2>
          
          <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-[#425664]">
            Have a different question? Give us a call and we'll help you figure out the next step.
          </p>
          
          {/* Call Button Replaced */}
          <a
            href={PHONE_TEL}
            className="mt-6 inline-flex items-center gap-2.5 rounded-lg bg-[#425664] px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg group"
          >
            <Phone size={16} className="text-[#C6AD8F]" />
            Call {PHONE_DISPLAY}
            <ArrowRight 
              size={18} 
              className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
            />
          </a>
        </div>

        {/* Right Side: FAQs */}
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl border border-[#1f2a33]/10 bg-[#F6F4F2] px-5 py-4 open:bg-white transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-[#1f2a33] outline-none">
                {q}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-[#C6AD8F] transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="pt-3 pr-6 text-[13.5px] leading-relaxed text-[#425664]">
                {a}
              </p>
            </details>
          ))}
        </div>

      </div>
      
      {/* Custom Animation for the Red Arrow */}
      <style>{`
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
}