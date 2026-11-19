"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [tenureText, setTenureText] = useState("1.2 Yrs");

  useEffect(() => {
    const startDate = new Date(2025, 9, 1);
    const now = new Date();
    const totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
    const yrs = Math.floor(totalMonths / 12);
    if (yrs >= 1) {
      setTenureText(`${(totalMonths / 12).toFixed(1)} Yrs`);
    } else {
      setTenureText(`${totalMonths} Mos`);
    }
  }, []);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between"
      style={{ fontFamily: "inherit" }}
    >
      {/* ── Seamless Background Portrait Panel (Right-Aligned on Desktop, Full-bleed on Mobile) ── */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] xl:w-[55%] h-full z-10 pointer-events-none overflow-hidden">
        {/* Left-edge smooth feather fade to pure black (Desktop) */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        {/* Bottom-edge smooth fade into black */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent z-10" />
        {/* Top-edge subtle vignette */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10" />
        {/* Mobile deep gradient overlay: keeps upper face crystal clear, smoothly masks suit to pitch black for text */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black via-black/95 via-50% to-transparent z-10" />

        <Image
          src="/assets/home/boomiga.png"
          alt="Boomiga S"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          quality={85}
          className="object-cover object-[center_top] lg:object-[center_10%] opacity-90 sm:opacity-95 lg:opacity-95 select-none sharp-img"
        />
      </div>

      {/* ── Top Header Bar (Clean & Minimal Original Design) ── */}
      <div className="relative z-30 flex items-center justify-between px-5 sm:px-10 lg:px-16 pt-5 sm:pt-7 font-mono">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="text-[#AAFF00] text-xs sm:text-sm font-semibold">//</span>
          <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Boomiga
          </span>
          <span className="text-white/80 text-xs sm:text-sm tracking-wider">S.</span>
        </div>

        {/* Right: Available Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-medium">
            Available <span className="hidden sm:inline">for Work</span>
          </span>
        </div>
      </div>

      {/* ── Main Hero Composition (Giant Typography + Mission + Split CTA) ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-end lg:justify-center px-5 sm:px-10 lg:px-16 pt-24 sm:pt-32 lg:pt-0 pb-4 sm:pb-6 lg:py-12 lg:my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-end">
          {/* Left: Giant Condensed Stacked Headline + Mission + Action Buttons (All on Left) */}
          <div className="lg:col-span-7 xl:col-span-7 z-20 space-y-4 sm:space-y-5">
            {/* Badge chips from Resume Titles */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-5">
              {["UI/UX DESIGNER", "GRAPHIC DESIGNER", "FRONTEND DEVELOPER"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] text-zinc-100 border border-white/30 px-3 py-1.5 rounded-md bg-white/[0.06] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="font-bold uppercase tracking-tight select-none"
              style={{
                fontSize: "clamp(42px, 11vw, 130px)",
                lineHeight: "0.95",
                letterSpacing: "-0.01em",
              }}
            >
              <span className="block text-white">DESIGN.</span>
              <span className="block" style={{ color: "#AAFF00" }}>
                CODE.
              </span>
              <span className="block text-white/60">DELIVER.</span>
            </h1>

            {/* CTA Buttons (Underneath headline on the Left) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 sm:pt-6 font-mono">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-lg text-black font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:scale-105 shadow-lg shadow-[#AAFF00]/10 cursor-pointer"
                style={{ backgroundColor: "#AAFF00" }}
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight size={16} className="stroke-[2.5]" />
              </a>

              <a
                href="/resume"
                className="inline-flex items-center justify-center px-6 py-3 sm:py-3.5 rounded-lg border border-white/20 hover:border-white/50 text-white font-mono font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 hover:bg-white/[0.04] cursor-pointer"
              >
                VIEW FULL RÉSUMÉ
              </a>
            </div>
          </div>

          {/* Right Column: Kept completely empty so portrait photo has 100% unobstructed clarity */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none" />
        </div>
      </div>

      {/* ── Bottom Floating Glass Card ── */}
      <div className="relative z-30 w-full md:max-w-none max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-6 sm:pb-8 pt-2">
        <div className="w-full rounded-2xl border border-white/20 bg-[#080808]/90 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.7)] p-4 sm:p-5 md:px-6 lg:px-8 xl:px-10 font-mono transition-all duration-300 hover:border-white/40">
          {/* Mobile & Small Tablet View (< md): Clean Structured 3-Row Layout */}
          <div className="flex flex-col md:hidden w-full gap-3 text-xs">
            {/* Row 1: Location */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] shrink-0" />
                <span className="text-zinc-200 uppercase tracking-wider font-medium text-xs">
                  Madurai, Tamil Nadu · India
                </span>
              </div>
            </div>

            {/* Row 2: 3 Stats in a Balanced Grid */}
            <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-white/15 text-center">
              <div className="flex flex-col items-center">
                <span className="text-zinc-400 text-[11px] uppercase tracking-wider">Experience</span>
                <span className="font-medium text-white text-xs mt-0.5">{tenureText}</span>
              </div>
              <div className="flex flex-col items-center border-x border-white/15 px-1">
                <span className="text-zinc-400 text-[11px] uppercase tracking-wider">Websites</span>
                <span className="font-medium text-white text-xs mt-0.5">30+ Delivered</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-zinc-400 text-[11px] uppercase tracking-wider">Degree</span>
                <span className="font-medium text-white text-xs mt-0.5">
                  B.Tech <span style={{ color: "#AAFF00" }}>8.2 CGPA</span>
                </span>
              </div>
            </div>

            {/* Row 3: Centered Scroll Prompt */}
            <div className="flex items-center justify-center pt-1">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-200 hover:text-[#AAFF00] transition-colors flex items-center gap-1.5 cursor-pointer group"
              >
                <span>SCROLL TO EXPLORE</span>
                <span className="group-hover:translate-y-0.5 transition-transform text-[#AAFF00]">↓</span>
              </a>
            </div>
          </div>

          {/* Desktop & Tablet View (>= md): Full Horizontal Flow (Single Clean Line, Full Width) */}
          <div className="hidden md:flex items-center justify-between gap-3 lg:gap-6 w-full">
            {/* Left: Location & Resume Stats (Single line, no wrap) */}
            <div className="flex items-center flex-nowrap whitespace-nowrap gap-2.5 md:gap-3 lg:gap-5 xl:gap-6 text-[11px] md:text-xs lg:text-sm">
              {/* Location */}
              <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] shrink-0" />
                <span className="text-zinc-200 uppercase tracking-wider font-medium">
                  Madurai, Tamil Nadu · India
                </span>
              </div>

              <div className="w-px h-3.5 bg-white/20 shrink-0" />

              {/* Experience */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-zinc-400 uppercase tracking-wider">Experience:</span>
                <span className="font-medium text-white">{tenureText}</span>
              </div>

              <div className="w-px h-3.5 bg-white/20 shrink-0" />

              {/* Websites */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-zinc-400 uppercase tracking-wider">Websites:</span>
                <span className="font-medium text-white">30+ Delivered</span>
              </div>

              <div className="w-px h-3.5 bg-white/20 shrink-0" />

              {/* Degree */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-zinc-400 uppercase tracking-wider">Degree:</span>
                <span className="font-medium text-white">B.Tech CSE</span>
                <span className="font-medium text-[#AAFF00]">8.2 CGPA</span>
              </div>
            </div>

            {/* Right: Scroll prompt */}
            <div className="flex items-center shrink-0">
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="text-[11px] md:text-xs lg:text-sm font-semibold uppercase tracking-widest text-zinc-200 hover:text-[#AAFF00] transition-colors flex items-center gap-1.5 cursor-pointer group whitespace-nowrap"
              >
                <span>SCROLL TO EXPLORE</span>
                <span className="group-hover:translate-y-0.5 transition-transform text-[#AAFF00]">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
