import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { createStore } from "redux";
import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
// import reducer from "./reducers/anecdoteReducer";
// import { vote, createAnecdote } from "./reducers/anecdoteReducer";

// const store = createStore(reducer);

// const generateId = () => Math.floor(Math.random() * 1000);

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <div>
        <Anecdotes />
        <NewAnecdote />
      </div>
    </div>
  );
};
export default App;
