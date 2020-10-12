import {createReducer, on} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => ({...state, user: action.user}))
);
