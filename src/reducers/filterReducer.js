const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER_ANECDOTES":
      return action.filteredDote;
    default:
      return state;
  }
};

export const filterAnecdote = (filteredDote) => {
  return {
    type: "FILTER_ANECDOTES",
    filteredDote
  };
};

export default filterReducer;
