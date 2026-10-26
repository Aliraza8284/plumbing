// Contact.jsx
import { useState, useEffect } from "react";
import {
  Phone,
  Clock,
  Siren,
  Wrench,
  ClipboardList,
  CheckCircle2,
  ArrowRight, // Added for the arrow
} from "lucide-react";

/* =========================================================
   GlobelFixs — Contact Section (Pay Per Call Optimized)
   Palette: #F6F4F2 | #425664 | #C6AD8F | #1f2a33
   ========================================================= */
const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const HOURS = [
  { label: "Mon – Sat", time: "24 Hours", open: true },
  { label: "Sunday", time: "Closed", open: false },
];

const AREAS =
  "Hollywood, Burbank, Glendale, Pasadena, Santa Monica, Long Beach, Culver City, Beverly Hills, Torrance and Silverlake";

const SITUATIONS = [
  { id: "emergency", icon: Siren, title: "Emergency", hint: "Active leak, flooding, no water", color: "text-[#b04632]" },
  { id: "repair", icon: Wrench, title: "Repair", hint: "Something is broken or slow", color: "text-[#425664]" },
  { id: "quote", icon: ClipboardList, title: "Estimate", hint: "Planned work, no rush", color: "text-[#425664]" },
];

function getOfficeStatus() {
  const wd = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
  }).format(new Date());
  const day = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[wd];
  if (day === 0) return { open: false, text: "Sunday closed · Emergency line open" };
  return { open: true, text: "Open now · 24-hour service" };
}

export default function Contact() {
  const [office, setOffice] = useState(null);

  useEffect(() => {
    setOffice(getOfficeStatus());
    const t = setInterval(() => setOffice(getOfficeStatus()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F6F4F2] py-12 sm:py-16">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#C6AD8F]/12 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#425664]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <header className="mb-7 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e0da] bg-white px-3 py-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6AD8F]" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#425664]">
              Get in touch
            </span>
          </span>

          <h2 className="gf-display mt-3 text-[26px] leading-[1.1] text-[#1f2a33] sm:text-[32px]">
            Tell us what's wrong.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#425664]">We'll be there.</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-2 rounded bg-[#C6AD8F]/40" />
            </span>
          </h2>

          <p className="mt-2 max-w-[56ch] text-[13.5px] leading-relaxed text-[#425664]/75">
            24-hour service, Monday through Saturday. Call us directly for the fastest response — Sunday the emergency line is still open.
          </p>
        </header>

        {/* Main Panel */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-24px_rgba(66,86,100,0.3)] ring-1 ring-[#e5e0da] lg:grid-cols-[5fr_7fr]">
          
          {/* ---------- Left: Info Desk ---------- */}
          <aside className="relative flex flex-col gap-5 overflow-hidden bg-gradient-to-br from-[#425664] to-[#3a4d5a] p-6 text-white sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#C6AD8F]/25 blur-2xl" />
            
            {/* Status */}
            <div className="relative">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] font-semibold backdrop-blur">
                <span className="relative flex h-2 w-2">
                  {office?.open && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6AD8F] opacity-70 motion-reduce:animate-none" />
                  )}
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      office?.open ? "bg-[#C6AD8F]" : "bg-white/50"
                    }`}
                  />
                </span>
                {office ? office.text : "24-hour service"}
              </div>
            </div>

            {/* Phone (Navbar Style) */}
            <div className="relative">
              <p className="mb-2 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F]">
                Call any time · 24/7
              </p>
              <a
                href={TEL}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-gradient-to-r from-[#C6AD8F] to-[#b89a78] text-[#1f2a33] font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group border border-[#C6AD8F]"
              >
                <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-[15px]">+1 (844) 212-91-86</span>
                {/* Red Arrow */}
                <ArrowRight 
                  size={20} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
            </div>

            {/* Hours */}
            <div className="relative mt-2">
              <h3 className="mb-2 flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#C6AD8F]">
                <Clock size={12} aria-hidden="true" /> Service hours
              </h3>
              <dl className="divide-y divide-white/10 border-y border-white/10 text-[12.5px]">
                {HOURS.map((h) => (
                  <div key={h.label} className="flex justify-between gap-4 py-2">
                    <dt className="text-white/75">{h.label}</dt>
                    <dd className={`font-semibold ${h.open ? "text-white" : "text-white/50"}`}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="relative mt-auto text-[11.5px] leading-relaxed text-white/60 pt-4">
              We serve {AREAS}.
            </p>
          </aside>

          {/* ---------- Right: Call To Action (Form Replaced) ---------- */}
          <div className="flex flex-col justify-center p-6 sm:p-10 bg-white">
            <div className="mb-6">
              <h3 className="text-[22px] font-extrabold text-[#1f2a33]">How can we help you today?</h3>
              <p className="mt-1 text-[14px] text-[#425664]/80">
                Select your situation below and give us a call. Our licensed technicians are ready to assist.
              </p>
            </div>

            {/* Situation Selector (Just for display, no form submission) */}
            <div className="grid gap-3 sm:grid-cols-3 mb-8">
              {SITUATIONS.map(({ id, icon: Icon, title, hint, color }) => (
                <div
                  key={id}
                  className="flex flex-col rounded-xl border border-[#ddd6cd] bg-[#F6F4F2]/50 p-4 transition-colors hover:border-[#C6AD8F] hover:bg-[#F6F4F2]"
                >
                  <Icon size={20} className={`mb-2 ${color}`} aria-hidden="true" />
                  <span className="block text-[14px] font-bold text-[#1f2a33]">{title}</span>
                  <span className="mt-1 block text-[12px] leading-snug text-[#425664]/70">
                    {hint}
                  </span>
                </div>
              ))}
            </div>

            {/* BIG CALL BUTTON (Navbar Style) */}
            <div className="rounded-xl border border-[#C6AD8F]/30 bg-[#C6AD8F]/10 p-6 text-center">
              <p className="text-[14px] font-semibold text-[#1f2a33] mb-4">
                Tap below to call us directly.
              </p>
              <a
                href={TEL}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#425664] to-[#2c3b47] text-white px-6 py-4 text-[18px] font-bold shadow-lg shadow-[#425664]/30 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#425664] active:translate-y-0 group border border-[#425664]"
              >
                <Phone size={20} className="text-[#C6AD8F] animate-pulse" />
                <span>+1 (844) 212-91-86</span>
                <ArrowRight 
                  size={22} 
                  className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
                />
              </a>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-[12.5px] text-[#425664]/70">
                <CheckCircle2 size={14} className="text-[#425664]" />
                Fastest way to get a technician dispatched.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Custom Animation for the Arrow (Left to Right loop) */}
      <style>{`
        @keyframes pulse-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
}