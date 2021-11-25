import React from "react";
import { CompleteIcon } from "../TodosIcon/CompleteIcon";
import { DeleteIcon } from "../TodosIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
  // const onComplete = () => {
  //   alert("Ya completaste el TODO " + props.text);
  // };

  // const onDelete = () => {
  //   alert("Eliminaste el TODO " + props.text);
  // };

  return (
    <li className="TodoItem">
      <CompleteIcon onComplete={props.onComplete} completed={props.completed} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
