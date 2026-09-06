export type MarketplaceStackParamList = {
  Shop: undefined;
  ProductDetail: { productId: string };
  Confirmation: { productName: string; months: number; monthlyAmount: number };
};
