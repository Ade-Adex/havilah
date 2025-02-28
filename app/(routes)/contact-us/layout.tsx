// app/(routes)/contact-us/layout.tsx

import SEO_METADATA from "@/app/utils/metadataConfig";

// Set metadata here for the leadership section
export const metadata = SEO_METADATA.contactUs;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
