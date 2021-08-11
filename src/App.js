// API INTEGRATION / using database to power product cards
// * SET UP TABLE IN POSTGRESS
// * SET UP MODEL IN SEQUILIZE
// * Table columns would have all of the information product cards are displaying
//     * Image url
//     * Name of product
//     * Price
//     * Description
//     * THE LINK - associate code
// * Create endpoint to retrieve product information from database
// * .map over Fetch request in front end / react to use information from database to build product card in HTML

import { Layout } from "./Components/Layout/Layout";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../src/Components/Login/Login";
// import React, { useState } from "react";

function App() {
  // const [token, setToken] = useState();

  // // if (!token) {
  // //   return <Login setToken={setToken} />;
  // // }

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
