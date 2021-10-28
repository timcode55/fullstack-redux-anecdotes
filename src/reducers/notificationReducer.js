import { useDispatch } from "react-redux";

const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.data;
    case "REMOVE_NOTIFICATION":
      return action.data;
    default:
      return state;
  }
};

const showNotification = (message) => {
  return {
    type: "REMOVE_NOTIFICATION",
    data: message
  };
};

export const removeNotification = (emptyNot) => {
  return {
    type: "REMOVE_NOTIFICATION",
    data: emptyNot
  };
};

export const filterChange = (show, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(removeNotification(""));
    }, 2000);
    dispatch(showNotification(show));
  };
};

export default notificationReducer;
