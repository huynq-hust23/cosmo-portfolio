import ThemeToggles from "@/components/ThemeToggles";
import { StarBackground } from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggles />

            <StarBackground />

            <Navbar />

            <main>
                <HeroSection />

                <AboutSection />

                <SkillsSection />
            </main>
        </div>
    );
}

export default Home;
