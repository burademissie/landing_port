import {ThemeToggle} from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Skills } from "../components/skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {

    return <div className="min-h-screen bg-background text-forground overflow-x-hidden">
        
        <ThemeToggle />

        <StarBackground />

        <NavBar />

        <main>
            <HeroSection />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>

    </div>;
}

