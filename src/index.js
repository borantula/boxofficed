import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//import { createLogger } from "redux-logger";
import reducer from "./reducers";
import App from "./App";
import "./styles.css";
//import "./images/boxofficed.png";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  //middleware.push(createLogger());
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
