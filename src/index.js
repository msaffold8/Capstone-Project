import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="<better-gift-depot.us.auth0.com>"
      clientId="<JLhBtu6m4VlynlcEO7kE4SVqcbBqdK4E>"
      redirectUri={window.location.origin}
      scope="read:current_user"
    >
      {/* auth0.com => create tenant => create application => specify domain + clientId */}
      <App />
      {/* Auth0provider can function within children of App. Consume the context */}
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
