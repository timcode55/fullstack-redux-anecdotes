import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { filterChange } from "../reducers/notificationReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);
  console.log(anecdotes, "ANECDOTES BEFORE ERROR*******");

  const sortAnecdotes = anecdotes.notes.sort((a, b) =>
    a.votes > b.votes ? -1 : 1
  );
  console.log(sortAnecdotes, "SORTED ANECDOTES");
  return (
    <div>
      {sortAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                dispatch(vote(anecdote.id));
                setTimeout(() => {
                  dispatch(filterChange(""));
                }, 3000);
                dispatch(filterChange(`You voted for ${anecdote.content}`));
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anecdotes;
