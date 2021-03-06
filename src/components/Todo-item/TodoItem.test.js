import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";
import TodoList from "../todo-list/TodoList";

describe("TodoItem", () => {
  it("should render TodoItem properly", () => {
    const mockHandler = jest.fn();

    const wrapper = shallow(
      <TodoItem
        className="done"
        todo={{ description: "buy drinks", isCompleted: false }}
        handleSubmit={()=>{}}
        handleClick={mockHandler}
      />
    );
    
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("li").props().children).toEqual("buy drinks");

    wrapper.find("li").simulate("click", { preventDefault() {} });
    expect(mockHandler).toBeCalled();
  });
});
