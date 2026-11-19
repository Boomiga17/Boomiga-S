"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function ExperienceSection() {
  const [tenureText, setTenureText] = useState("1 yr 2 mos");

  useEffect(() => {
    // Start date: October 2025 (Month index 9)
    const startDate = new Date(2025, 9, 1);
    const currentDate = new Date();

    let totalMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());

    if (totalMonths < 1) totalMonths = 1;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let formatted = "";
    if (years > 0 && months > 0) {
      formatted = `${years} yr ${months} mos`;
    } else if (years > 0 && months === 0) {
      formatted = `${years} yr${years > 1 ? "s" : ""}`;
    } else {
      formatted = `${totalMonths} mos`;
    }

    setTenureText(formatted);
  }, []);

  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading (Centered) */}
        <div className="mb-10 sm:mb-14 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 mb-2.5 sm:mb-3">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#AAFF00" }} />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
              Work Experience
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white uppercase tracking-tight text-center">
            Professional Experience
          </h2>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base max-w-xl text-center">
            My career journey in designing digital interfaces, brand graphics, and crafting user experiences.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative rounded-2xl border border-white/20 bg-[#080808] p-5 sm:p-8 lg:p-10 hover:border-white/40 transition-all duration-300 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
            {/* Nerdy Labs Logo Container */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl border border-white/20 bg-white p-2 sm:p-2.5 flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
              <Image
                src="/assets/experience/nerdy-labs.png"
                alt="Nerdy Labs Logo"
                width={120}
                height={60}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Role & Company Header */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white uppercase tracking-tight">
                  UI/UX DESIGNER
                </h3>
                <span className="px-2.5 py-1 rounded text-xs font-mono uppercase tracking-wider bg-[#AAFF00]/15 text-[#AAFF00] border border-[#AAFF00]/40 font-medium">
                  Active Role
                </span>
              </div>
              <p
                className="font-semibold text-sm sm:text-base lg:text-lg uppercase tracking-wide mt-0.5"
                style={{ color: "#AAFF00" }}
              >
                Nerdy Labs
              </p>
              <p className="text-sm text-zinc-400 font-medium mt-1">
                Full-time · Oct 2025 – Present · {tenureText}
              </p>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                <MapPin size={14} className="text-zinc-400" />
                <span>Madurai, Tamil Nadu, India · On-site</span>
              </div>
            </div>
          </div>

          {/* Minimal Description & Highlights */}
          <div className="pt-5 border-t border-white/15 space-y-3.5">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
              Designing responsive UI/UX architectures and commercial brand graphics for <span className="text-white font-medium">30+ client websites</span> in Figma, with hands-on frontend engineering in React.js.
            </p>

            {/* 3 Minimal Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] mt-1.5 shrink-0" />
                <span><span className="text-white font-medium">UI/UX Design:</span> 30+ websites &amp; mobile apps in Figma</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] mt-1.5 shrink-0" />
                <span><span className="text-white font-medium">Brand &amp; Graphics:</span> Posters, banners &amp; marketing assets</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] mt-1.5 shrink-0" />
                <span><span className="text-white font-medium">Frontend Dev:</span> Responsive React.js &amp; Tailwind code</span>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              {["Figma", "UI/UX", "Design Systems", "React.js", "Tailwind CSS", "Photoshop", "Illustrator"].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded border border-white/20 bg-white/[0.05] text-zinc-200 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
