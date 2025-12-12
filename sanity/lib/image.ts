// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }



// sanity/lib/image.ts

import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { dataset, projectId } from '../env';

// Create a Sanity image URL builder
const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Generates a URL for a Sanity image source
 * @param source Sanity image object or string reference
 * @returns URL string
 */
export const urlFor = (source: SanityImageSource) => builder.image(source);
