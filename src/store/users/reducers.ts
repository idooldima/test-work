import { UsersType, UserStateType } from './types';
import initialState from './state';
import { createReducer } from 'redux-act';
import { getUsersError, getUsersStart, getUsersSuccess } from './actions';

export const onGetUsersStart = (state: UserStateType) => ({
  ...state,
  isLoading: true,
});

export const onGetUserSucces = (state: UserStateType, payload: { users: UsersType }) => ({
  ...state,
  data: payload.users,
  isLoading: false,
});

export const onGetUsersError = (state: UserStateType, payload: null) => ({
  ...initialState,
  error: payload,
});

export const usersReducer = createReducer<UserStateType>({}, initialState)
  .on(getUsersStart, onGetUsersStart)
  .on(getUsersSuccess, onGetUserSucces)
  .on(getUsersError, onGetUsersError);

export default usersReducer;
