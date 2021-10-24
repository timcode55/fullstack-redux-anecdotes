import React from "react";
import Anecdotes from "./components/Anecdotes";
import NewAnecdote from "./components/NewAnecdote";
import Notification from "./components/Notification";
import FilterAnecdotes from "./components/FilterAnecdotes";
import { useSelector } from "react-redux";

const App = () => {
  // const [filterDote, setFilterDote] = useState("");
  // const handleFilterDotes = (e) => {
  //   setFilterDote(e.target.value);
  // };

  const showNotification = useSelector((state) => state.show);
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
