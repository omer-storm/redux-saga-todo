import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/counter/actions';
import { selectCounterValue } from './redux/counter/selectors';

class ClassCounter extends Component {
    render() {
        const { value, increment, decrement } = this.props;

        return (
            <div>
                <h2>Counter App</h2>
                <p>{value}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    value: selectCounterValue(state),
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
