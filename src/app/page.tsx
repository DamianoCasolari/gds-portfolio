import HeroSection from "../components/sections/home/HeroSection";
import ProjectGrid from "@/src/components/sections/home/ProjectGrid";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div id="hero" className="scroll-mt-[116px] sm:scroll-mt-20">
        <HeroSection />
      </div>

      <ProjectGrid />
    </div>
  );
}
