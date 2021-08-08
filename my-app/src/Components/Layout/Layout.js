import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { HomePage } from "../Homepage/HomePage";
import { BlogPage } from "../BlogPage/BlogPage";
import { WishListPage } from "../WishListPage/WishListPage";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../Login/Login";

export const Layout = (props) => {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login setToken={setToken} />
        </Route>

        <Route path="/Blog">
          <BlogPage />
        </Route>

        <Route path="/WishList">
          <WishListPage />
        </Route>

        <Route path="/HomePage">
          <HomePage />
        </Route>

        <Footer />
      </Switch>
    </Router>
  );
};
