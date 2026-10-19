// src/components/RooterService.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Zap,
  Wrench,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */

const CONTACT = "/contact";

const features = [
  {
    icon: Search,
    title: "Main Line Clearing",
    desc: "Heavy-duty power rooters cut through roots, grease, and scale in your main sewer line.",
  },
  {
    icon: Zap,
    title: "Same-Day Response",
    desc: "Emergency rooter service available 24/7 with fast on-site arrival across the metro.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    desc: "Industrial-grade augers and camera inspection tools ensure a clean, lasting clear.",
  },
  {
    icon: ShieldCheck,
    title: "No-Dig Solution",
    desc: "Clear blockages without excavation. Non-invasive, fast, and property-safe.",
  },
];

const steps = [
  {
    step: "01",
    title: "Call & Describe",
    desc: "Tell us the symptoms — slow drains, backups, gurgling. We'll identify the likely culprit.",
  },
  {
    step: "02",
    title: "On-Site Diagnosis",
    desc: "Our technician arrives with a camera snake to locate the exact blockage point.",
  },
  {
    step: "03",
    title: "Power Rooter",
    desc: "We feed the rooter cable through the line, breaking up roots and debris completely.",
  },
  {
    step: "04",
    title: "Verify & Flush",
    desc: "We run water tests and camera-check the line to confirm full flow before we leave.",
  },
];

const faqs = [
  {
    q: "What's the difference between rooter service and drain snaking?",
    a: "A drain snake is a small hand tool for minor clogs near the fixture. Rooter service uses a motorized cable machine that reaches the main line, cutting through tree roots, heavy grease, and scale that hand tools can't touch.",
  },
  {
    q: "Will rooter service damage my pipes?",
    a: "No. When performed by a trained technician with the correct cable size and head for your pipe material, rooter service is safe. We inspect the line first and adjust the approach for PVC, cast iron, or clay.",
  },
  {
    q: "How long does the service take?",
    a: "Most residential rooter jobs take 45–90 minutes. Main line blockages with heavy root intrusion may take longer, and we'll give you a clear estimate before starting.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — our rooter service comes with a 30-day clear-flow guarantee. If the same blockage returns within that window, we re-clear at no charge.",
  },
  {
    q: "Can you handle commercial properties?",
    a: "Absolutely. We service restaurants, retail, and multi-unit buildings with larger-diameter lines and commercial-grade equipment.",
  },
];

export default function RooterService() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
              Plumbing
            </span>
          </div>
          
          <h1 className="gf-display text-[34px] leading-[1.05] sm:text-[44px] lg:text-[52px] text-[#1f2a33]">
            Rooter Service
          </h1>
          
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#425664]">
            Power rooter service to clear tough blockages in main lines. Fast,
            non-invasive, and backed by a clear-flow guarantee.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={CONTACT}
              className="inline-flex items-center gap-2 rounded-lg bg-[#425664] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
            >
              <MessageSquare size={16} />
              Book an Appointment
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1f2a33]/15 bg-white px-6 py-3 text-[14px] font-bold text-[#425664] transition-colors hover:border-[#425664]"
            >
              Learn More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="border-y border-[#1f2a33]/10 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#425664]">
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#C6AD8F]" /> Licensed & Insured</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#C6AD8F]" /> 24/7 Emergency</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#C6AD8F]" /> 30-Day Guarantee</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-[#C6AD8F]" /> Camera Inspection</span>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section id="features" className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="gf-display text-[28px] sm:text-[36px] leading-tight">
            What our rooter service<br/>
            <span className="text-[#425664]">covers.</span>
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">
            Every job is handled by a certified technician using professional
            equipment — no shortcuts, no temporary fixes.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl border border-[#1f2a33]/12 bg-white p-6 transition-all duration-300 hover:border-[#425664]/30 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-[16px] font-extrabold text-[#1f2a33]">
                  {f.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#425664]">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-white border-y border-[#1f2a33]/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="gf-display text-[28px] sm:text-[36px] leading-tight">
              How it <span className="text-[#425664]">works.</span>
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-[#425664]">
              From first call to verified flow — here's the process.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <span className="gf-display text-[24px] text-[#C6AD8F]">
                  {s.step}
                </span>
                <div className="mt-2 h-px w-10 bg-[#C6AD8F]/50" />
                <h3 className="mt-4 text-[16px] font-extrabold text-[#1f2a33]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#425664]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WARNING SIGNS ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-[#425664] px-6 py-10 sm:px-12 sm:py-14 border border-[#1f2a33]/10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                  Warning Signs
                </span>
              </div>
              <h2 className="gf-display text-[26px] sm:text-[32px] leading-tight text-white">
                When do you need<br/>rooter service?
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-white/70 max-w-[420px]">
                If you notice two or more of these, the blockage is likely in
                your main line — not a single fixture.
              </p>
            </div>
            
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Multiple drains backing up",
                "Gurgling sounds in toilets",
                "Sewage smell indoors or yard",
                "Slow draining tub & shower",
                "Water pooling in basement",
                "Recurring clogs in same spot",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-[13px] font-semibold text-white/90"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#C6AD8F]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>



      {/* ================= FINAL CTA ================= */}
      <section id="book" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="rounded-2xl border border-[#1f2a33]/12 bg-white px-6 py-12 sm:px-12 sm:py-16 text-center">
            <h2 className="gf-display text-[28px] sm:text-[36px] leading-tight text-[#1f2a33]">
              Blocked main line? <br className="sm:hidden" />
              <span className="text-[#425664]">We can clear it today.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[460px] text-[14px] leading-relaxed text-[#425664]">
              Same-day and emergency rooter service. Upfront pricing, no hidden
              fees, and a 30-day clear-flow guarantee.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to={CONTACT}
                className="inline-flex items-center gap-2 rounded-lg bg-[#425664] px-8 py-3.5 text-[14.5px] font-bold text-white transition-colors hover:bg-[#364753] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664]"
              >
                <MessageSquare size={16} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}