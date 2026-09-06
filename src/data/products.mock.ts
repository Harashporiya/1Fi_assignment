import { Product } from "../types/marketplace";

function buildEmiPlans(price: number, months: number[]) {
  return months.map((m) => ({
    months: m,
    monthlyAmount: Math.round(price / m),
    totalAmount: price,
  }));
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "iPhone 16",
    category: "Mobiles",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
    price: 79900,
    description:
      "6.1-inch Super Retina XDR display, A18 chip, and a dual-camera system built for everyday photography.",
    variants: [
      { id: "v1", label: "128GB · Black" },
      { id: "v2", label: "256GB · Black" },
      { id: "v3", label: "128GB · Blue" },
    ],
    emiPlans: buildEmiPlans(79900, [3, 6, 9, 12]),
    maxEmiMonths: 12,
  },
  {
    id: "p2",
    name: "MacBook Air M3",
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    price: 114900,
    description:
      "13-inch Liquid Retina display with the M3 chip — fast, silent, and up to 18 hours of battery life.",
    variants: [
      { id: "v1", label: "8GB/256GB · Midnight" },
      { id: "v2", label: "16GB/512GB · Starlight" },
    ],
    emiPlans: buildEmiPlans(114900, [6, 9, 12, 18, 24]),
    maxEmiMonths: 24,
  },
  {
    id: "p3",
    name: "Royal Enfield Classic 350",
    category: "Two Wheelers",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
    price: 213000,
    description:
      "The iconic Classic 350 — retro design, thumping single-cylinder engine, built for long rides.",
    variants: [{ id: "v1", label: "Chrome Black" }, { id: "v2", label: "Gunmetal Grey" }],
    emiPlans: buildEmiPlans(213000, [12, 18, 24]),
    maxEmiMonths: 24,
  },
  {
    id: "p4",
    name: "Sony WH-1000XM5",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600",
    price: 29990,
    description:
      "Industry-leading noise cancellation with crystal clear call quality and 30-hour battery life.",
    variants: [{ id: "v1", label: "Black" }, { id: "v2", label: "Silver" }],
    emiPlans: buildEmiPlans(29990, [3, 6, 9]),
    maxEmiMonths: 9,
  },
  {
    id: "p5",
    name: "Samsung 55\" QLED 4K TV",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
    price: 64990,
    description:
      "Quantum HDR picture quality with a sleek AirSlim design, perfect for a home theatre upgrade.",
    variants: [{ id: "v1", label: "55-inch" }, { id: "v2", label: "65-inch" }],
    emiPlans: buildEmiPlans(64990, [6, 9, 12, 18]),
    maxEmiMonths: 18,
  },
  {
    id: "p6",
    name: "Dyson V15 Detect",
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600",
    price: 62900,
    description:
      "Laser reveals microscopic dust, with intelligent suction that adjusts in real time.",
    variants: [{ id: "v1", label: "Standard" }],
    emiPlans: buildEmiPlans(62900, [6, 9, 12]),
    maxEmiMonths: 12,
  },
  {
    id: "p7",
    name: "Maruti Suzuki Swift",
    category: "Cars",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600",
    price: 799000,
    description:
      "India's favourite hatchback — refined engine, sporty design, and best-in-class mileage.",
    variants: [{ id: "v1", label: "VXI" }, { id: "v2", label: "ZXI" }],
    emiPlans: buildEmiPlans(799000, [12, 18, 24]),
    maxEmiMonths: 24,
  },
  {
    id: "p8",
    name: "PlayStation 5",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",
    price: 54990,
    description:
      "Lightning-fast loading with ultra-high-speed SSD and immersive haptic feedback via DualSense.",
    variants: [{ id: "v1", label: "Disc Edition" }, { id: "v2", label: "Digital Edition" }],
    emiPlans: buildEmiPlans(54990, [3, 6, 9, 12]),
    maxEmiMonths: 12,
  },
  {
    id: "p9",
    name: "iPad Air",
    category: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
    price: 59900,
    description:
      "M2 chip performance in a thin, light design — great for work, study, and creativity.",
    variants: [{ id: "v1", label: "64GB · Wi-Fi" }, { id: "v2", label: "256GB · Wi-Fi + Cellular" }],
    emiPlans: buildEmiPlans(59900, [3, 6, 9, 12]),
    maxEmiMonths: 12,
  },
];
