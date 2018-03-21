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
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              handleClick={this.handleClick.bind(this, i)}
            />
          );
        })}
      </div>
    );
  }

  handleClick(todoIndex) {
    const todoCopy = [...this.state.todos];
    const todoTobeUpdated = todoCopy[todoIndex];
    todoTobeUpdated["isCompleted"] = true;
    console.log(todos);

    this.setState({
      todos: todoCopy
    })

  }
}

export default TodoList;
