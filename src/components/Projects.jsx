// src/components/Projects.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Droplets, Flame, Wrench } from "lucide-react";

const projects = [
  {
    tag: "BATHROOM",
    title: "A fresh start for a family bathroom",
    color: "from-[#e0e8ed] to-[#c3d3dc]", // Soft slate/blueish
    icon: Droplets,
  },
  {
    tag: "PIPE REPAIR",
    title: "A hidden leak, fixed the right way",
    color: "from-[#f5eedf] to-[#e8d4b0]", // Sand/amberish
    icon: Wrench,
  },
  {
    tag: "WATER HEATER",
    title: "Hot water restored in one visit",
    color: "from-[#e3e8e4] to-[#c6d4ca]", // Soft greenish-slate
    icon: Flame,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 bg-[#F6F4F2]">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-[#C6AD8F]" aria-hidden="true" />
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a6f4d]">
          A look at our work
        </p>
      </div>

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-[#1f2a33] sm:text-4xl lg:text-[42px] font-['Young_Serif']">
          Small details. Solid results.
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-[#425664]">
          Practical solutions that look good, work properly, and are made to last.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map(({ tag, title, color, icon: Icon }, i) => (
          <article
            key={title}
            className="group overflow-hidden rounded-xl border border-[#1f2a33]/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {/* Card Header Image/Graphic area */}
            <div className={`relative grid h-56 place-items-center bg-gradient-to-br ${color}`}>
              <span className="absolute left-5 top-5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-extrabold tracking-widest text-[#1f2a33] shadow-sm">
                {tag}
              </span>
              <Icon
                size={72}
                strokeWidth={1.2}
                className="text-[#425664]/50 transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-4 right-5 text-sm font-black text-[#425664]/40">
                0{i + 1}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-[18px] font-extrabold text-[#1f2a33] leading-snug">
                {title}
              </h3>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[#8a6f4d] transition-colors hover:text-[#1f2a33]"
              >
                Discuss a similar job{" "}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}