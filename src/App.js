import React, { useEffect } from "react";
import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import FilterAnecdotes from "./components/FilterAnecdotes";
import { useSelector } from "react-redux";
import doteService from "./services/anecdotes";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  const showNotification = useSelector((state) => state.notification);
  return (
    <div>
      <h2>Anecdotes</h2>
      <div>
        <FilterAnecdotes
        // filterDote={filterDote}
        // handleFilterDotes={handleFilterDotes}
        />
        {showNotification && <Notification />}
        <Anecdotes />
        <NewAnecdote />
      </div>
    </div>
  );
};
export default App;
