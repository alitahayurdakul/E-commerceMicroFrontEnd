import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import NotFound from "./Components/NotFound/NotFound";
import Home from './Components/Home/Home.js';
import Detail from "./Components/Detail/Detail";

export default ({ history, addOrderList }) => {

    return (
        <Router history={history} >
            <Switch>

                <Route exact path="/">
                    <Home addOrderList={addOrderList} />
                </Route>

                <Route exact path="/product/detail/:id">
                    <Detail addOrderList={addOrderList} />
                </Route>
                
                {/* <Route render={() => <NotFound />} /> */}
            </Switch>
        </Router>
    )
}