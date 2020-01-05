import React, { useRef} from 'react';
import useAdaptiveSize from './useAdaptiveSize';
import SplitUnit from './SplitUnit';
import RightCurveSplitUnit from './RightCurveSplitUnit';
import LeftCurveSplitUnit from './LeftCurveSplitUnit';
import SplitUnitContent from './SplitUnitContent';
import CSSTransitionedSteps from './CSSTransitionedSteps';
import styled, {keyframes} from 'styled-components';

// Constants

const BORDER_RADIUS = "15px";
const HeightDiv = "245px";

const ContainerDiv = styled.div`
    width: 80%;
    margin: auto;
    border: 1px solid black;
    height: 420px;
`;
// Transitioned Views
const ViewDiv = styled.div`
    height: ${HeightDiv};
    margin: auto;  
    width: ${ props => props.width }
    border-radius: ${ props => props.radius }
    background: ${ props => props.background }
    color: white;
    front-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    transition: opacity 0.95s;
    opacity: 1;
`;

const SplitUnitsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${HeightDiv};
    margin: auto;
    transition: opacity 0.95s;
    opacity: 1;
`;

const fadeIn = keyframes`
    0%, 50%{
        opacity: 0;
    }
    80% {
        opacity: 1
    }
`;

const FadeInUnitContent = styled(SplitUnitContent)`
    animation: ${fadeIn} 2.5s ease-out forwards;
`;

const SplitGraph = ({title, categoryImage, data, bgColor = "green"}) => {
    const sumTotal = getTotal(data);
    
    const containerDiv = useRef(null);
    let scale = useAdaptiveSize(containerDiv) / sumTotal * 0.7;

    return <ContainerDiv ref={containerDiv}>
        <div style={{marginBottom: '25px', textAlign: 'center'}}>
          {title}
        </div>
        
        <CSSTransitionedSteps>
            <ViewDiv
                width={(sumTotal * scale) + "px"}
                radius={BORDER_RADIUS}
                enter={{opacity: 0.9}}
                exit={{opacity: 0.8}}
                background={bgColor}
                >
                    <img src={categoryImage}
                    style={{
                    margin: '10px'
                    }}
                />
            </ViewDiv>
           
            <ViewDiv
                width={(sumTotal * scale) + "px"}
                radius={BORDER_RADIUS}
                enter={{opacity: 0.8}}
                exit={{opacity: 1}}
                background={bgColor}
                >
                   <h1 style={{margin: "auto"}}>{ sumTotal} Participants</h1>
            </ViewDiv>
            <SplitUnitsDiv>
                {getSplittingUnits(data, scale, bgColor, BORDER_RADIUS)}
            </SplitUnitsDiv>
        </CSSTransitionedSteps>
        
    </ContainerDiv>;   
}

function getSplittingUnits(data, scale, bgColor, radius = "45px"){
    return data.map((itemObj, index) => {
        let value = itemObj.value;
        let width = value * scale;
        let key = itemObj.key;
        let icon1 = itemObj.icon1;
        let icon2 = itemObj.icon2;
    

        if (0 === index)
        {
            return <LeftCurveSplitUnit 
                        radius={radius}
                        width={width + "px"}
                        key={key}
                        style={{background: bgColor}}
                        >
                           { createSplitUnitContent(icon1, value, icon2)}
                    </LeftCurveSplitUnit>
        }

        if (data.length - 1 === index)
        {
            return <RightCurveSplitUnit 
                        radius={radius}
                        width={width + "px"}
                        key={key}
                        style={{background: bgColor}}
                        >
                            { createSplitUnitContent(icon1, value, icon2)}
                    </RightCurveSplitUnit>
        }

        return <SplitUnit 
                    width={width + "px"}
                    key={key}
                    style={{background: bgColor}}
                    >
                        { createSplitUnitContent(icon1, value, icon2)}
                </SplitUnit>;
    });
}    

function createSplitUnitContent(icon1, number, icon2)
{
    return <FadeInUnitContent 
        icon1={icon1}
        number={number}
        icon2={icon2}
    />;
}

function getTotal(data)
{
    return data.reduce((acc, current) => { return acc + current.value }, 0);
}

export default SplitGraph;