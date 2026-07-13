export interface Car {
    id: string;
    name: string;
    brand: string;
    category: string;
    seats: number;
    transmission: string;
    fuel_type: string;
    price_per_day: number;
    image_url: string;
    description: string | null;
    is_available: boolean;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
  }