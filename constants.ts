
import { Producer, Product, ProductCategory, FarmingMethod, Order, OrderStatus } from './types';

export const PRODUCERS: Producer[] = [
  { id: 'p1', name: 'Coopérative des Maraîchers de Bohicon', location: 'Bohicon', specialties: [ProductCategory.Vegetable], certifications: [FarmingMethod.Conventional], experience: 15, rating: 4.5, profileImage: 'https://picsum.photos/id/1015/200/200', farmImages: ['https://picsum.photos/id/1016/600/400', 'https://picsum.photos/id/1018/600/400'], story: 'Depuis 2008, notre coopérative unit les forces des agriculteurs locaux pour offrir les légumes les plus frais.' },
  { id: 'p2', name: 'Ferme Bio Akassa', location: 'Porto-Novo', specialties: [ProductCategory.Fruit, ProductCategory.Vegetable], certifications: [FarmingMethod.Organic], experience: 8, rating: 4.8, profileImage: 'https://picsum.photos/id/1025/200/200', farmImages: ['https://picsum.photos/id/1028/600/400'], story: 'Passionnés par l\'agriculture durable, nous cultivons des produits sains, sans pesticides, pour le bien-être de tous.' },
  { id: 'p3', name: 'Les Vergers du Soleil', location: 'Cotonou', specialties: [ProductCategory.Fruit], certifications: [FarmingMethod.Conventional], experience: 20, rating: 4.7, profileImage: 'https://picsum.photos/id/1035/200/200', farmImages: ['https://picsum.photos/id/1036/600/400'], story: 'Nos ananas et mangues sont gorgés du soleil du Bénin, cultivés avec un savoir-faire transmis de génération en génération.' },
  { id: 'p4', name: 'Grains d\'Avenir Parakou', location: 'Parakou', specialties: [ProductCategory.Cereal, ProductCategory.Legume], certifications: [FarmingMethod.FairTrade], experience: 12, rating: 4.6, profileImage: 'https://picsum.photos/id/1045/200/200', farmImages: ['https://picsum.photos/id/1048/600/400'], story: 'Nous produisons du maïs, du riz et des arachides en respectant les principes du commerce équitable.' },
  { id: 'p5', name: 'Racines de Natitingou', location: 'Natitingou', specialties: [ProductCategory.Tuber], certifications: [FarmingMethod.Conventional], experience: 25, rating: 4.9, profileImage: 'https://picsum.photos/id/1055/200/200', farmImages: ['https://picsum.photos/id/1056/600/400'], story: 'Spécialistes de l\'igname et du manioc, nos tubercules sont la base de la cuisine béninoise.' },
  { id: 'p6', name: 'Épices d\'Abomey', location: 'Abomey', specialties: [ProductCategory.Spice], certifications: [FarmingMethod.Organic], experience: 5, rating: 4.8, profileImage: 'https://picsum.photos/id/1065/200/200', farmImages: ['https://picsum.photos/id/1066/600/400'], story: 'Gingembre, piment, et autres trésors de la terre, cultivés avec passion pour relever vos plats.' },
];

