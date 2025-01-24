// app/(routes)/gallery/layout.tsx

import SEO_METADATA from "@/app/utils/metadataConfig";

// Set metadata here for the leadership section
export const metadata = SEO_METADATA.floor;

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
