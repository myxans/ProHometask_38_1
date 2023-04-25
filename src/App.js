import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // стан для збереження списку тудушок
  const [newTodo, setNewTodo] = useState(""); // стан для збереження нової тудушки

  // функція для додавання нової тудушки
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { task: newTodo, completed: false }]);
      setNewTodo(""); // очистити значення інпуту
    }
  };

  // функція для переключення стану виконаності тудушки
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Список тудушок</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none", // встановлюємо стиль для виконаних тудушок
              cursor: "pointer", // змінюємо курсор на покажчик при наведенні на тудушку
            }}
          >
            {todo.task}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Введіть нову тудушку"
        />
        <button onClick={addTodo}>Додати</button>
      </div>
    </div>
  );
};

export default TodoList;