import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return (
    <button className="CreateTodo" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
