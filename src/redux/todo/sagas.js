
import { takeEvery, put, delay } from 'redux-saga/effects';
import { ADD_TODO } from './actionTypes';
import { addTodoSuccess } from './actions';

function* addTodoSaga(action) {
    yield delay(500); // simulate async call (API / DB)

    const newTodo = {
        id: Date.now(),
        text: action.payload,
    };

    yield put(addTodoSuccess(newTodo));
}

export function* todoSaga() {
    yield takeEvery(ADD_TODO, addTodoSaga);
}
