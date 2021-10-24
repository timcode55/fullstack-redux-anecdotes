import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAnecdote } from "../reducers/filterReducer";

const FilterAnecdotes = () => {
  const [filterDote, setFilterDote] = useState("");
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.notes);
  console.log(anecdotes, "ANECDOTES((");
  console.log(filterDote, " FILTERDOTE");
  dispatch(filterAnecdote(filterDote));
  return (
    <div>
      <p>
        Filter <input onChange={(e) => setFilterDote(e.target.value)} />
      </p>
    </div>
  );
};

export default FilterAnecdotes;
