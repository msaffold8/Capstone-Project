import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { BlogPage } from "../BlogPage/BlogPage";

import { Card } from "../Card/Card";
import "./HomePage.scss";

export const HomePage = (props) => {
  return (
    <div className="HomePage">
      <Header />
      <div className="Wrapper">
        <Card />
        <Card />
        {/* <Link className="icon-link" to="/Login">
          <a href="">Login</a>
        </Link> */}
        <Link to="/Login">
          <input
            type="submit"
            name="submit"
            className="btn btn-info btn-md"
            value="Login"
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
};
