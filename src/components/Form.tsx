import React from "react";
import { useState } from "react";
import classes from "../components/Form.module.css";

const Form: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const [note, setNote] = useState("");

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (!note) return;
    onAddTodo(note);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <h2>Add to the todo list</h2>
      <div className={classes.input_field}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={classes.input}
        ></input>
        <button className={classes.button}>ADD ITEM</button>
      </div>
    </form>
  );
};

export default Form;
