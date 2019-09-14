import { requestAction, requestSuccessAction } from '../../core/rest/actionFactory'

export const SAVE_USER = 'SAVE_USER';
export const LOGIN_USER = 'LOGIN_USER'

export const saveUser = user => requestAction(SAVE_USER, user)
export const loginUser = user => requestAction(LOGIN_USER, user);
export const loginUserSuccess = user => requestSuccessAction(LOGIN_USER, user);