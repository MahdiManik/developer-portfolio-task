import ErrorBoundary from "@/components/common/ErrorBoundary";
import Skills from "@/components/home/sections/Skills";
import WorkProcessSection from "@/components/home/sections/WorkProcessSection";
import ContactSection from "@/components/home/sections/ContactSection";
import FooterSection from "@/components/home/sections/FooterSection";
import AboutSection from "@/components/home/sections/AboutSection";
import Hero from "@/components/home/sections/Hero";

export default function Home() {
  return (
    <main>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <Skills />
      </ErrorBoundary>

      <ErrorBoundary>
        <AboutSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <WorkProcessSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <ContactSection />
      </ErrorBoundary>

      <FooterSection />
    </main>
  );
}
