import { ReduxStoreType } from '../types';
import { UsersType } from './types';

export const usersListSelector = (state: ReduxStoreType): UsersType => state.users.data || [];
