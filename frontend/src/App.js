import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import StudentList from "./components/StudentList";

import "./App.css";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="students" list={StudentList} />
    </Admin>
  );
}

export default App;
