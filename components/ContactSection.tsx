"use client";
import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Send } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.051-2.053-5.051-5.521 0-3.503 1.978-5.521 5.051-5.521 3.012 0 4.949 2.018 5.051 5.521 0 .147-.018.267-.018.267H15.549c.188 1.683 1.293 2.5 2.68 2.5.885 0 1.638-.467 1.942-1.246H23.726zm-5.1-7.5c-1.339 0-2.3.74-2.602 2.021H20.5c-.214-1.282-1.097-2.021-1.874-2.021zM2.9 18H0V6h4.4c2.21 0 3.6 1.1 3.6 2.9 0 1.188-.6 2.1-1.5 2.4 1.1.3 1.8 1.2 1.8 2.5 0 2-1.5 3.2-4.6 3.2H2.9zm1.4-7.3c.9 0 1.5-.5 1.5-1.4 0-.9-.6-1.5-1.5-1.5H2.9v2.9h1.4zm.3 5.5c1.1 0 1.8-.6 1.8-1.5 0-1-.7-1.6-1.8-1.6H2.9v3.1h1.7z" />
    </svg>
  );
}

function WhatsappIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!form.message.trim()) {
      setError("Please write a short message or project note.");
      return;
    }

    setError("");
    const { subject, body } = getEmailDraft();

    // 1. Open Gmail web composer directly in new tab (works reliably on all browsers)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sanaboomiga@gmail.com&su=${subject}&body=${body}`;
    const newTab = window.open(gmailUrl, "_blank");

    // 2. Fallback mailto trigger
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      window.location.href = `mailto:sanaboomiga@gmail.com?subject=${subject}&body=${body}`;
    }

    setSent(true);
  };

  const getEmailDraft = () => {
    const cleanName = form.name.trim()
      ? form.name.trim().replace(/\b\w/g, (c) => c.toUpperCase())
      : "Visitor";
    const cleanEmail = form.email.trim();
    const cleanMsg = form.message.trim();

    const subject = `Project Inquiry // ${cleanName}`;

    // Avoid duplicate greetings if the visitor already started with one
    const startsWithGreeting = /^(hi+|hello|hey|dear)\b/i.test(cleanMsg);
    const greeting = startsWithGreeting ? "" : "Hi Boomiga,\n\n";

    const body = `${greeting}${cleanMsg}\n\nBest regards,\n${cleanName}\n${cleanEmail}`;

    return {
      subject: encodeURIComponent(subject),
      body: encodeURIComponent(body),
    };
  };

  const handleWhatsAppSubmit = () => {
    const nameStr = form.name.trim() || "Visitor";
    const emailStr = form.email.trim() ? ` (${form.email.trim()})` : "";
    const msgStr = form.message.trim() || "Hi Boomiga, I visited your portfolio and would like to discuss a project!";
    const text = encodeURIComponent(`Hi Boomiga, I am ${nameStr}${emailStr}.\n\n${msgStr}`);
    window.open(`https://wa.me/916369697901?text=${text}`, "_blank");
  };

  const socials = [
    { Icon: WhatsappIcon, label: "WhatsApp", href: "https://wa.me/916369697901" },
    { Icon: GithubIcon, label: "GitHub", href: "https://github.com/Boomiga17" },
    { Icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/boomiga-s/" },
    { Icon: BehanceIcon, label: "Behance", href: "https://www.behance.net/boomigas" },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-14 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#AAFF00" }} />
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 font-mono">
              Get In Touch
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal text-white uppercase tracking-tight">
            Connect With ME
          </h2>
          <p className="text-zinc-400 mt-2 sm:mt-3 text-sm sm:text-base">
            Let&apos;s create something amazing together. Reach out and connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <div className="space-y-4 sm:space-y-5">
            {/* Email */}
            <a
              href="mailto:sanaboomiga@gmail.com"
              className="group flex items-center gap-3.5 sm:gap-4 rounded-xl border border-white/20 bg-[#080808] p-4 sm:p-5 hover:border-white/40 transition-all shadow-md"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-0.5">Email</p>
                <p className="text-sm sm:text-base font-medium text-white group-hover:text-[#AAFF00] transition-colors truncate">sanaboomiga@gmail.com</p>
              </div>
              <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916369697901"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 sm:gap-4 rounded-xl border border-white/20 bg-[#080808] p-4 sm:p-5 hover:border-white/40 transition-all shadow-md"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 flex items-center justify-center flex-shrink-0 text-zinc-400 group-hover:text-white transition-colors">
                <WhatsappIcon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-0.5">WhatsApp</p>
                <p className="text-sm sm:text-base font-medium text-white group-hover:text-[#AAFF00] transition-colors truncate">+91 63696 97901</p>
              </div>
              <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-3.5 sm:gap-4 rounded-xl border border-white/20 bg-[#080808] p-4 sm:p-5 shadow-md">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-zinc-400" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-0.5">Location</p>
                <p className="text-sm sm:text-base font-medium text-white">Madurai, Tamil Nadu</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3 sm:pt-4">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 mb-3 sm:mb-4">Find Me Online</p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 sm:gap-2.5 rounded-xl border border-white/20 bg-[#080808] px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-zinc-200 hover:border-white/40 hover:text-white transition-all shadow-sm"
                  >
                    <s.Icon size={14} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-white/20 bg-[#080808] p-5 sm:p-8 hover:border-white/40 transition-all shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-normal text-white uppercase tracking-widest">
                Send a Message
              </h3>
              <span className="text-xs font-mono text-[#AAFF00] font-medium uppercase tracking-wider">
                Direct Reply
              </span>
            </div>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-6 text-center space-y-4 animate-in fade-in duration-200">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-black text-2xl font-semibold shadow-lg shadow-[#AAFF00]/20"
                  style={{ backgroundColor: "#AAFF00" }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-normal text-lg uppercase tracking-tight">
                    Message Draft Prepared!
                  </h4>
                  <p className="text-zinc-300 text-sm mt-1 max-w-sm mx-auto leading-relaxed">
                    Your message is ready for <span className="text-white font-medium">sanaboomiga@gmail.com</span>. Click below to open in your favorite client:
                  </p>
                </div>

                <div className="w-full max-w-xs pt-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=sanaboomiga@gmail.com&su=${getEmailDraft().subject}&body=${getEmailDraft().body}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-black flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
                    style={{ backgroundColor: "#AAFF00" }}
                  >
                    <Mail size={15} /> Open in Gmail
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-xs text-zinc-300 hover:text-white uppercase font-mono tracking-wider pt-2 underline underline-offset-4 cursor-pointer font-medium"
                >
                  ← Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                {error && (
                  <div className="px-3.5 py-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono flex items-center justify-between">
                    <span>⚠ {error}</span>
                    <button
                      type="button"
                      onClick={() => setError("")}
                      className="text-amber-300/60 hover:text-amber-200 text-sm font-semibold ml-2 cursor-pointer"
                    >
                      ×
                    </button>
                  </div>
                )}

                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-zinc-200 mb-1.5 block">
                    First Name <span className="text-[#AAFF00]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, name: e.target.value }));
                      if (error) setError("");
                    }}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.05] px-4 py-3 text-[16px] sm:text-sm text-white placeholder-zinc-400 focus:border-[#AAFF00] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-zinc-200 mb-1.5 block">
                    Email Address <span className="text-[#AAFF00]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, email: e.target.value }));
                      if (error) setError("");
                    }}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.05] px-4 py-3 text-[16px] sm:text-sm text-white placeholder-zinc-400 focus:border-[#AAFF00] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium uppercase tracking-wider text-zinc-200 mb-1.5 block">
                    Your Message <span className="text-[#AAFF00]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    value={form.message}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, message: e.target.value }));
                      if (error) setError("");
                    }}
                    className="w-full rounded-xl border border-white/20 bg-white/[0.05] px-4 py-3 text-[16px] sm:text-sm text-white placeholder-zinc-400 focus:border-[#AAFF00] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl py-3.5 px-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-black transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-lg touch-manipulation"
                  style={{ backgroundColor: "#AAFF00" }}
                >
                  <Send size={16} /> Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
