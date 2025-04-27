import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  currency?: string | null;
  customerId?: bigint | null;
  date?: Date | null;
  notes?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  status?: "Option1" | null;
  total?: number | null;
};
