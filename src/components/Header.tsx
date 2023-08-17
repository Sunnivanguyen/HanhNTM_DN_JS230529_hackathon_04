import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1>Todo List</h1>
      <p>Get things done, one item at a time.</p>
      <hr />
    </div>
  );
};

export default Header;
