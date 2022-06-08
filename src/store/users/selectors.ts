import { ReduxStoreType } from '../types';
import { Users } from './types';

export const usersListSelector = (state: ReduxStoreType): Users => state.users.data;
