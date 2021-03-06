import { createAction } from 'redux-act';
import { UsersType } from './types';

export const getUsersStart = createAction('GET_USERS_START');
export const getUsersSuccess = createAction<{ users: UsersType }>('GET_USERS_SUCCESS');
export const getUsersError = createAction<null>('GET_USERS_ERROR');
