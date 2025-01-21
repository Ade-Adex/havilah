// app/(routes)/about-us/leadership/layout.tsx

// app/(routes)/about-us/leadership/layout.tsx

import SEO_METADATA from "@/app/utils/metadataConfig";

// Set metadata here for the leadership section
export const metadata = SEO_METADATA.aboutUs;

export default function LeadershipLayout({
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
