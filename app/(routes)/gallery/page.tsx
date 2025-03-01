// /app/(routes)/gallery/page.tsx
import GalleryPageClient from "../../components/gallery/GalleryPageClient";
import { fetchGallery } from "@/sanity/services/galleryServices";

export default async function GalleryPage() {
  // Next.js will cache this fetch per the options in fetchGallery
  const galleryImages = await fetchGallery();
  return <GalleryPageClient galleryImages={galleryImages} />;
}
