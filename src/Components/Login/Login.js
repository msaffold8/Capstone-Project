import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import PropTypes from "prop-types";
import React, { useState } from "react";

// async function loginUser(credentials) {
//   return fetch("http://localhost:3002/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const token = await loginUser({
  //       username,
  //       password,
  //     });
  //     setToken(token);
  //   };

  //   Login.propTypes = {
  //     setToken: PropTypes.func.isRequired,
  //   };

  return (
    <div>
      <div></div>
      <Header />
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6 mb-5">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  action=""
                  method="post"
                  //   onSubmit={handleSubmit}
                >
                  {/* <h3 className="text-center text-info">Login</h3> */}
                  <div className="form-group">
                    <label for="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      data-cy="username"
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      data-cy="password"
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <Link to="/WishList">
                      <input
                        data-cy="loginButton"
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="login"
                      />
                    </Link>
                  </div>
                  <div id="register-link" className="text-right">
                    Dont have an account?
                    <a href="www.google.com" className="text-info">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
