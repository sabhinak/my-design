import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: 80%;
    margin: auto;
    border: 1px solid black;
    min-height: 420px;
`;

const GraphContainer = (props) => {
    return <ContainerDiv {...props}>
        <div style={{marginBottom: '25px', textAlign: 'center'}}>
          {props.title}
        </div>

        {props.children}
    </ContainerDiv>;
};

export default GraphContainer;