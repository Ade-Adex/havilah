// schemas/gallerySchema.ts

import { SchemaTypeDefinition } from 'sanity';

export const gallerySchema: SchemaTypeDefinition = {
  name: 'gallerySchema',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Events', value: 'events' },
          { title: 'Hall', value: 'hall' },
          { title: 'Videos', value: 'videos' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'images',
      title: 'Images/Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'media',
          fields: [
            {
              name: 'src',
              title: 'Source',
              type: 'file', // This allows uploading files (images, videos, etc.)
              options: {
                accept: ['image/*', 'video/*'], // Accept both images and videos
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
