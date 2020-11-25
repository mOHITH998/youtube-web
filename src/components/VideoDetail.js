import React from 'react'

export const VideoDetail = ({ video }) => {
    if (!video) {
    return ( 
        <div className="ui segment">
            <div className="ui active loader"></div>
            <p></p>
        </div>
        );
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <div>           
            <div className="ui embed">
                <iframe title="Video Source" src={videoSrc} allowFullScreen />
                </div>
                <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;
