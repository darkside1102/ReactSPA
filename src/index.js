import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "../src/layouts/Layout";

import "./styles.css";

const app = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  app
);
