import React from 'react';
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import TodoForm from "../Form/TodoForm";
import TodoItem from "../Todo-item/TodoItem";

describe('TodoList', () => {
    it('should render TodoList properly', () => {
        const wrapper = shallow(<TodoList title="my test title"/>);
        expect(wrapper.find("#todo-list")).toHaveLength(1);
        expect(wrapper.find("h1#todo-title")).toHaveLength(1);
        expect(wrapper.find(TodoItem)).toHaveLength(5);
        expect(wrapper.find("TodoForm")).toHaveLength(1);
        expect(wrapper.find("#todo-title").props().children).toEqual("my test title");
        // console.log(wrapper.find("#todo-title").props().children)

    });
});

test('', () => {
    
});