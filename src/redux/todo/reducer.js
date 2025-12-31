import { ADD_TODO_SUCCESS, REMOVE_TODO } from './actionTypes';

const initialState = {
    todos: [],
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };

        default:
            return state;
    }
};
