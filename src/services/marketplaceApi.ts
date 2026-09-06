import { MOCK_PRODUCTS } from "../data/products.mock";
import { Product } from "../types/marketplace";

let simulatedFailureRate = 0.08;

export function setSimulatedFailureRate(rate: number) {
  simulatedFailureRate = Math.min(1, Math.max(0, rate));
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomLatency() {
  return 600 + Math.random() * 300;
}

function maybeFail() {
  if (Math.random() < simulatedFailureRate) {
    throw new Error("Network request failed. Please check your connection and try again.");
  }
}

function cloneProducts(products: Product[]): Product[] {
  return JSON.parse(JSON.stringify(products));
}

export async function getProducts(): Promise<Product[]> {
  await delay(randomLatency());
  maybeFail();
  return cloneProducts(MOCK_PRODUCTS);
}

export async function getProductById(id: string): Promise<Product> {
  await delay(randomLatency());
  maybeFail();
  const found = MOCK_PRODUCTS.find((p) => p.id === id);
  if (!found) {
    throw new Error("Product not found.");
  }
  return cloneProducts([found])[0];
}

export async function searchProducts(query: string): Promise<Product[]> {
  await delay(randomLatency());
  maybeFail();
  const q = query.trim().toLowerCase();
  if (!q) return cloneProducts(MOCK_PRODUCTS);
  return cloneProducts(
    MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  );
}
