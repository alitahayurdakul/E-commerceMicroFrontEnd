import * as constants from './constants';

export const setOrderList = orderList => ({
    type: constants.SET_ORDER_LIST,
    payload: orderList
});

export const addOrderList = order => ({
    type: constants.ADD_ORDER_LIST,
    payload: order
});

export const removeOrder = orderId => ({
    type: constants.REMOVE_ORDER,
    payload: orderId
})

export const increaseOrderCount = orderId => ({
    type: constants.INCREASE_ORDER_COUNT,
    payload: orderId
})

export const decreaseOrderCount = orderId => ({
    type: constants.DECREASE_ORDER_COUNT,
    payload: orderId
})