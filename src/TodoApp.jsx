import React, { useState, useOptimistic } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [optimisticTodos, addTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, { text: newTodo, sending: true }]
  );

  async function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.todo.value;

    // UI instantly update
    addTodo(text);

    // Simple API call
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title: text }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    // Real state update
    setTodos([...todos, { text }]);

    e.target.reset();
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Simple Optimistic UI</h2>

      <form onSubmit={handleSubmit}>
        <input name="todo" placeholder="Enter todo" />
        <button>Add</button>
      </form>

      {optimisticTodos.map((t, i) => (
        <p key={i}>
          {t.text} {t.sending && " (Adding...)"}
        </p>
      ))}
    </div>
  );
}