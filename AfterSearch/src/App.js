import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import SearchProduct from "./Components/SearchProduct";

export default ({ history, addOrderList }) => {

    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/products/:id" component={SearchProduct} >
                    <SearchProduct addOrderList={addOrderList}/>
                </Route>
            </Switch>
        </Router>
    )
}