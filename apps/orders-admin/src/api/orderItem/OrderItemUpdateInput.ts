import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  image?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  productId?: bigint;
  productName?: string;
  productSku?: string;
  subtotal?: number;
  unitPrice?: number;
};
