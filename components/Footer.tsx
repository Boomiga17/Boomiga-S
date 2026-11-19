export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-8 md:px-14 lg:px-20 bg-black pb-28 sm:pb-24 lg:pb-8 border-t border-white/10 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white">
          Boomiga S.
        </span>
        <p className="text-xs sm:text-sm text-zinc-400 font-medium">
          © 2026 Boomiga S. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 tracking-wider uppercase font-medium">
          <span>Designed &amp;</span>
          <span className="font-semibold text-[#AAFF00]">
            Built
          </span>
          <span>with passion</span>
        </div>
      </div>
    </footer>
  );
}
