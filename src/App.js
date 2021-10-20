import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/anecdoteReducer";

const store = createStore(reducer);

const generateId = () => Math.floor(Math.random() * 1000);

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log(content, "CONTENT");
    dispatch({
      type: "NEW_NOTE",
      data: {
        content,
        votes: 0,
        id: generateId()
      }
    });
  };

  const vote = (id) => {
    console.log("vote", id);
    const findIt = anecdotes.find((item) => {
      return item.id === id;
    });

    console.log(findIt, "FINDIT");
    dispatch({
      type: "VOTE",
      payload: (findIt.votes += 1)
    });
  };
  console.log(anecdotes, "ANECDOTES*******");

  const sortAnecdotes = anecdotes.sort((a, b) => (a.votes > b.votes ? 1 : -1));

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortAnecdotes
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))
        .sort((a, b) => (a.votes > b.votes ? 1 : -1))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
