export const notificationReducer = () => {
  return {
    type: "SHOW_NOTIFICATION",
    data: {}
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_NOTES",
    data: anecdotes
  };
};

export const createAnecdote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      content
    }
  };
};

export const vote = (id) => {
  console.log("vote", id);

  return {
    type: "VOTE",
    data: { id }
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
      return [...state, action.data.content];
    default:
      return state;
    case "INIT_NOTES":
      return action.data;
  }
};

export default anecdoteReducer;
