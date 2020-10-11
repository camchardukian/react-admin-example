import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import StudentList from "./components/StudentList";
import StudentCreate from "./components/StudentCreate";
import StudentEdit from "./components/StudentEdit";
import ParentList from "./components/ParentList";
import ParentCreate from "./components/ParentCreate";
import ParentEdit from "./components/ParentEdit";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="students"
        list={StudentList}
        create={StudentCreate}
        edit={StudentEdit}
      />
      <Resource
        name="parents"
        list={ParentList}
        create={ParentCreate}
        edit={ParentEdit}
      />
    </Admin>
  );
}

export default App;
