// app/fonts/fonts.ts

import { Roboto_Slab, Montserrat } from "next/font/google";

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weights as needed
  variable: "--font-roboto-slab",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
  variable: "--font-montserrat",
});