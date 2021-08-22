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

      <div className="mainDisplay">
        <Card />
      </div>

      <Footer />
    </div>
  );
};
