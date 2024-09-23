import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VikaList } from "./vika/VikaList";
import { VikaCreate } from "./vika/VikaCreate";
import { VikaEdit } from "./vika/VikaEdit";
import { VikaShow } from "./vika/VikaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"delete-test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vika"
          list={VikaList}
          edit={VikaEdit}
          create={VikaCreate}
          show={VikaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
