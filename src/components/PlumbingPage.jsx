// src/components/PlumbingPage.jsx
import Services from "./Services";

export default function PlumbingPage() {
  return (
    <section className="bg-[#F6F4F2] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e0da] shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6AD8F]" />
          <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#425664]">Plumbing</span>
        </span>
        <h1 className="text-[34px] sm:text-[48px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#1a1a1a] mb-6">
          Full-service <span className="text-[#C6AD8F]">plumbing</span> for homes and businesses
        </h1>
        <p className="text-[15.5px] leading-[1.75] text-[#425664]/75 max-w-2xl mb-12">
          From a single dripping faucet to a full commercial repipe — our licensed plumbers bring master-level craft to every job.
        </p>
      </div>
      <Services />
    </section>
  );
}