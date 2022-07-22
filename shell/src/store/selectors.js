import { createSelector } from "reselect";

const domain = state => state;

export const selectOrderList = () => createSelector(
    domain,
    substate => substate.orderList
)