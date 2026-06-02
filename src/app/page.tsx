import { Navbar, HeroSection, QuickCategories } from "@/components/hero";
import { AttractionsSection, HiddenGemsSection } from "@/components/attractions";
import { HotelsSection } from "@/components/hotels";
import { FoodSection } from "@/components/food";
import { ItinerarySection } from "@/components/itinerary";
import { AIConciergeSection } from "@/components/ai-concierge";
import { BudgetPlannerSection } from "@/components/budget";
import { TransportSection, WeatherSection, PhotographySection, ShoppingSection } from "@/components/misc-sections";
import { Footer } from "@/components/footer";
import { InteractiveMap } from "@/components/map";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <QuickCategories />
      <AttractionsSection />
      <HiddenGemsSection />
      <HotelsSection />
      <FoodSection />
      <ShoppingSection />
      <InteractiveMap />
      <AIConciergeSection />
      <ItinerarySection />
      <BudgetPlannerSection />
      <TransportSection />
      <WeatherSection />
      <PhotographySection />
      <Footer />
    </main>
  );
}
