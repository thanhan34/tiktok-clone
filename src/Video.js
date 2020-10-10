import React, { useRef, useState, useEffect } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSiderbar from './VideoSiderbar';
function Video({ url, channel, description, song, likes, messages, shares }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };


    return (
        <div className="video">
            <video
                className="video__player"
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src={url} ></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSiderbar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video
