export interface Variant {
  id: string;
  label: string;
}

export interface EMIPlan {
  months: number;
  monthlyAmount: number;
  totalAmount: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
  variants: Variant[];
  emiPlans: EMIPlan[];
  maxEmiMonths: number;
}

export type AsyncStatus = "idle" | "loading" | "success" | "error" | "empty";
