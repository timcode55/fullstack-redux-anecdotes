const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.show;
    default:
      return state;
  }
};

export const filterChange = (show) => {
  return {
    type: "SHOW_NOTIFICATION",
    show
  };
};

export default notificationReducer;
