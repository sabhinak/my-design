import React, {useState, useEffect, useRef} from 'react';

const TransitionedSteps = ({children, infinity = false}) => {
    children = !Array.isArray(children)? [children] : children;
    
    let [activeIndex, setActiveIndex] = useState(0);

    const nextActiveIndex = () => {
        let next = activeIndex + 1;
        if(next >= children.length)
        {
            if (infinity)
            {
                return 0;
            }

            throw new Error('Elements finished');
        }
        return next;
    }
    
    const activeElemRef = useRef(null);
    const onExitTransitionEndHandler = () => {
        try{
            setActiveIndex(nextActiveIndex());    
        }
        catch(e){
            // do nothing
        }
    }
    return <TransitionWrapper 
            key={activeIndex}
            reactElem={children[activeIndex]} 
            ref={activeElemRef}
            onExitTransitionEnd={onExitTransitionEndHandler}
            />;
}

const TransitionWrapper = React.forwardRef((props, ref) => {
    let [styles, setStyles] = useState({});

    useEffect(() => {
        let count = 0;
        const handler = () => {
            count++;
            if(1 === count)
            {
                setStyles(props.reactElem.props.exit);
            }

            if (2 === count && props.onExitTransitionEnd)
            {
                if (undefined === props.reactElem.props.debug)
                {
                    props.onExitTransitionEnd();     
                }
            }
        } 

        setStyles(props.reactElem.props.enter);
        ref.current.addEventListener('transitionend', handler);
        return () => {
            ref.current.removeEventListener('transitionend', handler);
        }
    }, [])
    
    return <props.reactElem.type 
                {...props.reactElem.props} 
                ref={ref}
                style={styles}
            >
                {props.reactElem.props.children}
            </props.reactElem.type>
});

export default TransitionedSteps;