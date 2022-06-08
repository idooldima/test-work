import { all, fork } from 'redux-saga/effects';
import users from './users/sagas';

export default function* root() {
  yield all([fork(users)]);
}
