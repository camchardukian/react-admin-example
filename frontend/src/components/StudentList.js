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
        <DateField source="enrolledOn" />
        <EditButton basePath="/students" />
        <DeleteButton basePath="/students" />
        {/* <TextField source="id" />
    <TextField source="id" /> */}
      </Datagrid>
    </List>
  );
};

export default StudentList;
// "name": "Tina",
// "strengths": ["grammar", "work ethic"],
// "weaknesses": ["listening skills"],
// "enrolledOn": "21-10-2016"