export const PRODUCTS: Product[] = [
  // Légumes
  { id: 'prod1', name: 'Tomate fraîche', producerId: 'p1', category: ProductCategory.Vegetable, price: 300, unit: 'kg', description: 'Belles tomates juteuses, idéales pour vos sauces et salades.', imageUrl: 'https://picsum.photos/seed/tomato/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Toute l\'année', stock: 150 },
  { id: 'prod2', name: 'Oignon violet', producerId: 'p1', category: ProductCategory.Vegetable, price: 400, unit: 'kg', description: 'Oignons violets croquants et savoureux.', imageUrl: 'https://picsum.photos/seed/onion/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Toute l\'année', stock: 200 },
  { id: 'prod3', name: 'Piment vert', producerId: 'p6', category: ProductCategory.Spice, price: 100, unit: 'tas', description: 'Piments frais pour relever tous vos plats.', imageUrl: 'https://picsum.photos/seed/chili/400/300', farmingMethod: FarmingMethod.Organic, season: 'Toute l\'année', stock: 300 },
  { id: 'prod4', name: 'Gombo frais', producerId: 'p2', category: ProductCategory.Vegetable, price: 250, unit: 'kg', description: 'Gombo tendre, parfait pour la sauce gombo.', imageUrl: 'https://picsum.photos/seed/okra/400/300', farmingMethod: FarmingMethod.Organic, season: 'Saison des pluies', stock: 80 },
  { id: 'prod5', name: 'Épinards (Gboma)', producerId: 'p2', category: ProductCategory.Vegetable, price: 150, unit: 'botte', description: 'Feuilles d\'épinards locaux, riches en fer.', imageUrl: 'https://picsum.photos/seed/spinach/400/300', farmingMethod: FarmingMethod.Organic, season: 'Saison des pluies', stock: 120 },
  // Fruits
  { id: 'prod6', name: 'Ananas "Pain de Sucre"', producerId: 'p3', category: ProductCategory.Fruit, price: 700, unit: 'pièce', description: 'Ananas sucré et juteux, une spécialité de la région.', imageUrl: 'https://picsum.photos/seed/pineapple/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Saison sèche', stock: 100 },
  { id: 'prod7', name: 'Mangue "Kent"', producerId: 'p3', category: ProductCategory.Fruit, price: 200, unit: 'pièce', description: 'Mangues charnues et sans fibres, un délice.', imageUrl: 'https://picsum.photos/seed/mango/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Saison sèche', stock: 250 },
  { id: 'prod8', name: 'Banane plantain', producerId: 'p5', category: ProductCategory.Fruit, price: 500, unit: 'tas', description: 'Idéales pour faire de l\'alloco ou des frites de plantain.', imageUrl: 'https://picsum.photos/seed/plantain/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Toute l\'année', stock: 180 },
  { id: 'prod9', name: 'Noix de coco', producerId: 'p3', category: ProductCategory.Fruit, price: 300, unit: 'pièce', description: 'Noix de coco fraîches, pour boire l\'eau ou utiliser la pulpe.', imageUrl: 'https://picsum.photos/seed/coconut/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Toute l\'année', stock: 90 },
  // Céréales
  { id: 'prod10', name: 'Maïs en grain', producerId: 'p4', category: ProductCategory.Cereal, price: 200, unit: 'kg', description: 'Maïs local pour la pâte (akassa) ou le pop-corn.', imageUrl: 'https://picsum.photos/seed/corn/400/300', farmingMethod: FarmingMethod.FairTrade, season: 'Saison des pluies', stock: 500 },
  { id: 'prod11', name: 'Riz local étuvé', producerId: 'p4', category: ProductCategory.Cereal, price: 500, unit: 'kg', description: 'Riz de qualité supérieure, cultivé dans les plaines du Bénin.', imageUrl: 'https://picsum.photos/seed/rice/400/300', farmingMethod: FarmingMethod.FairTrade, season: 'Saison des pluies', stock: 400 },
  // Tubercules
  { id: 'prod12', name: 'Igname "Laboko"', producerId: 'p5', category: ProductCategory.Tuber, price: 450, unit: 'kg', description: 'La meilleure variété d\'igname pour l\'igname pilée.', imageUrl: 'https://picsum.photos/seed/yam/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Saison sèche', stock: 300 },
  { id: 'prod13', name: 'Manioc frais', producerId: 'p5', category: ProductCategory.Tuber, price: 250, unit: 'kg', description: 'Manioc frais pour le gari, le tapioca ou la farine.', imageUrl: 'https://picsum.photos/seed/cassava/400/300', farmingMethod: FarmingMethod.Conventional, season: 'Toute l\'année', stock: 600 },
  // Légumineuses
  { id: 'prod14', name: 'Haricot niébé (Koki)', producerId: 'p4', category: ProductCategory.Legume, price: 600, unit: 'kg', description: 'Haricots à oeil noir, riches en protéines.', imageUrl: 'https://picsum.photos/seed/beans/400/300', farmingMethod: FarmingMethod.FairTrade, season: 'Saison sèche', stock: 200 },
];
// Add more products to reach 200+
for (let i = 15; i <= 200; i++) {
    const randomProducer = PRODUCERS[Math.floor(Math.random() * PRODUCERS.length)];
    const randomCat = Object.values(ProductCategory)[Math.floor(Math.random() * Object.values(ProductCategory).length)];
    PRODUCTS.push({
        id: `prod${i}`,
        name: `${randomCat} #${i}`,
        producerId: randomProducer.id,
        category: randomCat,
        price: 100 + Math.floor(Math.random() * 900),
        unit: 'kg',
        description: `Description générique pour le produit ${i}. Cultivé avec soin par ${randomProducer.name}.`,
        imageUrl: `https://picsum.photos/seed/product${i}/400/300`,
        farmingMethod: Object.values(FarmingMethod)[Math.floor(Math.random() * Object.values(FarmingMethod).length)],
        season: 'Toute l\'année',
        stock: Math.floor(Math.random() * 500),
    });
}


export const ORDERS: Order[] = [
    {
        id: 'ord1',
        customerName: 'Restaurant "Le Délice"',
        items: [
            { ...PRODUCTS.find(p => p.id === 'prod1')!, quantity: 20 },
            { ...PRODUCTS.find(p => p.id === 'prod2')!, quantity: 15 },
        ],
        total: 12000,
        status: OrderStatus.Delivered,
        deliveryMethod: 'Livraison à domicile',
        orderDate: '2024-07-15'
    },
    {
        id: 'ord2',
        customerName: 'Mme. Alima',
        items: [
            { ...PRODUCTS.find(p => p.id === 'prod6')!, quantity: 5 },
            { ...PRODUCTS.find(p => p.id === 'prod12')!, quantity: 10 },
        ],
        total: 8000,
        status: OrderStatus.Shipped,
        deliveryMethod: 'Point de retrait',
        orderDate: '2024-07-20'
    },
    {
        id: 'ord3',
        customerName: 'Cantine Scolaire "Les Petits Génies"',
        items: [
            { ...PRODUCTS.find(p => p.id === 'prod11')!, quantity: 50 },
            { ...PRODUCTS.find(p => p.id === 'prod14')!, quantity: 25 },
        ],
        total: 40000,
        status: OrderStatus.Preparing,
        deliveryMethod: 'Retrait à la ferme',
        orderDate: '2024-07-22'
    },
    {
        id: 'ord4',
        customerName: 'Mr. Jean Akpovi',
        items: [
            { ...PRODUCTS.find(p => p.id === 'prod7')!, quantity: 10 },
        ],
        total: 2000,
        status: OrderStatus.Pending,
        deliveryMethod: 'Livraison à domicile',
        orderDate: '2024-07-23'
    }
];
