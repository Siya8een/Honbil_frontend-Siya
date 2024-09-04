import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import ReactGA from "react-ga4";
import reportWebVitals from "./reportWebVitals";
import "mapbox-gl/dist/mapbox-gl.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Initialize GA4
ReactGA.initialize("G-XHYYJDLRFN");
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
const SendAnalytics = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};

reportWebVitals(SendAnalytics);
