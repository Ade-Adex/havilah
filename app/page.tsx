// /app/page.tsx

import SEO_METADATA from "./utils/metadataConfig";
import HeroHeader from "./components/home/hero/HeroHeader";
import WelcomeSection from "./components/home/WelcomeSection";
import { Metadata } from "next";
import KitchenSection from "./components/home/KitchenSection";
import EventSection from "./components/home/EventSection";
import Services from "./components/home/Services";

export const metadata: Metadata = SEO_METADATA.home;

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <Services/>
      <WelcomeSection />
      <KitchenSection />
      <EventSection />
    </main>
  );
}
