"use client";

const skillCategories = [
  {
    title: "Graphic Design",
    num: "01",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Canva",
    ],
  },
  {
    title: "Frontend Skills",
    num: "02",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI/UX Design",
    num: "03",
    skills: [
      "Figma",
      "User Research",
      "Wireframing",
      "Interactive Prototyping",
    ],
  },
  {
    title: "Technical Skills",
    num: "04",
    skills: [
      "Problem Solving",
      "Git & GitHub Version Control",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skill" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-14 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#AAFF00" }} />
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 font-mono">
              Core Skills
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal text-white uppercase tracking-tight">
            My Skills
          </h2>
          <p className="text-zinc-400 mt-2 sm:mt-3 text-sm sm:text-base max-w-xl">
            Combining creative design and engineering development to build complete digital solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-white/20 bg-[#080808] p-5 sm:p-7 hover:border-white/50 transition-all duration-300 relative overflow-hidden shadow-xl"
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-5xl font-bold text-white/[0.07] select-none">
                {cat.num}
              </span>

              <h3 className="text-base font-normal text-white uppercase tracking-wider mb-5 group-hover:text-[#AAFF00] transition-colors">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm sm:text-base text-zinc-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
