import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../Todo-item/TodoItem";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
    this.completeHandler = this.completeHandler.bind(this);
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} />;
        })}
      </div>
    );
  }

  completeHandler() {
  }
}

export default TodoList;
