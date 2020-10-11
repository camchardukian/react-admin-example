import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton
} from "react-admin";

const StudentList = props => {
  console.log(props);
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="strengths" />
        <TextField source="weaknesses" />
        <DateField source="enrolledOn" />
        <EditButton basePath="/students" />
        <DeleteButton basePath="/students" />
      </Datagrid>
    </List>
  );
};

export default StudentList;
