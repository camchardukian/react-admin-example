import React from "react";
import { Create, SimpleForm, TextInput, EmailField } from "react-admin";

const ParentCreate = props => {
  return (
    <Create title="Add a new parent" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="child" />
        <EmailField source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default ParentCreate;
