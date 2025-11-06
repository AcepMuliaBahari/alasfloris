export interface Plant {
  id: number;
  name: string;
  category: 'indoor' | 'outdoor' | 'mini' | 'premium';
  imageUrl: string;
  price: number;
  rentalPrice: number;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  type: 'before' | 'after' | 'process';
}

export type CartItem = Plant & {
  quantity: number;
};

export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}
