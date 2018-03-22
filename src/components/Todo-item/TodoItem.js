import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
  const cssClassToApply = props.todo.isCompleted ? "done" : "";
  return (
    <li className={cssClassToApply} onClick={props.handleClick}>
      {props.todo.description}
    </li>
  );
};

export default TodoItem;
