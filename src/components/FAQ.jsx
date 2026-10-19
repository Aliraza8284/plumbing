// src/components/FAQ.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageSquare } from "lucide-react";

const faqs = [
  [
    "What plumbing jobs can you help with?",
    "We handle leaks, drains, water heaters, fixtures, bathroom plumbing, sewer lines, and more. Contact us to confirm your specific job.",
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
    "Use the contact form below or give us a call. Share your details and the service you need, and we'll get back to you.",
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
            Have a different question? Send us a note and we'll help you figure out the next step.
          </p>
          
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#8a6f4d] transition-colors hover:text-[#1f2a33]"
          >
            <MessageSquare size={16} />
            Ask a question
          </Link>
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
    </section>
  );
}