import React from "react";
import Todo from "../models/data";
import TodoItem from "./TodoItem";
import classes from "../components/Todos.module.css";

const Todos: React.FC<{
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
  onCheckTodo: (id: string) => void;
}> = ({ todos, onRemoveTodo, onCheckTodo }) => {
  console.log(Todo);
  return (
    <div className={classes.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onCheckTodo={onCheckTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
