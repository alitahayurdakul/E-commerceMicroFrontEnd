import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrderList, addOrderList, removeOrder, increaseOrderCount, decreaseOrderCount } from './store/actions';
import { createStructuredSelector } from 'reselect';
import { selectOrderList } from './store/selectors';

const history = createBrowserHistory();
const SearchProductsLazy = lazy(() => import("./components/Applications/SearchProductsApp"));
const HomeLazy = lazy(() => import('./components/Applications/HomeApp'));
const BagLazy = lazy(() => import('./components/Applications/BagApp'));

const App = (props) => {
    
    return (
        <Router history={history}>
            <Navbar />
            <Suspense fallback={<h1>Sayfa Yükleniyor...</h1>} >
                <Switch>
                    <Route path="/products">
                        <SearchProductsLazy addOrderList={props.addOrderList} />
                    </Route>

                    <Route path="/my-bag">
                        <BagLazy increaseOrderCount={props.increaseOrderCount} orderList={props.orderList} decreaseOrderCount={props.decreaseOrderCount} removeOrder={props.removeOrder} />
                    </Route>

                    {/* Bunu ilke yazarsak direk ona girer diğerlerine girmez ve onn içinde arar. */}
                    <Route path="/">
                        <HomeLazy addOrderList={props.addOrderList} />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}

const mapStateToProps = createStructuredSelector({
    orderList:selectOrderList(),
})

const mapDispatchToProps = dispatch => (
    (
        bindActionCreators({
            setOrderList, addOrderList, removeOrder, increaseOrderCount, decreaseOrderCount
        }, dispatch)
    )
)

export default connect(mapStateToProps, mapDispatchToProps)(App);