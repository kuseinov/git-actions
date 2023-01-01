import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <HashRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
    </HashRouter>
 
);
