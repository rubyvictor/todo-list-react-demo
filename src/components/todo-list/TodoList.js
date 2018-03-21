import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../Todo-item/TodoItem";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      newTodo: { description: "", isCompleted: false }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const newTodoTobeUpdated = this.state.todos.concat(this.state.newTodo);
    this.setState({
      todos: newTodoTobeUpdated,
      newTodo: { description: "",isCompleted: false}
    });

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Add:
            <input
              type="text"
              value={this.state.newTodo.description}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  handleClick(todoIndex) {
    const todoCopy = [...this.state.todos];
    const todoTobeUpdated = todoCopy[todoIndex];
    todoTobeUpdated["isCompleted"] = !todoTobeUpdated["isCompleted"];
    console.log(todos);

    this.setState({
      todos: todoCopy
    });
  }
}

export default TodoList;
