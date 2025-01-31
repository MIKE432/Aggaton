import { requestAction, requestSuccessAction, clearRest } from '../../core/rest/actionFactory'

export const SAVE_USER = 'SAVE_USER';
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const GET_CURRENT_USER = 'GET_CURRENT_USER'

export const saveUser = user => requestAction(SAVE_USER, user)

export const loginUser = user => requestAction(LOGIN_USER, user);
export const loginUserSuccess = user => requestSuccessAction(LOGIN_USER, user);
export const logOutUser = () => requestAction(LOGOUT_USER);
export const logOutUserSuccess = data => requestSuccessAction(LOGOUT_USER, data);

export const getCurrentUser = () => requestAction(GET_CURRENT_USER);
export const getCurrentUserSuccess = (data) => requestSuccessAction(GET_CURRENT_USER, data);

export const selectUser = store => store.user;
export const selectUserType = store => store.user.userType;

export const clearExpertCoins = store => clearRest(store, 'GET_EXPERT_COINS')