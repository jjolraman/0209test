import React from "react";
import "./App.css";

const Todo = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = () => {
    if (!todoTitle) return;
    setTodos([
      ...todos,
      { id: Math.random() + Date(), title: todoTitle, isDone: false },
    ]);
    setTodoTitle("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="todobox">
        <div>
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo}>추가하기</button>
      </div>

      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <div className="workingbox" key={todo.id}>
            <h5>{todo.title}</h5>
          </div>
        ))}
    </div>
  );
};

export default Todo;
