import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import Bag from "./Components/Bag";


export default ({ history, orderList, removeOrder, increaseOrderCount, decreaseOrderCount }) => {

    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/my-bag" >
                    <Bag orderList={orderList} removeOrder={removeOrder} increaseOrderCount={increaseOrderCount} decreaseOrderCount={decreaseOrderCount} />
                </Route>
            </Switch>
        </Router>
    )
}