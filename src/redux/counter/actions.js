import { INCREMENT, DECREMENT, INCREMENT_SUCCESS, DECREMENT_SUCCESS } from './actionTypes';

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const incrementSuccess = () => ({
    type: INCREMENT_SUCCESS,
});

export const decrementSuccess = () => ({
    type: DECREMENT_SUCCESS,
});