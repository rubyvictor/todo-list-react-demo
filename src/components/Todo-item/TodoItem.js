import React, { Component } from 'react';

const TodoItem = (props) =>{

    return (
        <li>{props.todo.description}
        </li>
    )
};

export default TodoItem;