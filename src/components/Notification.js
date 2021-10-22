import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.show);
  console.log(notification, "NOTIFICATION");
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };
  return <div style={style}>{notification}</div>;
};

export default Notification;
