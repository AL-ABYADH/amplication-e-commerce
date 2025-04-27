import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  currency?: string | null;
  customerId?: bigint | null;
  date?: Date | null;
  notes?: string | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  total?: number | null;
};
