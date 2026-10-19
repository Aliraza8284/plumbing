// src/components/PlumbingPage.jsx
import Services from "./Services";
import { Droplets } from "lucide-react";

export default function PlumbingPage() {
  return (
    <main className="bg-[#F6F4F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#425664] py-16 sm:py-24">
        {/* Soft grid texture (same as home page) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F6F4F2 1px, transparent 1px), linear-gradient(to bottom, #F6F4F2 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                Our Services
              </p>
            </div>

            <h1 className="gf-display text-[38px] leading-[1.05] text-white sm:text-[48px] lg:text-[56px]">
              Full-service <span className="text-[#C6AD8F]">plumbing</span><br />
              for homes and businesses.
            </h1>

            <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.75] text-white/80">
              From a single dripping faucet to a full commercial repipe — our licensed 
              plumbers bring master-level craft to every job.
            </p>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <div className="bg-[#F6F4F2]">
        <Services />
      </div>
    </main>
  );
}