import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const OrderItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Product Id" source="productId" />
        <TextInput label="Product Name" source="productName" />
        <TextInput label="Product SKU" source="productSku" />
        <NumberInput label="Subtotal" source="subtotal" />
        <NumberInput label="Unit Price" source="unitPrice" />
      </SimpleForm>
    </Create>
  );
};
