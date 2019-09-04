export const SAVE_USER = 'SAVE_USER';
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'

export const saveUser = user => ({ type: SAVE_USER, payload: user });
export const loginUser = user => ({ type: LOGIN_USER, payload: user });
export const loginUserSuccess = user => ({ type: LOGIN_USER_SUCCESS, payload: user })