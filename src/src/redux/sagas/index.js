import { all, fork } from 'redux-saga/effects';

// import * as authSagas from './_auth';
import * as configSagas from './_config';

export default function* rootSaga() {
  yield all([
    ...Object.values(configSagas),
    // more sagas from different files
  ].map(fork));
}
