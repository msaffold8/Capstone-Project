import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { HomePage } from "../Homepage/HomePage";
import { BlogPage } from "../BlogPage/BlogPage";
import { WishListPage } from "../WishListPage/WishListPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Layout = (props) => {
  return (
    <Router>
      <div className="Layout">
        <Header />
        {/* <HomePage /> */}

        <Switch>
          <Route path="/Blog">  
            <BlogPage />
          </Route>

          <Route path="/WishList">
            <WishListPage />
          </Route>

          <Route path="/HomePage">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
