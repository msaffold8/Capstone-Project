import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import { BlogPage } from "../BlogPage/BlogPage";

import { Card } from "../Card/Card";
import "./HomePage.scss";

export const HomePage = (props) => {
  return (
    <div className="HomePage">
      <div className="Wrapper">
        <Card />
        <Card />
      </div>
    </div>
  );
};
