import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const Anecdotes = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state);

  // const Anecdote = ({ anecdote, handleClick }) => {
  //   return (
  //     <div>
  //       <li>{anecdote.content}</li>
  //       <button onClick={handleClick}>Vote</button>
  //     </div>
  //   );
  // };

  const sortAnecdotes = anecdotes.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  console.log(sortAnecdotes, "SORTED ANECDOTES");
  return (
    <div>
      {sortAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anecdotes;
