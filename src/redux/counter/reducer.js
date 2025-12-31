import { DECREMENT_SUCCESS, INCREMENT_SUCCESS } from "./actionTypes";

const initialState = {
    value: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_SUCCESS:
            return { ...state, value: state.value + 1 };

        case DECREMENT_SUCCESS:
            return { ...state, value: state.value - 1 };

        default:
            return state;
    }
};

