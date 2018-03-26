import React, { Component } from "react";
import { toDos } from "../../utils/seedData";
import "./TodoList.css";
import TodoItem from "../Todo-item/TodoItem";
import TodoForm from "../Form/TodoForm";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      toDos: toDos
    };
  }

  handleSubmit(newTodo) {
    const updatedToDos = [...this.state.toDos, newTodo];
    this.setState({
      toDos: updatedToDos
    });
  }

  render() {
    return (
      <div id="todo-list">
        <h1 id="todo-title">{this.props.title}</h1>
        {this.state.toDos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              todo={todo}
              handleClick={this.handleClick.bind(this, i)}
            />
          );
        })}
        <TodoForm id="text" handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }

  handleClick(todoIndex) {
    const todoCopy = [...this.state.toDos];
    const todoToBeUpdated = todoCopy[todoIndex];
    todoToBeUpdated["isCompleted"] = !todoToBeUpdated["isCompleted"];

    this.setState({
      toDos: todoCopy
    });
  }
}

TodoList.defaultProps = {
  title: "Some awesome To Do List"
};

export default TodoList;
