import React, { Component } from "react";
import { todos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../Todo-item/TodoItem";
import TodoForm from "../Form/TodoForm";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }

  handleChange(event) {
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  }

  handleSubmit(newTodo) {
    const updatedTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: updatedTodos
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
        <TodoForm
          id="text"
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }

  handleClick(todoIndex) {
    const todoCopy = [...this.state.todos];
    const todoTobeUpdated = todoCopy[todoIndex];
    todoTobeUpdated["isCompleted"] = !todoTobeUpdated["isCompleted"];

    this.setState({
      todos: todoCopy
    });
  }
}

export default TodoList;
