import { all } from 'redux-saga/effects';
import { counterSaga } from './counter/sagas';
import { todoSaga } from './todo/sagas';

export function* rootSaga() {
    yield all([
        counterSaga(),
        todoSaga()
    ]);
}
