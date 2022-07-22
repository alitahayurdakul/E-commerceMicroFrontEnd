import * as constants from './constants';

const initialState = {
    orderList: []
}


export default function store(state = initialState, action) {
    const actions = action;

    switch (actions.type) {

        case constants.SET_ORDER_LIST: {
            return {
                ...state,
                orderList: action.payload
            }
        }

        case constants.ADD_ORDER_LIST: {

            const productIndex = state.orderList.map((item) => item.order.id).indexOf(action.payload.id);
            const order = action.payload;

            if (productIndex === -1) {
                return {
                    ...state,
                    orderList: [...state.orderList, { order, count: 1 }]
                }
            }

            else {
                const copy = state.orderList.slice();
                copy[productIndex].count += 1;

                return {
                    ...state,
                    orderList: copy
                }
            }

        }

        case constants.REMOVE_ORDER: {
            const newOrderList = state.orderList.filter(item => item.order.id !== action.payload);
            
            return {
                ...state,
                orderList: newOrderList
            }
        }

        case constants.INCREASE_ORDER_COUNT: {
            const productIndex = state.orderList.map((item) => item.order.id).indexOf(action.payload);
            const copy = state.orderList.slice();
            copy[productIndex].count += 1;

            return {
                ...state,
                orderList: copy
            }
        }

        case constants.DECREASE_ORDER_COUNT: {
            const productIndex = state.orderList.map((item) => item.order.id).indexOf(action.payload);
            const copy = state.orderList.slice();
            copy[productIndex].count -= 1;

            return {
                ...state,
                orderList: copy
            }
        }

        default:
            return state;
    }
}