import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import StudentList from "./components/StudentList";
import StudentCreate from "./components/StudentCreate";
import StudentEdit from "./components/StudentEdit";

import "./App.css";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource
        name="students"
        list={StudentList}
        create={StudentCreate}
        edit={StudentEdit}
      />
    </Admin>
  );
}

export default App;
