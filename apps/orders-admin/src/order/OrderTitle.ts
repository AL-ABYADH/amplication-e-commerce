import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "currency";

export const OrderTitle = (record: TOrder): string => {
  return record.currency?.toString() || String(record.id);
};
