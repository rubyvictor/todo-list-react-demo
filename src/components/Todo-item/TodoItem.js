import React from "react";

const TodoItem = props => {
  return <li onClick={props.handleClick}>{props.todo.description}</li>;
};

export default TodoItem;
