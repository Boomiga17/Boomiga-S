"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [removeDOM, setRemoveDOM] = useState(false);
  const [phaseText, setPhaseText] = useState("CORE_INIT");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Fast, organic progress count-up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + step);

        if (next < 35) setPhaseText("SYSTEM // BOOT");
        else if (next < 70) setPhaseText("LOADING // MODULES");
        else if (next < 100) setPhaseText("OPTIMIZING // UI/UX");
        else setPhaseText("SYSTEM // READY");

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      // Trigger cinematic split shutter exit
      const exitTimer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setIsDone(true);
      }, 300);

      const unmountTimer = setTimeout(() => {
        setRemoveDOM(true);
      }, 1200);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  const handleSkip = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setIsDone(true);
    setTimeout(() => setRemoveDOM(true), 900);
  };

  if (removeDOM) return null;

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] select-none cursor-pointer overflow-hidden touch-none"
      title="Click or tap to skip"
    >
      {/* ── Top Shutter Panel (Slides Up on Complete) ── */}
      <div
        className={`absolute top-0 left-0 right-0 h-[50.5%] bg-black transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isDone ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* ── Bottom Shutter Panel (Slides Down on Complete) ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[50.5%] bg-black transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isDone ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* ── Viewport Foreground Content Container ── */}
      <div
        className={`relative z-30 h-full w-full flex flex-col justify-between p-4 sm:p-8 md:p-14 font-mono transition-all duration-500 ease-out ${
          isDone ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }`}
        style={{
          paddingTop: "max(1rem, env(safe-area-inset-top))",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        {/* Corner HUD Markers (Desktop only to prevent mobile clutter) */}
        <span className="hidden sm:block absolute top-4 left-4 text-white/20 text-xs font-mono pointer-events-none">+</span>
        <span className="hidden sm:block absolute top-4 right-4 text-white/20 text-xs font-mono pointer-events-none">+</span>
        <span className="hidden sm:block absolute bottom-4 left-4 text-white/20 text-xs font-mono pointer-events-none">+</span>
        <span className="hidden sm:block absolute bottom-4 right-4 text-white/20 text-xs font-mono pointer-events-none">+</span>

        {/* ── Top Bar ── */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.25em] uppercase text-zinc-300">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AAFF00] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AAFF00]" />
            </span>
            <span className="text-zinc-200 font-semibold">{phaseText}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-zinc-400">MADURAI, TN</span>
            <span className="text-white font-bold">BOOMIGA S.</span>
          </div>
        </div>

        {/* ── Center Kinetic Brand Mark ── */}
        <div className="flex flex-col items-center justify-center my-auto relative w-full px-2">
          {/* Ambient Radial Backlight Glow */}
          <div
            className="absolute -inset-16 sm:-inset-24 pointer-events-none opacity-40 blur-3xl rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(170,255,0,0.15) 0%, transparent 65%)",
            }}
          />

          {/* Staggered Letters with Split Mask & Unclipped Glowing Dot */}
          <div className="relative py-3 px-2 sm:px-4 flex items-center justify-center flex-nowrap whitespace-nowrap max-w-full">
            <div className="relative overflow-hidden flex items-center flex-nowrap">
              {"BOOMIGA".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-[-0.02em] select-none uppercase transition-transform"
                  style={{
                    animation: `letterReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${0.08 + i * 0.05}s`,
                    opacity: 0,
                    transform: "translateY(110%)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Glowing Lime Dot (Outside overflow-hidden so its 360° glow and ping shadow never clip on the right) */}
            <span className="relative inline-flex items-center justify-center ml-2 sm:ml-4 p-2 sm:p-3 overflow-visible">
              <span
                className="w-2.5 h-2.5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#AAFF00] inline-block shadow-[0_0_25px_#AAFF00] shrink-0"
                style={{
                  animation: "dotPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.5s",
                  opacity: 0,
                  transform: "scale(0)",
                }}
              />
              <span
                className="absolute w-2.5 h-2.5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#AAFF00] animate-ping opacity-60"
                style={{ animationDelay: "0.8s" }}
              />
            </span>
          </div>

          {/* Subtitle / Role Tag */}
          <div className="overflow-hidden mt-2.5 sm:mt-4 text-center max-w-full px-2">
            <p
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.16em] sm:tracking-[0.25em] text-zinc-200 font-semibold whitespace-nowrap"
              style={{
                animation: "fadeUp 0.6s ease-out forwards 0.45s",
                opacity: 0,
              }}
            >
              UI/UX DESIGNER &amp; FRONTEND DEVELOPER
            </p>
          </div>

          {/* Inline Hairline Loader */}
          <div
            className="mt-6 sm:mt-8 flex flex-col items-center gap-2 max-w-[190px] sm:max-w-[240px] w-full"
            style={{
              animation: "fadeUp 0.6s ease-out forwards 0.55s",
              opacity: 0,
            }}
          >
            <div className="w-full flex items-center justify-between text-xs text-zinc-300 font-mono tracking-widest font-medium">
              <span>INITIALIZING</span>
              <span className="text-[#AAFF00] font-bold">{progress.toString().padStart(3, "0")}%</span>
            </div>
            <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#AAFF00] transition-all duration-150 ease-out shadow-[0_0_10px_#AAFF00]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex items-center justify-between text-xs text-zinc-300 tracking-[0.14em] sm:tracking-[0.2em] uppercase font-medium">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-[#AAFF00] font-bold">//</span>
            <span className="hidden sm:inline">PRECISION INTERFACES</span>
            <span className="sm:hidden">UI/UX &amp; CODE</span>
          </div>
          <div className="text-zinc-300 hover:text-white transition-colors cursor-pointer text-xs font-semibold">
            [ TAP TO SKIP ]
          </div>
        </div>
      </div>

      {/* ── Keyframe Animations ── */}
      <style>{`
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(110%) skewY(4deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0%) skewY(0deg);
          }
        }
        @keyframes dotPopIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          70% {
            transform: scale(1.25);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
