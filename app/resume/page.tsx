"use client";
import Link from "next/link";
import { ArrowLeft, Printer, Download } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-black py-8 sm:py-12 px-4 sm:px-6 print:p-0 print:bg-white font-sans">
      {/* Top action toolbar (hidden on print) */}
      <div className="max-w-4xl mx-auto mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden font-mono">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-200 hover:text-[#AAFF00] transition-colors"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/api/download-cv"
            download="Boomiga_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all border border-white/20 shadow-md cursor-pointer"
          >
            <Download size={14} /> Download PDF
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#AAFF00] text-black text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-lg cursor-pointer"
          >
            <Printer size={14} /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Document Page (Letter / A4 standard) ── */}
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-14 md:p-16 rounded shadow-2xl print:shadow-none print:rounded-none print:p-0 text-[#111] leading-normal">
        {/* Header */}
        <header className="border-b border-black pb-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-black mb-1.5 font-heading">
            Boomiga S
          </h1>
          <p className="text-xs sm:text-sm font-medium text-black tracking-wide mb-2">
            UI/UX Designer | Graphic Designer | Frontend Developer
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs text-black">
            <span>Madurai, Tamil Nadu</span>
            <span>|</span>
            <a href="tel:+916369697901" className="hover:underline">+91 6369697901</a>
            <span>|</span>
            <a href="mailto:sanaboomiga@gmail.com" className="hover:underline">sanaboomiga@gmail.com</a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/boomiga-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <span>|</span>
            <Link href="/" className="text-blue-600 hover:underline">
              Portfolio
            </Link>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="py-4">
          <h2 className="text-xs sm:text-sm font-heading font-normal uppercase tracking-wider text-black pb-0.5 border-b border-black inline-block mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-black leading-relaxed text-justify">
            UI/UX Designer with 1 year of professional experience at Nerdy Labs, skilled in creating modern, responsive, and user-friendly website and mobile app designs. Experienced in UI/UX design, graphic design, and front-end development, with contributions to 30+ websites. Proficient in Figma, HTML, CSS, JavaScript, and React.js, with a strong focus on creative design, visual consistency, responsive layouts, and seamless user experiences.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="py-4">
          <h2 className="text-xs sm:text-sm font-heading font-normal uppercase tracking-wider text-black pb-0.5 border-b border-black inline-block mb-2">
            Technical Skills
          </h2>
          <div className="space-y-1 text-xs sm:text-sm text-black leading-relaxed">
            <p><span className="font-bold">UI/UX Design:</span> Figma</p>
            <p><span className="font-bold">Graphic Design:</span> Adobe Photoshop, Adobe Illustrator</p>
            <p><span className="font-bold">Frontend:</span> HTML, CSS, Bootstrap, JavaScript, and React</p>
            <p><span className="font-bold">Version Control:</span> GitHub</p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-4">
          <h2 className="text-xs sm:text-sm font-heading font-normal uppercase tracking-wider text-black pb-0.5 border-b border-black inline-block mb-2.5">
            Professional Experience
          </h2>
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-sm sm:text-base text-black">Nerdy Labs</span>
              <span className="text-xs font-semibold text-black">OCT 2025 – Present</span>
            </div>
            <p className="italic text-xs text-black mb-2">UI/UX Designer</p>
            <ul className="list-disc list-outside pl-5 text-xs sm:text-sm text-black space-y-1">
              <li>
                I have worked on designing 30+ websites, mainly for restaurant brands. I also create posters, banners, and other graphic designs. Along with design, I sometimes work on front-end development and help improve website layouts and user experience.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="py-4">
          <h2 className="text-xs sm:text-sm font-heading font-normal uppercase tracking-wider text-black pb-0.5 border-b border-black inline-block mb-3">
            Projects
          </h2>
          <div className="space-y-3.5 text-xs sm:text-sm">
            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-black">
                  Multi Location Delivery App UI -{" "}
                  <a
                    href="https://www.figma.com/design/Y9kTdFG6vrBSFE2b1ZuT2j/House-Of-Biryani---Kebabs-App?node-id=0-1&t=kauEOLBWjbtXcJ7T-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold"
                  >
                    Link
                  </a>
                </span>
                <span className="italic text-xs text-black">Figma</span>
              </div>
              <p className="text-black leading-relaxed">
                Designed and updated the multi-location mobile app UI in Figma, featuring location-based offers, loyalty programs, and a seamless food-ordering experience.
              </p>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-black">
                  Chaat &amp; Drinks Website UI -{" "}
                  <a
                    href="https://www.figma.com/design/5F7IU3aJhLZotQVcp5cVFk/Chaat-Junction-UI?node-id=0-1&t=kMYiNnjRWymoIjW9-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold"
                  >
                    Link
                  </a>
                </span>
                <span className="italic text-xs text-black">Figma</span>
              </div>
              <p className="text-black leading-relaxed">
                Designed an animated Chaat &amp; Drinks website UI in Figma, featuring vibrant chaat and juice visuals, engaging animations, and a modern, interactive user experience.
              </p>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-black">
                  Mexican Restaurant Website UI -{" "}
                  <a
                    href="https://www.figma.com/design/vKC9k1aFyusofY06WhwivB/Los-Osorio-UI-Design?node-id=0-1&t=abwFWsAnbwWZlwI7-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold"
                  >
                    Link
                  </a>
                </span>
                <span className="italic text-xs text-black">Figma</span>
              </div>
              <p className="text-black leading-relaxed">
                Designed the Mexican restaurant website UI with a unique double-background design, vibrant visuals, modern layouts, and elegant typography to create an engaging dining experience.
              </p>
            </div>

            {/* Project 4 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-black">
                  Event Management Website UI -{" "}
                  <a
                    href="https://www.figma.com/design/LudUKXiphiFYCZwOxvpYwY/Star-Surprise-Management?node-id=41-4216&t=EE1EbZmxSJKqt7dq-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold"
                  >
                    Link
                  </a>
                </span>
                <span className="italic text-xs text-black">Figma</span>
              </div>
              <p className="text-black leading-relaxed">
                Designed a modern event management website UI with elegant layouts, engaging visuals, intuitive navigation, and a seamless event booking experience.
              </p>
            </div>

            {/* Project 5 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-black">
                  OPS Portal -{" "}
                  <a
                    href="https://boomiga17.github.io/OPS-Portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold"
                  >
                    Link
                  </a>
                </span>
                <span className="italic text-xs text-black">Figma, HTML, CSS, React Js</span>
              </div>
              <p className="text-black leading-relaxed">
                Designed the Ops Portal UI in Figma and developed the responsive frontend using React.js, focusing on a modern interface, usability, and smooth user experience.
              </p>
            </div>

            {/* Project 6 */}
            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <span className="font-bold text-black">
                  Priority Alignment Portal -{" "}
                  <a
                    href="https://boomiga17.github.io/Task-Alignment-Portal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline font-semibold"
                  >
                    Link
                  </a>
                </span>
                <span className="italic text-xs text-black">HTML, CSS, React Js</span>
              </div>
              <p className="text-black leading-relaxed">
                Developed the Priority Alignment Portal with a modern UI, intuitive navigation, and efficient priority management features.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-4">
          <h2 className="text-xs sm:text-sm font-heading font-normal uppercase tracking-wider text-black pb-0.5 border-b border-black inline-block mb-2.5">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
            <div>
              <p className="font-bold text-black">Bachelor of Technology (Computer Science and Engineering)</p>
              <p className="text-black mt-0.5">CGPA: 8.2 / 10</p>
            </div>
            <span className="text-xs font-semibold text-black mt-1 sm:mt-0">2021 – 2025</span>
          </div>
        </section>
      </div>
    </div>
  );
}
