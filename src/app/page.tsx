import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/ui/sections/HeroSection";
import FeaturesSection from "@/components/ui/sections/FeaturesSection";
import SecuritySection from "@/components/ui/sections/SecuritySection";
import TestimonialsSection from "@/components/ui/sections/TestimonialsSection";
import NewsletterSection from "@/components/ui/sections/NewsletterSection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      {/* <SecurityAppsSection /> */}
      <SecuritySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
