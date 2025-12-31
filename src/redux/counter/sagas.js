import { takeEvery, put, delay } from 'redux-saga/effects';
import { INCREMENT, DECREMENT } from './actionTypes';
import { incrementSuccess, decrementSuccess } from './actions';

// Worker sagas
function* incrementSaga() {
    yield delay(2000); // simulate async work
    yield put(incrementSuccess());
}

function* decrementSaga() {
    yield delay(2000);
    yield put(decrementSuccess());
}

// Watcher saga
export function* counterSaga() {
    yield takeEvery(INCREMENT, incrementSaga);
    yield takeEvery(DECREMENT, decrementSaga);
}
