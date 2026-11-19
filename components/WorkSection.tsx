"use client";
import { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  X,
  ExternalLink,
  Sparkles,
  Layers,
  Globe,
  ZoomIn,
  Eye,
  LayoutGrid,
  List,
  Lock,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";

// ─── Flagship Projects with Direct Verified Links & UI Mockup Imagery ─────────
interface ResumeProject {
  id: string;
  no: string;
  title: string;
  discipline: "UI/UX Design" | "Frontend" | "UI/UX & Frontend Design";
  tools: string[];
  description: string;
  deliverables: string;
  highlight: string;
  liveLink?: string;
  figmaLink?: string;
  image: string;
  browserUrl: string;
  type: "figma" | "code" | "hybrid";
}

const resumeProjects: ResumeProject[] = [
  {
    id: "ops-portal",
    no: "01",
    title: "OPS Portal",
    discipline: "UI/UX & Frontend Design",
    tools: ["Figma", "HTML", "CSS", "React.js"],
    description: "Designed the Ops Portal UI in Figma and developed the responsive frontend using React.js, focusing on real-time system metrics, user governance, and smooth usability.",
    deliverables: "Design System & Responsive React.js Frontend",
    highlight: "Enterprise Operations Interface",
    liveLink: "https://boomiga17.github.io/OPS-Portal/",
    figmaLink: "https://www.figma.com/design/Nk82r21cUUq5H73Cz93GMu/OPS-Portal-UI?node-id=0-1&t=yznvSqES2aJivobT-1",
    image: "/assets/work/previews/ops-portal.png",
    browserUrl: "boomiga17.github.io/OPS-Portal",
    type: "hybrid",
  },
  {
    id: "priority-portal",
    no: "02",
    title: "Task Alignment Portal",
    discipline: "Frontend",
    tools: ["HTML", "CSS", "React.js"],
    description: "Developed the Task Alignment Portal with an intuitive priority board, visual task matrices, and interactive workflow productivity controls.",
    deliverables: "Frontend Engineering & Task Alignment Engine",
    highlight: "Workflow Productivity Suite",
    liveLink: "https://boomiga17.github.io/Task-Alignment-Portal/",
    image: "/assets/work/previews/priority-portal.png",
    browserUrl: "boomiga17.github.io/Task-Alignment-Portal",
    type: "code",
  },
  {
    id: "multi-location-app",
    no: "03",
    title: "Multi Location Delivery App UI",
    discipline: "UI/UX Design",
    tools: ["Figma"],
    description: "Designed the multi-location food delivery mobile app UI in Figma, featuring branch location selectors, appetizing dish cards, and streamlined order flows.",
    deliverables: "Complete Mobile App Architecture (iOS & Android)",
    highlight: "Location-Based Food Ordering",
    figmaLink: "https://www.figma.com/design/Y9kTdFG6vrBSFE2b1ZuT2j/House-Of-Biryani---Kebabs-App?node-id=0-1&t=kauEOLBWjbtXcJ7T-1",
    image: "/assets/work/previews/multi-location-app.jpg",
    browserUrl: "figma.com/design/House-Of-Biryani-Kebabs-App",
    type: "figma",
  },
  {
    id: "chaat-drinks-ui",
    no: "04",
    title: "Chaat & Drinks Website UI",
    discipline: "UI/UX Design",
    tools: ["Figma"],
    description: "Designed an animated culinary experience in Figma, featuring vivid street food visuals, interactive drink menus, and dynamic web layout structures.",
    deliverables: "Animated Responsive Desktop & Mobile Screens",
    highlight: "Vibrant Culinary Experience",
    figmaLink: "https://www.figma.com/design/5F7IU3aJhLZotQVcp5cVFk/Chaat-Junction-UI?node-id=0-1&t=kMYiNnjRWymoIjW9-1",
    image: "/assets/work/previews/chaat-drinks-ui.jpg",
    browserUrl: "figma.com/design/Chaat-Junction-UI",
    type: "figma",
  },
  {
    id: "mexican-restaurant-ui",
    no: "05",
    title: "Mexican Restaurant Website UI",
    discipline: "UI/UX Design",
    tools: ["Figma"],
    description: "Designed a Mexican dining website UI in Figma with an authentic double-background concept, rich dining aesthetics, and immersive restaurant menu layouts.",
    deliverables: "Double-Background Concept & Brand Menus",
    highlight: "Immersive Dining Concept",
    figmaLink: "https://www.figma.com/design/vKC9k1aFyusofY06WhwivB/Los-Osorio-UI-Design?node-id=0-1&t=abwFWsAnbwWZlwI7-1",
    image: "/assets/work/previews/mexican-restaurant-ui.jpg",
    browserUrl: "figma.com/design/Los-Osorio-UI-Design",
    type: "figma",
  },
  {
    id: "event-mgmt-ui",
    no: "06",
    title: "Event Management Website UI",
    discipline: "UI/UX Design",
    tools: ["Figma"],
    description: "Designed an event management booking UI in Figma featuring luxury concert visuals, tiered VIP seating reservations, and responsive schedule grids.",
    deliverables: "End-to-End Event Booking Flow & Schedule Grid",
    highlight: "Seamless Booking Workflow",
    figmaLink: "https://www.figma.com/design/LudUKXiphiFYCZwOxvpYwY/Star-Surprise-Management?node-id=41-4216&t=EE1EbZmxSJKqt7dq-1",
    image: "/assets/work/previews/event-mgmt-ui.jpg",
    browserUrl: "figma.com/design/Star-Surprise-Management",
    type: "figma",
  },
];

// ─── Graphic Design Portfolio Projects (15 Real Works) ───────────────────────
interface GraphicProject {
  id: string;
  no: string;
  title: string;
  category: "Advertising & Posters" | "Restaurant & Banners" | "Packaging & Identity" | "Creative Art";
  client: string;
  tools: string[];
  image: string;
  aspect: "portrait" | "landscape" | "square";
  description: string;
}

const graphicProjects: GraphicProject[] = [
  {
    id: "retro-street-white",
    no: "01",
    title: "Frozen Cocktail Opening Poster",
    category: "Restaurant & Banners",
    client: "The Retro Street Bar · Kitchen · Hookah",
    tools: ["Photoshop", "Digital Retouching", "Color Grading"],
    image: "/assets/work/graphic/retro-street-white.jpg",
    aspect: "square",
    description: "Opening soon commercial cocktail poster featuring frozen slush drink, flying ice cubes, and fresh mint garnish.",
  },
  {
    id: "retro-street-purple",
    no: "02",
    title: "Martini Nightclub Opening Banner",
    category: "Advertising & Posters",
    client: "The Retro Street",
    tools: ["Photoshop", "Lighting Effects", "Typography"],
    image: "/assets/work/graphic/retro-street-purple.jpg",
    aspect: "portrait",
    description: "Nightlife opening promotional banner showcasing luminous purple cocktails and midnight clock lighting.",
  },
  {
    id: "thanjai-chicken-65",
    no: "03",
    title: "Midweek Flavor Boost - Chicken 65",
    category: "Restaurant & Banners",
    client: "Thanjai Mess Indian Restaurant",
    tools: ["Photoshop", "Food Retouching", "Typography"],
    image: "/assets/work/graphic/thanjai-chicken-65.jpg",
    aspect: "square",
    description: "Sizzling restaurant food poster for Chicken 65 in a traditional copper handi with floating chilies.",
  },
  {
    id: "utsav-dum-ka-murgh",
    no: "04",
    title: "Dum Ka Murgh Royal Culinary Ad",
    category: "Restaurant & Banners",
    client: "Utsav Grand Indian Dining",
    tools: ["Photoshop", "Digital Manipulation", "Smoke Effects"],
    image: "/assets/work/graphic/utsav-dum-ka-murgh.jpg",
    aspect: "square",
    description: "Rich culinary advertisement showcasing slow-cooked Dum Ka Murgh on radiant crimson smoke background.",
  },
  {
    id: "thanjai-bogo-biryani",
    no: "05",
    title: "Buy 1 Get 1 Free Biryani Promo",
    category: "Restaurant & Banners",
    client: "Thanjai Mess Houston",
    tools: ["Photoshop", "Visual Composite", "Typography"],
    image: "/assets/work/graphic/thanjai-bogo-biryani.jpg",
    aspect: "portrait",
    description: "Vibrant promotional banner featuring split-bowl veg and chicken biryani with gulab jamun and raita on wood surface.",
  },
  {
    id: "rabbit-typography",
    no: "06",
    title: "Rabbit 3D Typography Artwork",
    category: "Creative Art",
    client: "Creative Art Series",
    tools: ["Illustrator", "3D Lettering", "Vector Art"],
    image: "/assets/work/graphic/rabbit-typography.jpg",
    aspect: "square",
    description: "Creative typographic illustration blending custom vector 3D lettering R-A-B-B-I-T into a playful bunny form.",
  },
  {
    id: "maghil-hiring-qa",
    no: "07",
    title: "We Are Hiring - Manual QA",
    category: "Advertising & Posters",
    client: "Maghil Hub",
    tools: ["Photoshop", "3D Composition", "Brand Typography"],
    image: "/assets/work/graphic/maghil-hiring-qa.jpg",
    aspect: "portrait",
    description: "Corporate recruitment campaign poster featuring modern 3D red executive armchair and megaphone graphics.",
  },
  {
    id: "maghil-christmas-badge",
    no: "08",
    title: "Christmas & New Year Brand Badge",
    category: "Packaging & Identity",
    client: "Maghil Brand Identity",
    tools: ["Illustrator", "Vector Emblem", "Logo Design"],
    image: "/assets/work/graphic/maghil-christmas-badge.png",
    aspect: "square",
    description: "Festive circular brand emblem featuring Santa hat, golden bells, and custom typography.",
  },
  {
    id: "salem-rr-weekday-combo",
    no: "09",
    title: "Lunch Weekday Biryani Combo",
    category: "Restaurant & Banners",
    client: "Salem RR Biryani McKinney",
    tools: ["Photoshop", "Food Styling", "Promotion Design"],
    image: "/assets/work/graphic/salem-rr-weekday-combo.jpg",
    aspect: "square",
    description: "High-contrast culinary promotion for 3-tier biryani lunch combos with appetizers, desserts, and pricing callouts.",
  },
  {
    id: "vallalar-heritage-collage",
    no: "10",
    title: "Global Compassion Heritage Map",
    category: "Creative Art",
    client: "Spiritual Heritage Foundation",
    tools: ["Photoshop", "Collage Art", "Layout Design"],
    image: "/assets/work/graphic/vallalar-heritage-collage.jpg",
    aspect: "landscape",
    description: "Conceptual world map collage highlighting universal compassion, historical portraits, and humanitarian symbols.",
  },
  {
    id: "dragon-travels-card",
    no: "11",
    title: "Dragon Travels Business Card",
    category: "Packaging & Identity",
    client: "Dragon Travels",
    tools: ["Illustrator", "Brand Identity", "Print Design"],
    image: "/assets/work/graphic/dragon-travels-card.jpg",
    aspect: "landscape",
    description: "Bold golden-yellow corporate stationery and visiting card design with dragon wings branding and QR integration.",
  },
  {
    id: "thai-cancer-pongal",
    no: "12",
    title: "Happy & Prosperous Pongal Festival",
    category: "Advertising & Posters",
    client: "Thai Cancer Support Trust",
    tools: ["Photoshop", "Illustration", "Typography"],
    image: "/assets/work/graphic/thai-cancer-pongal.jpg",
    aspect: "square",
    description: "Traditional harvest festival greeting poster featuring decorated sacred cow, boiling clay pots, sugarcane, and temple gopuram.",
  },
  {
    id: "soy-milk-packaging",
    no: "13",
    title: "Soy Milk Bottle Packaging Mockup",
    category: "Packaging & Identity",
    client: "Pure Organic Beverages",
    tools: ["Photoshop", "Packaging Design", "3D Mockup"],
    image: "/assets/work/graphic/soy-milk-packaging.jpg",
    aspect: "landscape",
    description: "Complete 3-angle commercial glass bottle label and packaging mockup with nutrition facts and fluid splash vector.",
  },
  {
    id: "retro-street-blue",
    no: "14",
    title: "Ribbon Cutting Cocktail Opening Banner",
    category: "Restaurant & Banners",
    client: "The Retro Street Bar & Kitchen",
    tools: ["Photoshop", "Digital Retouching", "Event Flyer"],
    image: "/assets/work/graphic/retro-street-blue.jpg",
    aspect: "square",
    description: "Midnight blue opening announcement banner featuring custom cocktail on rustic wood with silk drapery and ribbon cutting shears.",
  },
  {
    id: "vijay-typography-portrait",
    no: "15",
    title: "Thalapathy Vijay Typography Portrait",
    category: "Creative Art",
    client: "Creative Typography Tribute",
    tools: ["Illustrator", "Typography Art", "Vector Portrait"],
    image: "/assets/work/graphic/vijay-typography-portrait.jpg",
    aspect: "portrait",
    description: "Intricate typographic silhouette portrait composed entirely of famous dialogue quotes and film titles in custom lettering.",
  },
  {
    id: "shrika-brochure-mockup",
    no: "16",
    title: "Shrika Institute Tri-Fold Brochure",
    category: "Packaging & Identity",
    client: "Shrika Institute of Creative Technology",
    tools: ["Illustrator", "InDesign", "Print Mockup"],
    image: "/assets/work/graphic/shrika-brochure-mockup.jpg",
    aspect: "landscape",
    description: "Professional corporate tri-fold educational prospectus mockup featuring curriculum maps, faculty spotlight, and student project showcase.",
  },
  {
    id: "fanta-poster",
    no: "17",
    title: "Fanta Splash Advertising Poster",
    category: "Advertising & Posters",
    client: "Fanta Beverage Campaign",
    tools: ["Photoshop", "Digital Retouching", "Color Grading"],
    image: "/assets/work/graphic/fanta-poster.jpg",
    aspect: "portrait",
    description: "Dynamic product visualization poster featuring fluid splash dynamics, ice refraction, and bold vibrant brand typography.",
  },
  {
    id: "big-hero-6",
    no: "18",
    title: "Disney Big Hero 6 3D Movie Poster",
    category: "Advertising & Posters",
    client: "Disney Creative Tribute",
    tools: ["Photoshop", "Radial Composition", "Key Visual Design"],
    image: "/assets/work/graphic/big-hero-6.jpg",
    aspect: "portrait",
    description: "Promotional film one-sheet design featuring Baymax with Hiro Hamada and character wheel layout in bold Disney red aesthetics.",
  },
  {
    id: "cheetos-pack",
    no: "19",
    title: "Cheetos Fire Edition Packaging Concept",
    category: "Packaging & Identity",
    client: "Frito-Lay Concept Work",
    tools: ["Illustrator", "Photoshop", "Packaging Layout"],
    image: "/assets/work/graphic/cheetos-pack.jpg",
    aspect: "square",
    description: "Custom snack packaging artwork featuring Chester Cheetah mascot, bilingual Korean typography, and high-energy flame backdrop.",
  },
  {
    id: "candy-bake-cookie",
    no: "20",
    title: "Candy Bake Choco Cookie Campaign",
    category: "Advertising & Posters",
    client: "Candy Bake Confectionery",
    tools: ["Photoshop", "Lighting Effects", "Food Typography"],
    image: "/assets/work/graphic/candy-bake-cookie.jpg",
    aspect: "portrait",
    description: "High-contrast commercial poster emphasizing indulgence with dripping chocolate textures and bold confectionery branding.",
  },
  {
    id: "hbk-grand-opening",
    no: "21",
    title: "House of Biryanis & Kebabs - Grand Opening Banner",
    category: "Restaurant & Banners",
    client: "House of Biryanis & Kebabs (Atlanta, GA)",
    tools: ["Photoshop", "Digital Billboard", "Outdoor Banner"],
    image: "/assets/work/graphic/hbk-grand-opening.jpg",
    aspect: "landscape",
    description: "Wide-format celebratory grand opening billboard designed for roadside signage and social media announcements in Atlanta, GA.",
  },
  {
    id: "hbk-menu",
    no: "22",
    title: "House of Biryanis & Kebabs - Restaurant Menu Sheet",
    category: "Restaurant & Banners",
    client: "House of Biryanis & Kebabs",
    tools: ["Illustrator", "Menu Typography", "Print Production"],
    image: "/assets/work/graphic/hbk-menu.jpg",
    aspect: "portrait",
    description: "Comprehensive multi-column restaurant menu sheet balancing appetite appeal, category clarity, and ornate brand motifs.",
  },
  {
    id: "matcha-ice-cream",
    no: "23",
    title: "Food Time Fresh Matcha Ice Cream Cover",
    category: "Advertising & Posters",
    client: "Food Time Editorial",
    tools: ["Photoshop", "Editorial Design", "Minimal Layout"],
    image: "/assets/work/graphic/matcha-ice-cream.jpg",
    aspect: "portrait",
    description: "Minimalist editorial magazine cover design pairing serene matcha green palettes with crisp modern typography and clean framing.",
  },
  {
    id: "lets-go-shopping",
    no: "24",
    title: "Let's Go Shopping Fashion 50% Sale Poster",
    category: "Advertising & Posters",
    client: "Retail Apparel Campaign",
    tools: ["Photoshop", "Visual Hierarchy", "Sale Typography"],
    image: "/assets/work/graphic/lets-go-shopping.jpg",
    aspect: "portrait",
    description: "High-impact retail promotional poster with bold geometric badges, vibrant color pop, and clear promotional urgency.",
  },
  {
    id: "maghil-hub-career",
    no: "25",
    title: "Maghil Hub - Career Opportunities Await You",
    category: "Packaging & Identity",
    client: "Maghil Hub Official",
    tools: ["Photoshop", "3D Composition", "Social Media"],
    image: "/assets/work/graphic/maghil-hub-career.jpg",
    aspect: "portrait",
    description: "Engaging corporate recruitment creative combining modern 3D character illustrations with clean corporate design language.",
  },
  {
    id: "eco-blossom-sign",
    no: "26",
    title: "Eco Blossom Architectural Signboard Identity",
    category: "Packaging & Identity",
    client: "Eco Blossom Brand Identity",
    tools: ["Illustrator", "Mockup Visualization", "Brand Identity"],
    image: "/assets/work/graphic/eco-blossom-sign.jpg",
    aspect: "landscape",
    description: "Photorealistic architectural signboard and outdoor retail facade visualization for a sustainable lifestyle brand.",
  },
  {
    id: "elysium-dj-night",
    no: "27",
    title: "Elysium Club DJ Night Event Poster",
    category: "Creative Art",
    client: "Elysium Nightlife",
    tools: ["Photoshop", "Neon Lighting", "Party Flyer"],
    image: "/assets/work/graphic/elysium-dj-night.jpg",
    aspect: "portrait",
    description: "Atmospheric club night promotional flyer featuring neon glow effects, typographic depth, and high-energy nightlife aesthetics.",
  },
  {
    id: "unicorn-mountain",
    no: "28",
    title: "Nightfall Unicorn Silhouette Vector Artwork",
    category: "Creative Art",
    client: "Digital Vector Series",
    tools: ["Adobe Illustrator", "Vector Geometry", "Minimal Gradient"],
    image: "/assets/work/graphic/unicorn-mountain.jpg",
    aspect: "landscape",
    description: "Polygon vector landscape art depicting a mystical unicorn standing on a mountain precipice under a crescent moonlit sky.",
  },
  {
    id: "merry-christmas-banner",
    no: "29",
    title: "Merry Christmas Festive Retail Banner",
    category: "Advertising & Posters",
    client: "Seasonal Campaign",
    tools: ["Photoshop", "Digital Illustration", "Festive Design"],
    image: "/assets/work/graphic/merry-christmas-banner.jpg",
    aspect: "landscape",
    description: "Warm festive promotional banner with Christmas tree decorations, glowing orbs, and holiday shopping callouts.",
  },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<"graphic" | "uiux" | "frontend">("graphic");
  const [viewMode, setViewMode] = useState<"visual" | "list">("visual");
  const [graphicViewMode, setGraphicViewMode] = useState<"slider" | "grid">("slider");
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicProject | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedGraphic(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-slide every 3 seconds (3s once)
  useEffect(() => {
    if (activeFilter !== "graphic") return;
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, activeFilter]);

  const displayedProjects = resumeProjects.filter((p) => {
    if (activeFilter === "uiux") return p.discipline === "UI/UX Design" || p.discipline === "UI/UX & Frontend Design";
    if (activeFilter === "frontend") return p.discipline === "Frontend" || p.discipline === "UI/UX & Frontend Design";
    return false;
  });

  const filteredGraphics = graphicProjects;

  return (
    <section id="my-work" className="relative py-16 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* ── Section Header (Centered) ── */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#AAFF00" }} />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white uppercase tracking-tight text-center">
              Featured Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-xl leading-relaxed text-center mx-auto">
              Explore interactive UI mockups, production Figma architectures, and responsive web applications with direct links.
            </p>
          </div>

          {/* Controls: Filter Tabs + View Mode Toggle (Centered) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-full">
            {/* Filter Segment (Clean single-row, nowrap, responsive & smooth scrollable) */}
            <div className="w-full max-w-full flex justify-center overflow-hidden">
              <div
                className="flex items-center flex-nowrap whitespace-nowrap p-1 rounded-sm border border-white/25 bg-[#090909] font-mono text-xs overflow-x-auto scroll-smooth no-scrollbar max-w-full touch-pan-x"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {[
                  {
                    key: "graphic",
                    desktop: `Graphic Design (${graphicProjects.length})`,
                    mobile: `Graphic (${graphicProjects.length})`,
                  },
                  {
                    key: "uiux",
                    desktop: "UI/UX Design (05)",
                    mobile: "UI/UX (05)",
                  },
                  {
                    key: "frontend",
                    desktop: "Frontend Development (02)",
                    mobile: "Frontend (02)",
                  },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={(e) => {
                      setActiveFilter(tab.key as typeof activeFilter);
                      e.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        inline: "center",
                        block: "nearest",
                      });
                    }}
                    className={`px-2.5 sm:px-3 py-1.5 uppercase tracking-wider transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap ${
                      activeFilter === tab.key
                        ? "bg-white text-black font-semibold"
                        : "text-zinc-400 hover:text-white hover:bg-white/10 font-medium"
                    }`}
                  >
                    <span className="hidden sm:inline">{tab.desktop}</span>
                    <span className="sm:hidden">{tab.mobile}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Switcher (Visual Cards vs Compact List) */}
            {activeFilter !== "graphic" && (
              <div className="inline-flex items-center flex-nowrap whitespace-nowrap p-1 rounded-sm border border-white/25 bg-[#090909] font-mono text-xs shrink-0">
                <button
                  onClick={() => setViewMode("visual")}
                  className={`px-3 py-1.5 uppercase flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === "visual"
                      ? "bg-[#AAFF00] text-black font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/10 font-medium"
                  }`}
                  title="Visual Cards with Device Mockups"
                >
                  <LayoutGrid size={13} /> Visual
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-3 py-1.5 uppercase flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === "list"
                      ? "bg-white text-black font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/10 font-medium"
                  }`}
                  title="Compact Table List"
                >
                  <List size={13} /> List
                </button>
              </div>
            )}

            {/* Graphic Design View Mode Switcher: 2-Row Slider vs All 29 Grid */}
            {activeFilter === "graphic" && (
              <div className="inline-flex items-center flex-nowrap whitespace-nowrap p-1 rounded-sm border border-white/25 bg-[#090909] font-mono text-xs shrink-0">
                <button
                  onClick={() => setGraphicViewMode("slider")}
                  className={`px-3 py-1.5 uppercase flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    graphicViewMode === "slider"
                      ? "bg-[#AAFF00] text-black font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/10 font-medium"
                  }`}
                  title="2-Row Auto-Sliding View"
                >
                  <SlidersHorizontal size={13} /> 2-Row Slider
                </button>
                <button
                  onClick={() => setGraphicViewMode("grid")}
                  className={`px-3 py-1.5 uppercase flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    graphicViewMode === "grid"
                      ? "bg-white text-black font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/10 font-medium"
                  }`}
                  title="View All 29 Artworks In Full Grid"
                >
                  <LayoutGrid size={13} /> All Grid ({graphicProjects.length})
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Mode 1A: Visual Showcase Cards (Refined, Sleek Dimensions) ── */}
        {activeFilter !== "graphic" && viewMode === "visual" && (
          <div className="w-full max-w-6xl mx-auto space-y-3.5 sm:space-y-4 animate-in fade-in duration-300">
            {displayedProjects.map((p) => {
              const primaryLink = p.liveLink || p.figmaLink || "#";
              return (
                <div
                  key={p.id}
                  className="group rounded-xl border border-white/20 bg-[#080808] hover:border-white/40 transition-all duration-300 p-3.5 sm:p-4 lg:p-4.5 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-6 items-center shadow-xl relative overflow-hidden"
                >
                  {/* Left Column: Project Specs (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-2 sm:space-y-2.5">
                    <div>
                      {/* Top Index & Discipline Badge */}
                      <div className="flex items-center gap-2 mb-1 font-mono">
                        <span className="text-xs font-semibold text-[#AAFF00]">
                          {p.no}
                        </span>
                        <span className="text-zinc-500">/</span>
                        <span className="px-2.5 py-0.5 rounded border border-white/25 bg-white/[0.06] text-xs text-zinc-200 uppercase tracking-wider font-medium">
                          {p.discipline}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-normal text-white uppercase tracking-tight group-hover:text-[#AAFF00] transition-colors">
                        <a
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-inherit"
                        >
                          {p.title}
                        </a>
                      </h3>

                      {/* Subtitle / Category Comment */}
                      <p className="text-xs font-mono text-[#AAFF00] font-medium mt-0.5">
                        // {p.highlight.toUpperCase()}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-300 font-normal mt-1 leading-relaxed line-clamp-2">
                        {p.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
                        {p.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded border border-white/25 bg-white/[0.06] text-xs font-medium text-zinc-200 hover:border-white/40 hover:text-white transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Direct Action Links */}
                    <div className="flex flex-wrap items-center gap-2 font-mono pt-1">
                      {p.liveLink && (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#AAFF00] text-black font-semibold text-[10px] uppercase tracking-wider hover:scale-105 transition-all shadow-md cursor-pointer"
                        >
                          Live Webpage <ArrowUpRight size={13} />
                        </a>
                      )}
                      {p.figmaLink && (
                        <a
                          href={p.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/20 bg-[#120f24] text-[#C4B5FD] font-semibold text-[10px] uppercase tracking-wider hover:bg-[#8B5CF6] hover:text-black hover:border-[#8B5CF6] transition-all shadow-md cursor-pointer"
                        >
                          Figma File <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Showcase (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden border border-white/20 bg-black group-hover:border-[#AAFF00]/50 transition-all duration-300 shadow-xl">
                    <a
                      href={primaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full relative aspect-[16/9] lg:aspect-[1.85/1] cursor-pointer overflow-hidden bg-black"
                      title={`Open ${p.title}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={`${p.title} Preview`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 select-none group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-sm bg-black/90 border border-[#AAFF00] text-[#AAFF00] font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest shadow-2xl flex items-center gap-2">
                          Explore Live Project <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Mode 1B: Compact List View (Direct Table Layout) ── */}
        {activeFilter !== "graphic" && viewMode === "list" && (
          <div className="divide-y divide-white/10 border-b border-white/10 animate-in fade-in duration-200">
            {displayedProjects.map((p) => {
              const primaryLink = p.liveLink || p.figmaLink || "#";
              return (
                <div
                  key={p.id}
                  className="group py-8 px-2 sm:px-4 transition-all duration-300 hover:bg-white/[0.03] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  {/* Left: Index & Title */}
                  <div className="flex items-start sm:items-center gap-6">
                    <span className="text-xs font-mono text-zinc-400 font-medium uppercase tracking-widest pt-1 sm:pt-0 group-hover:text-[#AAFF00] transition-colors w-8">
                      {p.no}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono uppercase tracking-[0.15em] px-2.5 py-0.5 rounded border border-white/20 text-zinc-200 font-medium group-hover:border-white/40 transition-colors">
                          {p.discipline}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          // {p.highlight}
                        </span>

                        {p.figmaLink && (
                          <a
                            href={p.figmaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded transition-all hover:scale-105 inline-flex items-center gap-1 cursor-pointer"
                            style={{
                              backgroundColor: "#8B5CF622",
                              color: "#C4B5FD",
                              border: "1px solid #8B5CF644",
                            }}
                          >
                            Figma File ↗
                          </a>
                        )}

                        {p.liveLink && (
                          <a
                            href={p.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded transition-all hover:scale-105 inline-flex items-center gap-1 cursor-pointer"
                            style={{
                              backgroundColor: "#AAFF0022",
                              color: "#AAFF00",
                              border: "1px solid #AAFF0044",
                            }}
                          >
                            Live Webpage ↗
                          </a>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-tight text-white group-hover:text-[#AAFF00] transition-all duration-200">
                        <a
                          href={primaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-inherit"
                        >
                          {p.title}
                        </a>
                      </h3>

                      <p className="text-sm text-zinc-300 mt-1.5 max-w-2xl line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Tools & Action Link Button(s) */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 self-stretch lg:self-auto pt-3 lg:pt-0 border-t border-white/10 lg:border-none font-mono">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {p.tools.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-zinc-200 font-medium px-2.5 py-1 rounded-sm border border-white/20 bg-white/[0.05]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {p.figmaLink && (
                        <a
                          href={p.figmaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-sm border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 text-[#C4B5FD] text-[10px] font-mono uppercase tracking-wider hover:bg-[#8B5CF6] hover:text-black font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105"
                          title={`Open ${p.title} Figma File`}
                        >
                          Figma ↗
                        </a>
                      )}
                      {p.liveLink && (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-sm border border-[#AAFF00]/40 bg-[#AAFF00]/10 text-[#AAFF00] text-[10px] font-mono uppercase tracking-wider hover:bg-[#AAFF00] hover:text-black font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105"
                          title={`Open ${p.title} Live Webpage`}
                        >
                          Live Web ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Mode 2: Graphic Design Showcase (Slider or Full Grid of all 29 Works) ── */}
        {activeFilter === "graphic" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {graphicViewMode === "slider" ? (
              <>
                {/* ── 2-Row Horizontal Auto-Sliding Gallery (5s Interval) ── */}
                <div
                  ref={sliderRef}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="grid grid-rows-2 grid-flow-col auto-cols-[220px] sm:auto-cols-[270px] md:auto-cols-[300px] gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar select-none cursor-grab active:cursor-grabbing"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {filteredGraphics.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedGraphic(item)}
                      className="group relative h-[175px] sm:h-[210px] md:h-[235px] snap-start rounded-xl border border-white/20 bg-[#080808] overflow-hidden hover:border-[#AAFF00] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.01]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Corner Badging */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
                        <span className="text-[9px] font-mono font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-white/80 truncate max-w-[75%]">
                          {item.no} // {item.category}
                        </span>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/80 border border-white/25 flex items-center justify-center text-white/70 group-hover:border-[#AAFF00] group-hover:text-[#AAFF00] transition-colors shrink-0">
                          <Eye size={12} />
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 pointer-events-none z-10">
                        <span className="text-xs font-mono text-[#AAFF00] font-semibold uppercase tracking-wider block mb-0.5 truncate">
                          {item.client}
                        </span>
                        <h4 className="text-xs sm:text-sm font-normal text-white uppercase tracking-tight line-clamp-1">
                          {item.title}
                        </h4>
                        <div className="mt-1 flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                          <ZoomIn size={12} className="text-[#AAFF00]" />
                          <span>Click to view in high resolution</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* ── Full Grid View: All 29 Designs Displayed Simultaneously ── */
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 animate-in fade-in duration-300">
                {filteredGraphics.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedGraphic(item)}
                    className="group relative aspect-square rounded-xl border border-white/20 bg-[#080808] overflow-hidden hover:border-[#AAFF00] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Corner Badging */}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none z-10">
                      <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-black/85 backdrop-blur-md border border-white/25 text-zinc-100 truncate max-w-[75%]">
                        {item.no} // {item.category}
                      </span>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/80 border border-white/25 flex items-center justify-center text-white/70 group-hover:border-[#AAFF00] group-hover:text-[#AAFF00] transition-colors shrink-0">
                        <Eye size={10} />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 sm:p-3 pointer-events-none z-10">
                      <span className="text-xs font-mono text-[#AAFF00] font-semibold uppercase tracking-wider block truncate">
                        {item.client}
                      </span>
                      <h4 className="text-xs sm:text-sm font-normal text-white uppercase tracking-tight line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── High-Resolution Lightbox Modal ── */}
      {selectedGraphic && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedGraphic(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded border border-white/20 bg-[#080808] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/15 bg-[#0c0c0c]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#AAFF00" }} />
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-200 font-semibold">
                  {selectedGraphic.no} // {selectedGraphic.category}
                </span>
                <span className="text-zinc-500 font-mono">|</span>
                <span className="font-mono text-xs sm:text-sm text-[#AAFF00] font-semibold">
                  {selectedGraphic.client}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedGraphic.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded border border-white/20 text-zinc-200 hover:text-white hover:border-white/40 font-mono text-xs uppercase flex items-center gap-1.5 transition-colors font-medium"
                  title="Open raw image in new tab"
                >
                  <ExternalLink size={12} /> Raw Image
                </a>
                <button
                  onClick={() => setSelectedGraphic(null)}
                  className="w-8 h-8 rounded border border-white/20 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="flex-1 min-h-[300px] max-h-[64vh] bg-black/80 flex items-center justify-center p-4 overflow-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedGraphic.image}
                alt={selectedGraphic.title}
                className="max-h-[60vh] max-w-full object-contain rounded border border-white/10 shadow-2xl"
                decoding="async"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 border-t border-white/15 bg-[#0a0a0a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-normal text-white uppercase tracking-tight">
                  {selectedGraphic.title}
                </h3>
                <p className="text-sm text-zinc-300 font-mono mt-1 max-w-2xl leading-relaxed">
                  {selectedGraphic.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 shrink-0 font-mono">
                {selectedGraphic.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-zinc-200 font-medium px-2.5 py-1 rounded-sm border border-white/20 bg-white/[0.05]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
