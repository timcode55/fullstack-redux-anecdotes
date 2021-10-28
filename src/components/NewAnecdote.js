import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { filterChange } from "../reducers/notificationReducer";
import { removeNotification } from "../reducers/notificationReducer";
import doteService from "../services/anecdotes";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));
    // setTimeout(() => {
    //   dispatch(removeNotification(""));
    // }, 3000);
    dispatch(filterChange(`Anecdote added ${content}`, 4000));
  };
  return (
    <div>
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

export default NewAnecdote;
