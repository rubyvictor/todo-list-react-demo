import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

const TodoItem = props => {
  const cssClassToApply = props.todo.isCompleted ? "done" : "";
  return (
    <li className={cssClassToApply} onClick={props.handleClick}>
      {props.todo.description}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TodoItem;
