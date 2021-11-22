import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="CreateTodo"
      onClick={() => onClickButton("Aquí se debería mostrar un modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
