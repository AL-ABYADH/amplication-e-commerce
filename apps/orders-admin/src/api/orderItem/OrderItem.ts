import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  id: bigint;
  order?: Order | null;
  productId: bigint;
  productName: string;
  productSku: string;
  subtotal: number;
  unitPrice: number;
  updatedAt: Date;
};
