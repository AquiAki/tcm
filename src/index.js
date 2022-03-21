import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./components/reducks/store/store";
import App from "./components/App";
import * as History from "history";
import { ConnectedRouter } from "connected-react-router";
import {
  Header,
  Footer,
  Cards,
  Lists,
  About,
  Contact,
  Page404,
} from "./components/index";

import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./assets/theme";


const history = History.createBrowserHistory();
export const store = createStore(history);


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}



ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    
    {/* <ErrorBoundary> */}
      <App />
    {/* </ErrorBoundary> */}
    {/* </ConnectedRouter>  */}
  </Provider>,
  document.getElementById("root")
);