// src/components/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="GlobalFixs Plumbing home"
      className={`inline-flex items-center gap-2.5 font-extrabold tracking-tight ${
        light ? "text-white" : "text-[#1a1a1a]"
      }`}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#C6AD8F] text-[#1f2a33] shadow-sm">
        <Droplets size={22} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-xl tracking-tight">
          Global<span className="text-[#C6AD8F]">Fixs</span>
        </span>
        <span
          className={`hidden sm:block text-[9px] tracking-[0.25em] uppercase mt-0.5 ${
            light ? "text-white/60" : "text-[#425664]/60"
          }`}
        >
          Plumbing • HVAC
        </span>
      </span>
    </Link>
  );
}