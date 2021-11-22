import React from "react";
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
      <span
        onClick={props.onComplete}
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
