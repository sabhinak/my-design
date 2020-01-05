import React from 'react';

const VideoView = ({src, width, height, className}) => {
    return <div className={className}>
        <video height={height} width={width} autoPlay>
            <source src={src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>;
};

export default VideoView;