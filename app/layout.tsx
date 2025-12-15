// import { robotoSlab, montserrat } from '@/app/fonts/fonts'
// import './globals.css'
// import Providers from '@/app/providers'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/favicon.ico" type="image/x-icon" />
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />

//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://havilaheventsplace.com/" />

//         {/* JSON-LD */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               '@context': 'https://schema.org',
//               '@type': 'EventVenue',
//               name: 'Havilah Event Place',
//               description:
//                 'Havilah Event Place is the top event venue in Ogbomoso, Oyo state, Nigeria.',
//               url: 'https://havilaheventsplace.com',
//             }),
//           }}
//         />
//       </head>

//       <body
//         className={`${robotoSlab.variable} ${montserrat.variable} antialiased`}
//       >
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   )
// }












import type { Metadata } from 'next'
import { robotoSlab, montserrat } from '@/app/fonts/fonts'
import './globals.css'
import Providers from '@/app/providers'

/**
 * Global metadata (applies to all pages)
 * Page-specific metadata can override this in page.tsx
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://havilaheventsplace.com'),
  title: {
    default: 'Havilah Event Place',
    template: '%s | Havilah Event Place',
  },
  description:
    'Havilah Event Place is the top event venue in Ogbomoso, Oyo State, Nigeria.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://havilaheventsplace.com/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSlab.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
