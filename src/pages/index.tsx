import AboutMeSection from "../components/sections/AboutMeSection";
import HardSkillsSection from "../components/sections/HardSkillsSection";
import HeroSection from "../components/sections/HeroSection";
import HowWeGonnaWorkSection from "../components/sections/HowWeGonnaWorkSection";
import ServicesSection from "../components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <HardSkillsSection />
      <HowWeGonnaWorkSection />
    </main>
  );
}
