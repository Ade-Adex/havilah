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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://havilaheventsplace.com/" />
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
