import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { ConnectedRouter } from "connected-react-router";
//import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import App from "./App";
import "./styles.css";

const history = createBrowserHistory();

const middleware = [routerMiddleware(history), thunk];
if (process.env.NODE_ENV !== "production") {
  //middleware.push(createLogger());
}

const store = createStore(
  connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
