import { requestAction, requestSuccessAction, selectRest } from '../../core/rest/actionFactory'

export const SAVE_COIN = 'SAVE_COIN';
export const GET_COIN = 'GET_COIN';
export const GET_DATA_FORM = 'GET_DATA_FORM';

export const saveCoin = coin => requestAction(SAVE_COIN, coin);
export const saveCoinSuccess = () => requestSuccessAction(SAVE_COIN);
export const getDataToForm = () => requestAction(GET_DATA_FORM);
export const getDataToFormSuccess = data => requestSuccessAction(GET_DATA_FORM, data);

export const getCoin = id => requestAction(GET_COIN, id);
export const getCoinSuccess = () => requestSuccessAction(GET_COIN);

export const selectDataToForm = (state) => selectRest(state, GET_DATA_FORM);