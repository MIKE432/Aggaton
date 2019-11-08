import { requestAction, requestSuccessAction, selectRest, clearRest } from '../../core/rest/actionFactory'

export const SAVE_COIN = 'SAVE_COIN';
export const GET_COIN = 'GET_COIN';
export const GET_COINS = 'GET_COINS';
export const GET_EXPERT_COINS = 'GET_EXPERT_COINS';
export const GET_DATA_FORM = 'GET_DATA_FORM';

export const saveCoin = coin => requestAction(SAVE_COIN, coin);
export const saveCoinSuccess = () => requestSuccessAction(SAVE_COIN);

export const getCoins = () => requestAction(GET_COINS);
export const getCoinsSuccess = data => requestSuccessAction(GET_COINS, data);
export const getExpertCoins = () => requestAction(GET_EXPERT_COINS);
export const getExpertCoinsSuccess = data => requestSuccessAction(GET_EXPERT_COINS, data);

export const getDataToForm = () => requestAction(GET_DATA_FORM);
export const getDataToFormSuccess = data => requestSuccessAction(GET_DATA_FORM, data);

export const getCoin = id => requestAction(GET_COIN, id);
export const getCoinSuccess = data => requestSuccessAction(GET_COIN, data);

export const selectDataToForm = state => selectRest(state, GET_DATA_FORM);
export const selectCoins = state => selectRest(state, GET_COINS);
export const selectExpertCoins = state => selectRest(state, GET_EXPERT_COINS);


export const clearCoins = (state) => clearRest(state, 'GET_COINS')