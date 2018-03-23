import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoForm from "../Form/TodoForm";
import TodoItem from "../Todo-item/TodoItem";

describe("TodoList", () => {
  it("should render TodoList properly", () => {
    const wrapper = shallow(<TodoList title="my test title" />);
    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("h1#todo-title")).toHaveLength(1);
    expect(wrapper.find(TodoItem)).toHaveLength(5);
    expect(wrapper.find("TodoForm")).toHaveLength(1);
    expect(wrapper.find("#todo-title").props().children).toEqual(
      "my test title"
    );
  });
});

describe("TodoList test for eventhandler", () => {
  it("should add a new todo when handleSubmit is called", () => {
      const newTodo = {description: "new new",isCompleted: false};
    const wrapper = shallow(<TodoList />);

    console.log(wrapper.state().todos.length)
    const expectedLength = wrapper.state().todos.length + 1;

    wrapper.find("TodoForm").props().handleSubmit(newTodo);
    expect(wrapper.state().todos).toHaveLength(expectedLength);

  });
});
