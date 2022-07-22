import React from "react";
import { createBrowserHistory, createMemoryHistory } from "history";
import { createRoot } from "react-dom/client";
import App from './App'

const mount = (el, { orderList, increaseOrderCount, decreaseOrderCount, removeOrder, initialPath, onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if(onNavigate){
        history.listen(onNavigate)
    }

    const root = createRoot(el);
    root.render(<App history={history} orderList={orderList} removeOrder={removeOrder} increaseOrderCount={increaseOrderCount} decreaseOrderCount={decreaseOrderCount} />);

    return {
        onParentNavigate({ pathname: nextPathname}) {
            const { pathname } = history.location;

            if(pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_basket-dev-root');

    if(devRoot){
        mount(devRoot, {defaultHistory:createBrowserHistory()});
    }
}

export { mount };