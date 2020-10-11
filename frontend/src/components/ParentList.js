import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton
} from "react-admin";

const ParentList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="child" />
        <EmailField source="email" />
        <TextField source="phone" />
        <EditButton basePath="/parents" />
        <DeleteButton basePath="/parents" />
      </Datagrid>
    </List>
  );
};

export default ParentList;
