import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-main text-foreground">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <Dashboard />
    </div>
  );
};

export default Index;
