import React from "react";

import ApplicationComponent from "./Application/app";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./State/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( 
  <Provider store={store}>
    <ApplicationComponent/>
  </Provider>
)