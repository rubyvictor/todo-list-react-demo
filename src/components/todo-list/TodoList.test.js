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

describe("TodoList tests eventhandlers", () => {
  it("input field is able to call handleChange", () => {
    const wrapper = shallow(<TodoList />);
    console.log(wrapper.find("#text").debug());

    wrapper.find("#text").simulate("change", { target: { value: "a" } });
    expect(wrapper.state().value).toEqual("a");
  });
});
