import React, { Component } from "react";
import PropTypes from "prop-types";

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
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Add:
          <input
            id="text"
            value={this.state.newTodo.description}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default TodoForm;
