// src/components/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, MessageSquare, Award, Users, Wrench, Droplets } from 'lucide-react';

const CONTACT = "/contact";

const points = [
  'Upfront, flat-rate pricing before any work begins',
  'Respectful, tidy service in your home or business',
  'Practical, code-compliant solutions built to last',
];

const stats = [
  { value: "20+", label: "Years in Business" },
  { value: "50K+", label: "Jobs Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "40+", label: "Expert Technicians" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Honest & Transparent",
    desc: "We diagnose the problem clearly, explain your options, and give you a flat-rate price before starting."
  },
  {
    icon: Clock,
    title: "Reliable & Prompt",
    desc: "We respect your time. Our technicians arrive in the promised window, fully equipped to handle the job."
  },
  {
    icon: Wrench,
    title: "Built to Last",
    desc: "We don't cut corners. Our repairs and installations are done right the first time, using quality materials."
  },
  {
    icon: Users,
    title: "Community Focused",
    desc: "Family-owned and locally operated. We treat our customers and their homes with the utmost respect."
  }
];

export default function About() {
  return (
    <main className="gf-page bg-[#F6F4F2] text-[#1f2a33] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Young+Serif&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .gf-page { font-family: 'Nunito Sans', system-ui, sans-serif; }
        .gf-page .gf-display { font-family: 'Young Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
      `}</style>

      {/* ================= Hero / Intro Section ================= */}
      <section className="relative bg-[#425664] text-white py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left: Image + Floating Card */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=85"
                  alt="Professional plumber working on pipes"
                  className="h-[350px] w-full object-cover sm:h-[480px] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a33]/60 to-transparent" />
              </div>

              <div className="absolute -bottom-6 right-4 sm:right-8 rounded-xl border border-[#1f2a33]/10 bg-[#C6AD8F] p-5 text-[#1f2a33] shadow-lg shadow-black/20 flex items-center gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-full bg-white/30">
                  <ShieldCheck size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="gf-display text-3xl leading-none">100%</p>
                  <p className="text-[11.5px] font-bold uppercase tracking-wider mt-1 opacity-80">
                    Satisfaction
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 sm:-left-6 rounded-xl border border-[#1f2a33]/10 bg-white p-3 shadow-lg hidden sm:flex items-center gap-3 text-[#425664]">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F6F4F2] text-[#C6AD8F]">
                  <Clock size={16} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#425664]/60 leading-none mb-1">Avg. Response</p>
                  <p className="text-[14px] font-extrabold leading-none text-[#1f2a33]">38 Minutes</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:pl-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6AD8F]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C6AD8F]">
                  Our Story
                </span>
              </div>

              <h1 className="gf-display text-[34px] leading-[1.05] sm:text-[46px] mb-6">
                Trusted plumbing & HVAC<br/>
                <span className="text-[#C6AD8F]">since 2002.</span>
              </h1>

              <p className="text-[15px] leading-relaxed text-white/75 mb-6 max-w-lg">
                GlobelFixs was founded in 2002 with a simple goal: to provide honest, reliable plumbing services to our local community. In 2008, we expanded our reach by launching our website, making it easier for homeowners and businesses to connect with us.
              </p>
              <p className="text-[15px] leading-relaxed text-white/75 mb-8 max-w-lg">
                Today, we are a full-service plumbing and HVAC company. From emergency repairs to complete system installations, we treat every home and business like it's our own.
              </p>

              <div className="space-y-4 mb-8">
                {points.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#C6AD8F]/20 text-[#C6AD8F]">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[14.5px] font-semibold text-white/90">{p}</span>
                  </div>
                ))}
              </div>

              {/* ✅ FIXED: <a> → <Link> */}
              <Link
                to={CONTACT}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#C6AD8F] px-7 py-3.5 text-[14px] font-bold text-[#1f2a33] shadow-md transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
              >
                <MessageSquare size={16} strokeWidth={2.5} />
                Contact Us
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Stats Section ================= */}
      <section className="bg-white border-b border-[#1f2a33]/10 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="gf-display text-[32px] sm:text-[40px] text-[#1f2a33]">{s.value}</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-wider text-[#8a6f4d]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Mission & Values ================= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">Our Values</p>
            </div>
            <h2 className="gf-display text-[32px] sm:text-[42px] leading-tight">
              What drives us every day.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-xl border border-[#1f2a33]/10 bg-white p-6 transition-all duration-300 hover:border-[#425664]/30 hover:shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#425664]/5 text-[#425664]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[#1f2a33] mb-2">{v.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-[#425664]">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}