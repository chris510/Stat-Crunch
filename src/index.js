import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  // test start
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // test end

  const store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

