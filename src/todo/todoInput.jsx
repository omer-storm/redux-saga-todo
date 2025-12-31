import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/todo/actions';

class TodoInput extends Component {
    state = {
        text: '',
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleAdd = () => {
        if (!this.state.text.trim()) return;

        this.props.addTodo(this.state.text);
        this.setState({ text: '' });
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Add todo"
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}


const mapDispatchToProps = {
    addTodo,
};

export default connect(null, mapDispatchToProps)(TodoInput);
