import Navbar from "../components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import AboutSection from "../components/sections/AboutSections";
import ServicesSection from "@/components/sections/ServicesSection";
import MaxySection from "@/components/sections/MaxySection";
import ThoughtsSection from "@/components/sections/ThoughtsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import SocialSection from "@/components/sections/SocialSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <MaxySection />
        <ThoughtsSection />
        <ResourcesSection />
        <SocialSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
