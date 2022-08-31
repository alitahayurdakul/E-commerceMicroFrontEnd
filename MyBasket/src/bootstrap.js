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
        onParentNavigate({ pathname: nextPathname}) {//SubApp'in pathname'ini nextPathname'e atadık.
            const { pathname } = history.location; // Shell App'in current pathname'i.
            // ShellApp listen yaptığında ki pathname'i, SubApp'in pathname'i ile aynı değilse, shellApp'in pathname'ini SubApp'in pathname'ine güncelle. 
            // yani browser history'nin url'sini memory history'nin içinde bulunduğu url'e göre güncelle ve contenti güncellensin.
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