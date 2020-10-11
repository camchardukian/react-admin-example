import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const ParentEdit = props => {
  return (
    <Edit title="Edit parent information" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="child" />
        <TextInput source="email" />
        <TextInput source="phone" />
      </SimpleForm>
    </Edit>
  );
};

export default ParentEdit;
