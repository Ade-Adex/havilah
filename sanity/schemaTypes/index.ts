// /sanity/schemaTypes/index.ts

import { type SchemaTypeDefinition } from 'sanity'
import { gallerySchema } from './gallery'
import { eventSchema } from './upcomingEvent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallerySchema, eventSchema],
}
