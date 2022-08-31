import { mount } from 'home/HomeApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ addOrderList }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {// Shell A pp'in pathname'ini nextPathname diye atadık.
                const { pathname } = history.location; // SubApp'in pathname'i.
                // SubApp listen(ShellApp) yaptığında ki pathname'i, ShellApp'in pathname'i ile aynı değilse, subApp'in pathname'ini Shell App'in pathname'ine güncelle. 
                // yani memory history'nin url'sini güncelle ve contenti güncellensin.
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            addOrderList
        });

        history.listen(onParentNavigate);
    }, [])

    return <div ref={ref} />
}