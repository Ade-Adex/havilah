// /app/page.tsx

import SEO_METADATA from "./utils/metadataConfig";
import HeroHeader from "./components/home/hero/HeroHeader";
import WelcomeSection from "./components/home/WelcomeSection";
import { Metadata } from "next";
import KitchenSection from "./components/home/KitchenSection";
import EventSection from "./components/home/EventSection";
import Services from "./components/home/Services";
import { fetchEvents } from "@/sanity/services/upcomingEventServices";
import { Suspense } from "react";
import EventSkeleton from "./components/home/EventSkeleton";
import Loader from "./components/Loader";


export const metadata: Metadata = SEO_METADATA.home;

export default async function Home() {
  const events = await fetchEvents();

  return (
    <main>
      <HeroHeader />
      <Services/>
      <WelcomeSection />
      <Suspense fallback={<div className="flex justify-center items-center w-full "><Loader/></div>}>
        <KitchenSection />
      </Suspense>

      {/* Wrap EventSection in Suspense */}
      <Suspense fallback={<EventSkeleton/>}>
        <EventSection events={events} />
      </Suspense>
    </main>
  );
}
