import React from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Form from "./components/Form";
import Todo from "./models/data";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string): void => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const handleRemoveTodo = (todoId: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleCheckTodo = (todoId: string): void => {
    setTodos((prevTodos) => {
      const todo = prevTodos.find((item) => item.id === todoId);
      console.log(todo);
      // const updatedTodo: Todo = {
      //   ...todo,
      //   isDone: !todo?.isDone,
      // };
      // return [...prevTodos, updatedTodo];
      return prevTodos;
    });
  };
  return (
    <div className="app">
      <Header />
      <Todos
        onRemoveTodo={handleRemoveTodo}
        todos={todos}
        onCheckTodo={handleCheckTodo}
      />
      <Form onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
