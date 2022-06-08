import axios from 'axios';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsersError, getUsersStart, getUsersSuccess } from './actions';

export const getUsersSaga = function* (): SagaIterator {
  try {
    // const result = yield call(axios.get, 'https://api.github.com/repositories');;
    yield put(
      getUsersSuccess({
        // users: result.data
        users: Array(6).fill({
          id: 2,
          name: 'owner name',
          full_name: ' repo name',
          owner: {
            id: 2,
            avatar_url: 'https://picsum.photos/318/180',
            repos_url: 'repo url',
          },
          description: 'description',
        }),
      })
    );
  } catch (error: any) {
    yield put(getUsersError(error));
  }
};

export default function* root() {
  yield takeLatest(getUsersStart, getUsersSaga);
}
