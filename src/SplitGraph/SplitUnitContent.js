import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    position: relative;
    padding: 10px;
    margin: 0;

`
const ValueNumber = styled.p`
    text-align: center;    
    color: white;
    font-weight: bold;
    width: 100%;
`;

const IconImage = styled.img`
    height: 35%;
    min-width: 45px;
    min-height: 85px;
`;

const SplitUnitContent = ({icon1, number, icon2}) => {
    return <ContainerDiv>
        <IconImage src={icon1}/>
        <ValueNumber>{Math.floor(number)}</ValueNumber>
        <IconImage src={icon2}/>
    </ContainerDiv>;
}

export default SplitUnitContent;