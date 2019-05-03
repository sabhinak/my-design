import styled, {keyframes} from 'styled-components';

const animationKeyframes = keyframes`
    0% {
        margin: 0;
    }

    30% {
        margin: 0;
    }

    50% {
        margin: 0 16px 0 16px;
    }

    55% {
        margin: 0 16px 0 16px;
    }

    85% {
        margin: 0 5px 0 5px;
    }

    88% {
        margin: 0 7px 0 7px;ß
    }

    94% {
        margin: 0 5.5px 0 5.5px;
    }

    97% {
        margin: 0 6.5px 0 6.5px;
    }

    100% {
        margin: 0 5.5px 0 5.5px;
    }
`;

const width = props => props.width ;
const animTime = props => (props.animTime || 2) + 's';

const AnimatedDiv = styled.div`
    width: ${width};
    height: 100%;
    animation: ${animationKeyframes} ${animTime} ease-out forwards;
`;

export default AnimatedDiv;

