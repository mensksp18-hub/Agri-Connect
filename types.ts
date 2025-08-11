
export enum ProductCategory {
  Vegetable = "Légume",
  Fruit = "Fruit",
  Cereal = "Céréale",
  Tuber = "Tubercule",
  Legume = "Légumineuse",
  Spice = "Épice",
}

export enum FarmingMethod {
    Organic = "Bio",
    Conventional = "Conventionnel",
    FairTrade = "Commerce Équitable"
}

export interface Producer {
  id: string;
  name: string;
  location: string;
  specialties: ProductCategory[];
  certifications: FarmingMethod[];
  experience: number;
  profileImage: string;
  farmImages: string[];
  rating: number;
  story: string;
}

export interface Product {
  id: string;
  name:string;
  producerId: string;
  category: ProductCategory;
  price: number;
  unit: 'kg' | 'pièce' | 'tas' | 'botte' | 'sac';
  description: string;
  imageUrl: string;
  nutritionInfo?: string;
  farmingMethod: FarmingMethod;
  season: 'Toute l\'année' | 'Saison des pluies' | 'Saison sèche';
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export enum OrderStatus {
    Pending = "En attente",
    Confirmed = "Confirmée",
    Preparing = "En préparation",
    Shipped = "Expédiée",
    Delivered = "Livrée",
    Cancelled = "Annulée"
}

export interface Order {
    id: string;
    customerName: string;
    items: CartItem[];
    total: number;
    status: OrderStatus;
    deliveryMethod: 'Livraison à domicile' | 'Point de retrait' | 'Retrait à la ferme';
    orderDate: string;
}
