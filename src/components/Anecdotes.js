import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { filterChange } from "../reducers/notificationReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.notes);
  const filter = useSelector((state) => state.filter);

  const sortAnecdotes = anecdotes.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  const dotesToShow = sortAnecdotes.filter((item) =>
    item.content?.toLowerCase().includes(filter)
  );

  return (
    <div>
      {dotesToShow.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                dispatch(vote(anecdote.id));
                dispatch(
                  filterChange(`You voted for ${anecdote.content}`, 1000)
                );
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
