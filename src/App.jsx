import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setToDos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setToDos((currentTodos) => [
      ...currentTodos,
      { id: uuidv4(), title: newItem, completed: false },
    ]);

    setNewItem("");

    
  }
  function deleteTodo(id) {
    setToDos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
   
    
  }
  
  function toggleComplete(id) {
    setToDos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  
  
  
      return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>

      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.title}
            </label>
            <button onClick={() => deleteTodo (todo.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
