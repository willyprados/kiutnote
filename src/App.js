import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const addTodo = (task) => {
    setCount(count + 1);
    const newTodos = [...todos, { id: count, task }];
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <header className="todo-header">
        <h1 className="title">Todo App</h1>
        <TodoForm addTodo={addTodo} />
      </header>
      <div className="todo-items-container">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

const TodoItem = ({ todo, deleteTodo }) => {
  const handlerDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <div className="todo-item">
      <div>{todo.task}</div>
      <button onClick={handlerDelete}>X</button>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const handlerSudmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handlerSudmit}>
      <input
        type="text"
        className="todo-input"
        required
        value={value}
        onChange={onChangeHandler}
      />
      <button type="sumit">Add</button>
    </form>
  );
};

export default App;
