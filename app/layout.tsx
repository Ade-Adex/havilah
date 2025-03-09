"use client";

import { robotoSlab, montserrat } from "@/app/fonts/fonts";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import LayoutWrapper from "./components/LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://havilaheventsplace.com/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://havilaheventsplace.com/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://havilaheventsplace.com/favicon-16x16.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://havilaheventsplace.com/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              name: "Havilah Event Place",
              description:
                "Havilah Event Place is the top event venue in Ogbomoso, Oyo state, Nigeria. Perfect for weddings, conferences, and special occasions.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Beside Adeyi Filling Station, Orogun Area, Iresa Road",
                addressLocality: "Ogbomoso",
                addressRegion: "Oyo",
                addressCountry: "NG",
              },
              image: "https://havilaheventsplace.com/images/Havila_Logo.png",
              url: "https://havilaheventsplace.com",
              telephone: "+2348033734820",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "22:00",
                },
              ],
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://havilaheventsplace.com/book",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${robotoSlab.variable} ${montserrat.variable} antialiased`}
      >
        <MantineProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
