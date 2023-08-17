import React from "react";
import { AiFillDelete } from "react-icons/ai";
import Todo from "../models/data";
import classes from "../components/TodoItem.module.css";

const TodoItem: React.FC<{
  todo: Todo;
  onRemoveTodo: (id: string) => void;
  onCheckTodo: (id: string) => void;
}> = ({ todo, onRemoveTodo, onCheckTodo }) => {
  return (
    <div className={classes.container}>
      <h3>{todo.text}</h3>
      <div className={classes.control_container}>
        <input
          type="checkbox"
          id={todo.id}
          name={todo.id}
          className={classes.input}
        ></input>
        <AiFillDelete onClick={() => onRemoveTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
