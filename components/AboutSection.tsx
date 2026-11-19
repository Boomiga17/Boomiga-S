"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-16 bg-black overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] pointer-events-none opacity-10"
        style={{ backgroundColor: "#AAFF00" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Editorial Meta Bar */}
        <div className="flex items-center justify-between pb-6 mb-12 sm:mb-16 border-b border-white/15 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#AAFF00" }} />
            <span className="uppercase tracking-[0.25em] text-zinc-400 font-medium">
              About Me
            </span>
          </div>
        </div>

        {/* Short Typographic Heading (Matches Other Sections) */}
        <div className="mb-10 sm:mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#AAFF00] font-medium block mb-3">
            [ Core Philosophy ]
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white uppercase tracking-tight leading-tight max-w-3xl">
            Where Design Meets{" "}
            <span style={{ color: "#AAFF00" }}>Clean Code</span>.
          </h2>
        </div>

        {/* 2-Column Editorial Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Who I Am (5 cols) */}
          <div className="lg:col-span-5 border-l-2 pl-6 sm:pl-8 space-y-3" style={{ borderColor: "#AAFF00" }}>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium block">
              Identity &amp; Foundation
            </span>
            <p className="text-base sm:text-lg text-white font-medium leading-snug">
              I’m <span style={{ color: "#AAFF00" }}>Boomiga S</span> — a UI/UX Designer &amp; Frontend Developer based in Madurai, India, with an academic foundation in Computer Science &amp; Engineering.
            </p>
          </div>

          {/* Right Column: Craft & Execution (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium block">
              The Approach
            </span>
            <p>
              My practice centers on creating clear, purposeful user interfaces, building scalable design systems in Figma, and writing clean, accessible React frontend code.
            </p>
            <p className="text-zinc-400">
              Bridging computational logic with visual hierarchy, I approach every digital product with both a designer&apos;s empathy for user experience and an engineer&apos;s appreciation for structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
