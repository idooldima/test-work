import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsersError, getUsersStart, getUsersSuccess } from './actions';

export const getUsersSaga = function* (): SagaIterator {
  try {
    const result = yield call(axios.get, 'https://api.github.com/repositories');
    yield put(
      getUsersSuccess({
        users: result.data,
      })
    );
  } catch (error: any) {
    yield put(getUsersError(error));
  }
};

export default function* root() {
  yield takeLatest(getUsersStart, getUsersSaga);
}
