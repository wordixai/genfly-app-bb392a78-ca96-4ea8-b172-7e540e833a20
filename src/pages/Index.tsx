import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import CompanyLogos from "@/components/CompanyLogos";
import FeatureSection from "@/components/FeatureSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBanner />
      
      <main className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] z-10">
        <div className="mt-8 max-w-[390px] lg:max-w-6xl px-[var(--page-px)] w-full mx-auto">
          <HeroSection />
          <DemoSection />
        </div>
        
        <CompanyLogos />
        <FeatureSection />
        <CapabilitiesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
      </main>
    </div>
  );
};

export default Index;