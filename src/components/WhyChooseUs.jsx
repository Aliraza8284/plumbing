// src/components/WhyChooseUs.jsx
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* Palette: #F6F4F2 paper | #425664 slate | #C6AD8F sand | #1f2a33 ink */


const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Licensed & insured",
    text: "We connect you with master plumbers who are bonded and insured.",
  },
  {
    Icon: Clock,
    title: "Urgent response",
    text: "A live technician answers your call to dispatch help for urgent needs.",
  },
  {
    Icon: BadgeCheck,
    title: "Flat-rate pricing",
    text: "You approve the price before work starts. No hourly surprises.",
  },
  {
    Icon: MapPin,
    title: "Local network",
    text: "Connecting you with trusted technicians serving your local area.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#F6F4F2] text-[#1f2a33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800&display=swap');
        .gf-why { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-why .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
        
        /* Red Arrow Animation */
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      {/* soft grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1f2a33 1px, transparent 1px), linear-gradient(to bottom, #1f2a33 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="gf-why relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: heading + features */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
                Why choose us
              </p>
            </div>
            <h2 className="gf-display mt-2 max-w-xl text-2xl leading-[1.15] sm:text-3xl">
              Fix it right the first time.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#425664]">
              We connect you with trusted local professionals. Enjoy flat-rate pricing and reliable service — no shortcuts, no surprises.
            </p>

            {/* Feature grid (2×2) */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {FEATURES.map(({ Icon, title, text }, i) => (
                  <div
                    key={title}
                    className={[
                      "group relative p-4 transition-colors hover:bg-[#F6F4F2]",
                      i % 2 === 0 ? "sm:border-r sm:border-[#1f2a33]/10" : "",
                      i < 2 ? "border-b border-[#1f2a33]/10" : "",
                    ].join(" ")}
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#425664]/10 text-[#425664] transition-colors group-hover:bg-[#425664] group-hover:text-white">
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <h3 className="text-[14px] font-bold leading-tight">{title}</h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#425664]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Trust Badge + CTA card */}
          <div className="lg:col-span-5">
            
            {/* Compliance Trust Box (Removed the word "Free") */}
            <div className="rounded-xl border border-[#1f2a33]/10 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-[#425664]">
                <CheckCircle2 size={20} className="text-[#C6AD8F]" />
                <h3 className="font-bold text-[15px]">Our Commitment to You</h3>
              </div>
              <p className="text-[13.5px] leading-relaxed text-[#425664] mb-3">
                We are a service designed to connect homeowners with independent local contractors. 
              </p>
              <ul className="text-[12.5px] text-[#425664] space-y-2 list-disc pl-4 marker:text-[#C6AD8F]">
                <li>Independent, pre-screened local providers</li>
                <li>No hidden fees or obligation to hire</li>
                <li>Verify licenses and insurance before work begins</li>
              </ul>
            </div>

            {/* CTA card */}
            <div className="relative mt-5 overflow-hidden rounded-xl bg-[#425664] p-6 text-white">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-20"
                style={{ background: "#C6AD8F" }}
                aria-hidden="true"
              />
              <div className="relative">
                <h3 className="gf-display text-lg leading-tight">
                  Call a real technician.
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/75">
                  Describe the problem — we'll connect you with a local pro.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {/* Call Button */}
                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#C6AD8F] px-4 py-2.5 text-[13.5px] font-bold text-[#1f2a33] transition-all duration-300 hover:bg-white shadow-md hover:shadow-lg group"
                  >
                    <Phone size={15} />
                    Call {PHONE_DISPLAY}
                    <ArrowRight size={15} className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" />
                  </a>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-4 py-2.5 text-[13.5px] font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Services <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}