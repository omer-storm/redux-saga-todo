import React, { Component } from 'react';
import TodoInput from './todoInput';
import TodoList from './todoList';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <TodoInput />
                <TodoList />
            </div>
        );
    }
}

export default TodoApp;
