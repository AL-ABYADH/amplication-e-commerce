import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  order?: OrderWhereUniqueInput | null;
  productId: bigint;
  productName: string;
  productSku: string;
  subtotal: number;
  unitPrice: number;
};
