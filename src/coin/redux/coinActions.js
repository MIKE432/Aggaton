import { requestAction, requestSuccessAction } from '../../core/rest/actionFactory'

export const SAVE_COIN = 'SAVE_COIN';
export const GET_COIN = 'GET_COIN';

export const saveCoin = coin => requestAction(SAVE_COIN, coin);
export const getCoin = id => requestAction(GET_COIN, id);