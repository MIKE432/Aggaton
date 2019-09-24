export const requestAction = (baseType, payload) => ({ type: `${baseType}/REQUEST`, baseType, payload });

export const requestSuccessAction = (baseType, data) => ({ type: `${baseType}/SUCCESS`, baseType, data });

export const selectRest = (state, baseType) => state.rest[baseType];