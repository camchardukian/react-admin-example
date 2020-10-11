import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const StudentEdit = props => {
  return (
    <Edit title="Edit student information" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="strengths" />
        <TextInput multiline source="weaknesses" />
        <DateInput label="Enrollment Date" source="enrolledOn" />
      </SimpleForm>
    </Edit>
  );
};

export default StudentEdit;
