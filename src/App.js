import { Layout } from "./Components/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../src/Components/Login/Login";
// import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            {/* <Route path="/">
              <Login />
            </Route> */}
            <Route>
              <Layout />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
