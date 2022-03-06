import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import App from "./components/App";

import { ConnectedRouter } from "connected-react-router";
import * as History from "history";


const history = History.createBrowserHistory();


ReactDOM.render(
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
      <App />
  //    </ConnectedRouter> 
  // </Provider>,
  ,
  document.getElementById("root")
);
