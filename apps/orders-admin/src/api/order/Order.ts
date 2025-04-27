import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  createdAt: Date;
  currency: string | null;
  customerId: bigint | null;
  date: Date | null;
  id: bigint;
  notes: string | null;
  orderItems?: Array<OrderItem>;
  status?: "Option1" | null;
  total: number | null;
  updatedAt: Date;
};
