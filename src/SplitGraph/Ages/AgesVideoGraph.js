import React from 'react';
import VideoView from '../../VideoView';
import styled from 'styled-components';
import agesVideo from './Ages.mp4';
import GraphContainer from './../../GraphContainer.js';

const AgesVideoView = styled(VideoView)`
    width: 90%;
    margin: auto;
    height: 500px;
`;

const title = (<div>
    <h1>Ages</h1>
    </div>);

const AgesVideoGraph = () => {
    return <GraphContainer title={title}>
        <AgesVideoView src={agesVideo} width="100%" height="100%" />
    </GraphContainer>;
}

export default AgesVideoGraph;