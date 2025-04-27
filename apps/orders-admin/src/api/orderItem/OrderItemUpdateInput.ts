import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  productId?: bigint;
  productName?: string;
  productSku?: string;
  subtotal?: number;
  unitPrice?: number;
};
