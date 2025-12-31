import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/todo/actions';
import { selectTodos } from '../redux/todo/selectors';

class TodoList extends Component {
    render() {
        const { todos, removeTodo } = this.props;

        return (
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: selectTodos(state),
});

const mapDispatchToProps = {
    removeTodo,
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
