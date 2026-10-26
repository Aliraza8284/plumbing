// src/components/HVACPage.jsx
import { Phone, ArrowRight } from "lucide-react";

const PHONE_DISPLAY = "(844) 212-9186";
const PHONE_TEL = "tel:+18442129186";

const services = [
  { title: "Heat Pumps", desc: "Energy-efficient heat pump installation, repair, and maintenance." },
  { title: "Emergency HVAC", desc: "Same-day emergency heating and cooling service." },
];

export default function HVACPage() {
  return (
    <section className="bg-[#F6F4F2] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e0da] shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6AD8F]" />
          <span className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#425664]">HVAC Services</span>
        </span>
        
        <h1 className="text-[34px] sm:text-[48px] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#1a1a1a] mb-6">
          Heating, ventilation, and <span className="text-[#C6AD8F]">air conditioning</span> experts
        </h1>
        
        <p className="text-[15.5px] leading-[1.75] text-[#425664]/75 max-w-2xl mb-8">
          Stay comfortable all year round with licensed HVAC service from GlobalFixs. Give us a call for fast, reliable service.
        </p>

        {/* Big Call Button */}
        <div className="mb-10">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-[#425664] px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-[#364753] shadow-md hover:shadow-lg group"
          >
            <Phone size={18} className="text-[#C6AD8F]" />
            Call {PHONE_DISPLAY}
            <ArrowRight 
              size={20} 
              className="text-red-500 animate-[pulse-x_1.5s_ease-in-out_infinite] ml-1" 
            />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <a 
              key={s.title} 
              href={PHONE_TEL} 
              className="group rounded-2xl bg-white border border-[#e5e0da] p-6 hover:border-[#C6AD8F]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[17px] font-extrabold text-[#1a1a1a] mb-2 group-hover:text-[#C6AD8F] transition-colors">{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#425664]/70 mb-4">{s.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8a6f4d]">
                Call for details <ArrowRight size={14} className="text-red-500" />
              </span>
            </a>
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