import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const headers = {
  backPage: null,
  externalLink: false,
  transparent: true,
  noBorder: false,
};

let middleware = applyMiddleware(thunk.withExtraArgument(headers));

const store = createStore(reducer, middleware);

export default store;
