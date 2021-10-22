import React from "react";
import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import { useSelector } from "react-redux";

const App = () => {
  const showNotification = useSelector((state) => state.show);
  console.log(showNotification, "SHOWNOTIFICATION************");
  return (
    <div>
      <h2>Anecdotes</h2>
      <div>
        {showNotification && <Notification />}
        <Anecdotes />
        <NewAnecdote />
      </div>
    </div>
  );
};
export default App;
