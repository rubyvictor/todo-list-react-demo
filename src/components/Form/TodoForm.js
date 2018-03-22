import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: { description: "", isCompleted: false }
    };
  }

  handleChange(event) {
    this.setState({
      newTodo: { description: event.target.value, isCompleted: false }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.newTodo);

    this.props.handleSubmit(this.state.newTodo);
    this.setState({ newTodo: { description: "", isCompleted: false } });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Add:
          <input
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default TodoForm;
