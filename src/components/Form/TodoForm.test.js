import React from "react";
import { shallow } from "enzyme";
import TodoForm from "./TodoForm";

describe("TodoForm tests for structure", () => {
  it("should render TodoForm properly", () => {
    const mockHandler = jest.fn();

    const wrapper = shallow(
      <TodoForm newTodo={{ description: "read book", isCompleted: false }} />
    );
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(2);
  });
});

describe('TodoForm tests for eventhandlers', () => {
  it('should be able to call handleChange', () => {
    const wrapper = shallow(<TodoForm />);

    wrapper.find("#text").simulate('change',{ target: {value:"a"}});
    console.log(wrapper.state().newTodo)
    expect(wrapper.state().newTodo.description).toEqual("a");
  });
});
