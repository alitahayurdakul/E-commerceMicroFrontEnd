import { mount } from 'bag/BagApp';
import React, {useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';

export default ({orderList, removeOrder, increaseOrderCount, decreaseOrderCount}) =>{
    const ref = useRef(null);
    const history = useHistory();

    useEffect(()=>{
        const { onParentNavigate } = mount(ref.current,{
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname}) => {
                const { pathname } = history.location;

                if(pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            increaseOrderCount,
            decreaseOrderCount,
            removeOrder,
            orderList
        });
        history.listen(onParentNavigate);
    },[]);

    return <div ref={ref} />
}
