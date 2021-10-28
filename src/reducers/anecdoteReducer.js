import doteService from "../services/anecdotes";

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await doteService.getAll();
    dispatch({
      type: "INIT_NOTES",
      data: anecdotes
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await doteService.createNew(content);
    dispatch({
      type: "NEW_NOTE",
      data: newAnecdote
    });
  };
};

export const vote = (id) => {
  return async (dispatch) => {
    const updateVote = await doteService.addVote(id);
    dispatch({
      type: "VOTE",
      data: updateVote
    });
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        votes: (noteToChange.votes += 1)
      };
      return state.map((note) => (note.id !== id ? note : changedNote));

    case "NEW_NOTE":
      return [...state, action.data];
    default:
      return state;
    case "INIT_NOTES":
      return action.data;
  }
};

export default anecdoteReducer;
