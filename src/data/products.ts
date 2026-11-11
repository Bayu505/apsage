export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number | null;
  images: string[];
  sizes: string[];
  status: "available" | "sold-out" | "coming-soon";
}

export const products: Product[] = [
  {
    id: 1,
    name: "DINO T-SHIRT",
    category: "T-SHIRT / 2026 COLLECTION",
    description:
      "korang belimi anjing",
    price: 120000, // Isi harga produk di sini
    images: [
      "/images/products/1.jpg",
      "/images/products/2.jpg",
      "/images/products/3.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    status: "available",
  },
];