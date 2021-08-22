import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-3">
              <div className="header-search">
                <form action="" method="get">
                  <input
                    type="search"
                    className="form-dp"
                    placeholder="Search..."
                    required
                  />
                  <button type="submit">
                    {" "}
                    <Icon icon={faSearch} />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 offset-lg-1">
              <div className="top-logo text-center">
                <Link className="icon-link" to="/HomePage">
                  <img src="logo.png" alt="" class="img-fluid" />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="top-login text-end">
                <Link className="icon-link" to="/Login">
                  <a href="">Login</a>
                </Link>
                <span>/</span>

                <Link className="icon-link" to="/Blog">
                  <a href="">Register</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="navbar navbar-expand-lg navbar-dp">
        <div class="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span>
              <Icon icon={faBars} />{" "}
            </span>
          </button>

          <a className="navbar-brand d-lg-none" href="index.html">
            <Link className="icon-link" to="/HomePage">
              <img src="logo.png" alt="" className="img-fluid" />
            </Link>
          </a>

          <button
            className="navbar-search d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#search"
          >
            <span className="fas fa-search"></span>
          </button>

          <div className="collapse" id="search">
            <input type="search" class="form-dp" placeholder="Search..." />
          </div>

          <div className="collapse navbar-collapse w-100" id="navbar">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link active pl-0" href="index.html">
                  What's New{" "}
                  <span>
                    <Icon icon={faCaretDown} />
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="drop1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Dropdown
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dropdown
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="drop1"
                  data-bs-toggle="dropdown"
                >
                  Gifts By Recipient{" "}
                  <span>
                    <Icon icon={faCaretDown} />
                  </span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="drop1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mom
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dad
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Gifts By Occasion{" "}
                  <span>
                    <Icon icon={faCaretDown} />
                  </span>
                </a>
                <ul className="dropdown-menu dropdown" aria-labelledby="drop1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Father's Day
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mother's Day
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Gifts By Category{" "}
                  <span>
                    <Icon icon={faCaretDown} />
                  </span>
                </a>
                <ul className="dropdown-menu dropdown" aria-labelledby="drop1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Travel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Funny Gifts
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  More Categories{" "}
                  <span>
                    <Icon icon={faCaretDown} />
                  </span>
                </a>
                <ul className="dropdown-menu dropdown" aria-labelledby="drop1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Random
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Submit a Product
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item d-lg-none">
                <a className="btn-dp" href="#">
                  Login
                </a>
                <a className="btn-dp" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
