import HeroSection from "../components/sections/HeroSection";
import AboutMeSection from "../components/sections/AboutMeSection";
import ServicesSection from "../components/sections/ServicesSection";
import HardSkillsSection from "../components/sections/HardSkillsSection";
import HowWeGonnaWorkSection from "../components/sections/HowWeGonnaWorkSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <HardSkillsSection />
        <HowWeGonnaWorkSection />
      </main>
    </>
  );
}
