// /app/types/gallery.ts

export interface Media {
        src: {
          asset: {
            url: string;
          };
        };
        description: string;
      }
      
      export interface Gallery {
        category: 'event' | 'hall' | 'video';
        images: Media[];
      }
      