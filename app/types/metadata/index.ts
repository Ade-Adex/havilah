// /app/types/metadata/index.ts

export interface MetadataConfig {
        title: string;
        description: string;
        openGraph?: {
          title?: string;
          description?: string;
          url?: string;
          image?: string;
          type?: string;
        };
        twitter?: {
          card?: string;
          title?: string;
          description?: string;
          image?: string;
        };
      }
      