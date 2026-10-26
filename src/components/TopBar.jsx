import React from 'react';
import { Clock3, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#425664] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2.5 text-xs sm:px-8">
        
        {/* Left Side: Tagline (Address hata diya hai) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <p className="flex items-center gap-2 text-white/80">
            <Clock3 size={14} className="text-[#C6AD8F]" />
            Reliable help, without the runaround.
          </p>
        </div>

        {/* Right Side: Phone Number (Naya format) */}
        <a 
          href="tel:+18442129186" 
          className="flex items-center gap-2 font-semibold hover:text-[#C6AD8F] transition-colors"
        >
          <Phone size={14} className="text-[#C6AD8F]" />
          (844) 212-9186
        </a>

      </div>
    </div>
  );
}