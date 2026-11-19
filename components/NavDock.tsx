"use client";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Palette, Layers, Mail } from "lucide-react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Briefcase, href: "#experience", label: "Experience" },
  { icon: Palette, href: "#skill", label: "Skills" },
  { icon: Layers, href: "#my-work", label: "Projects" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

export default function NavDock() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setActive(href);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    ["home", "about", "experience", "skill", "my-work", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Desktop Dock (Vertical Right) ── */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1.5 rounded-2xl border border-white/20 bg-black/90 px-3 py-5 backdrop-blur-xl shadow-2xl hover:border-white/40 transition-all duration-300">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="mb-2 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black text-xs hover:scale-110 transition-transform"
          title="Go to top"
        >
          B
        </a>

        <div className="w-4 h-px bg-white/10 my-1" />

        {navItems.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleScroll(e, href)}
            title={label}
            className="group relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
            style={
              active === href
                ? { backgroundColor: "#AAFF00", color: "#000" }
                : { color: "rgba(255,255,255,0.65)" }
            }
          >
            <Icon size={14} className={active !== href ? "group-hover:text-white transition-colors" : ""} />
            <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/20 text-white text-xs font-medium uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {label}
            </span>
          </a>
        ))}

        <div className="w-4 h-px bg-white/10 my-1" />

        {/* Résumé Download */}
        <a
          href="/api/download-cv"
          download="Boomiga_Resume.pdf"
          title="Download CV (PDF)"
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
          style={{ backgroundColor: "#AAFF00", color: "#000" }}
        >
          <span className="text-[10px] font-bold font-mono">CV</span>
        </a>
      </nav>

      {/* ── Mobile & Tablet Dock (Generous Floating Bottom Pill) ── */}
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex lg:hidden items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/25 bg-black/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.85)] max-w-[96vw]">
        {navItems.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleScroll(e, href)}
            title={label}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 shrink-0"
            style={
              active === href
                ? { backgroundColor: "#AAFF00", color: "#000" }
                : { color: "rgba(255,255,255,0.75)" }
            }
          >
            <Icon size={18} className="sm:hidden" />
            <Icon size={22} className="hidden sm:block" />
          </a>
        ))}

        <div className="w-px h-5 sm:h-6 bg-white/20 mx-1 sm:mx-1.5" />

        {/* Mobile Résumé Download */}
        <a
          href="/api/download-cv"
          download="Boomiga_Resume.pdf"
          title="Download CV (PDF)"
          className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-mono font-bold uppercase tracking-wider bg-[#AAFF00] text-black shrink-0 shadow-md hover:scale-105 transition-transform cursor-pointer"
        >
          CV
        </a>
      </nav>
    </>
  );
}
