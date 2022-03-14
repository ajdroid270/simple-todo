import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function MyComponent() {
  const todoInput = useRef("");
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }

  function onTodoItemCreate() {
    addTodo(todoInput.current);
    todoInput.current = "";
    document.getElementById("todo-input").value = "";
  }

  function deleteTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.slice().filter((val, i) => i !== todoIndex)
    );
  }

  function updateTodo(index, value) {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.slice();
      newTodos[index] = value;
      return newTodos;
    });
  }

  return (
    <div className="App App-header">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTodoItemCreate();
        }}
      >
        <input
          id="todo-input"
          type="text"
          onInput={(e) => {
            console.log(e.target.value);
            todoInput.current = e.target.value;
          }}
        />
        <button type="submit">+</button>
      </form>
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          description={todo}
          onDelete={() => {
            deleteTodo(i);
          }}
          onUpdate={(newValue) => {
            updateTodo(i, newValue);
          }}
        />
      ))}
    </div>
  );
}

export default MyComponent;
