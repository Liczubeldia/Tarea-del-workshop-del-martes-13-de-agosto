import React from "react";
import PropTypes from "prop-types";

function TodoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        aria-label={`Marcar ${task.text} como ${
          task.completed ? "incompleta" : "completa"
        }`}
      />
      <span>{task.text}</span>
      <button
        onClick={() => deleteTask(task.id)}
        aria-label={`Eliminar ${task.text}`}
      >
        Eliminar
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TodoItem;
