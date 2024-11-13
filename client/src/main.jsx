import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react"



ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Auth0Provider 
      domain={"dev-vu8oq1i7f830vs47.us.auth0.com"}
      clientId={"SsfSrbQr3wVryFNJSiXYf4kAVlIlkqYo"}
      authorizationParams={{
        redirect_uri: "http://localhost:5173/"
      }}
      audience="http://localhost:8000"
      scope="Openid profile email"
      >
    
    <App />
    
    </Auth0Provider>

);
