import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask({ id: Date.now(), text: inputValue, completed: false });
      setInputValue("");
    }
  };

  return (
    <form className="add-todo" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

AddTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default AddTodo;
