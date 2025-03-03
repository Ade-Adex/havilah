"use client";

import React from "react";
import ContactBg from "@/public/images/contact-bg.png";
import { usePathname } from "next/navigation";
import PagesHero from "@/app/components/PagesHero";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { SnackbarProvider, useSnackbar } from "notistack";
import ContactHeader from "@/app/components/contact-us/ContactHeader";
import ContactForm from "@/app/components/contact-us/ContactForm";
import ContactMap from "@/app/components/contact-us/ContactMap";


const ContactUaPage = () => {
  return (
    <SnackbarProvider
      maxSnack={1}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MyApp />
    </SnackbarProvider>
  );
};

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  const pathname = usePathname();
  const formattedPathname = pathname.replace("/", "");

  const position: LatLngExpression = [8.1339, 4.2432];

  return (
    <main>
      <PagesHero bgImage={ContactBg} pageTitle={formattedPathname} />
      <ContactHeader/>
      <ContactForm enqueueSnackbar={enqueueSnackbar} />
      <ContactMap position={position}/>
    </main>
  );
}

export default ContactUaPage;
