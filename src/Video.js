import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
function Video() {
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
                src="https://v16-web-newkey.tiktokcdn.com/e459a4351b550fed00953068b1b38a31/5f802afc/video/tos/useast2a/tos-useast2a-ve-0068c004/6b4b635e4f304df395ac7bb13615731d/?a=1988&br=1392&bt=696&cr=0&cs=0&dr=0&ds=3&er=&l=202010090318400101891940811D27B8D8&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=andyN2c7bWU4dzMzNDczM0ApN2Q7ZDU5OmRoNzszZTRkNmdwa3EtYzRycl5fLS1fMTZzcy41Yi4yXmIwXy4wNTIzNjI6Yw%3D%3D&vl=&vr=" ></video>
            <VideoFooter />
        </div>
    )
}

export default Video
