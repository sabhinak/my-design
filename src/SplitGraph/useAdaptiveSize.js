import React, {useState, useLayoutEffect} from 'react';

export default function(elemRef){
    let [width, setWidth] = useState(0);
    
    const windowResizeHandler = () => {
        setWidth(parseInt(elemRef.current.offsetWidth));
    };

    useLayoutEffect(
        () => {
            windowResizeHandler();
            window.addEventListener('resize', windowResizeHandler);
            return () => {
                window.removeEventListener('resize', windowResizeHandler);
            }
        }
    );

    return width;
}
