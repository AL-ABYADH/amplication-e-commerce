import { BigIntFilter } from "../../util/BigIntFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type OrderItemWhereInput = {
  id?: BigIntFilter;
  order?: OrderWhereUniqueInput;
  productId?: BigIntFilter;
  productName?: StringFilter;
  productSku?: StringFilter;
  subtotal?: FloatFilter;
  unitPrice?: FloatFilter;
};
