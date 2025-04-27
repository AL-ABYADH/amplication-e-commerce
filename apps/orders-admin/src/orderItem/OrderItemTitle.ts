import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "productName";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.productName?.toString() || String(record.id);
};
