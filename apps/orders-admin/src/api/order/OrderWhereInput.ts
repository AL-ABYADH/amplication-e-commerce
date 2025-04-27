import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  currency?: StringNullableFilter;
  customerId?: BigIntNullableFilter;
  date?: DateTimeNullableFilter;
  id?: BigIntFilter;
  notes?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  status?: "Option1";
  total?: FloatNullableFilter;
};
