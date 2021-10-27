import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// import anecdoteReducer, {
//   initializeAnecdotes
// } from "./reducers/anecdoteReducer";
// import notificationReducer from "./reducers/notificationReducer";
// import filterReducer from "./reducers/filterReducer";

// import doteService from "./services/anecdotes";

// const reducer = combineReducers({
//   notes: anecdoteReducer,
//   show: notificationReducer,
//   filter: filterReducer
// });

// const store = createStore(reducer, composeWithDevTools());

// doteService
//   .getAll()
//   .then((anecdotes) => store.dispatch(initializeAnecdotes(anecdotes)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
