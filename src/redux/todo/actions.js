import { ADD_TODO, ADD_TODO_SUCCESS, REMOVE_TODO } from './actionTypes';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: todo,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});
