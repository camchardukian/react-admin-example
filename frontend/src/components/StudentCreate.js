import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const StudentCreate = props => {
  return (
    <Create title="Add a new student" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput multiline source="strengths" />
        <TextInput multiline source="weaknesses" />
        <DateInput label="Enrollment Date" source="enrolledOn" />
      </SimpleForm>
    </Create>
  );
};

export default StudentCreate;
