import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
  productName?: SortOrder;
  productSku?: SortOrder;
  subtotal?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
