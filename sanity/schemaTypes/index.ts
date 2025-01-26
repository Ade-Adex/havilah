import { type SchemaTypeDefinition } from 'sanity'
import { gallerySchema } from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallerySchema],
}
