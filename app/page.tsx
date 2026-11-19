import Preloader from "@/components/Preloader";
import NavDock from "@/components/NavDock";
import WhatsAppBot from "@/components/WhatsAppBot";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <NavDock />
      <WhatsAppBot />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
