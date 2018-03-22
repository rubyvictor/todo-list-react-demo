import React from "react";
import "./TodoForm";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Add:
        <input
          type="text"
          value={props.description}
          onChange={props.handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TodoForm;
