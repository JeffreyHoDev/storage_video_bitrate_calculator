import { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './video.component.styles.css'
const VideoPlayer = ({ interval, setFrameInterval, row }) => {
    let { frame, resolution } = row
    let [ctx, setCtx] = useState(undefined)
    let [playing, setPlaying] = useState(false)
    
    let canvas = useRef(undefined)
    let video = useRef(undefined)
    useEffect(() => {
        setCtx(canvas.current.getContext("2d"))
        
    }, [])

    const grabFrame = () => {
        // video.current.videoHeight
        // video.current.videoWidth
        return ctx.drawImage(video.current, 0, 0, video.current.videoWidth, video.current.videoHeight)
    }

    const play = () => {
        if(video.current.paused){
            if(interval){
                clearInterval(interval)
            }
            video.current.play()
            setPlaying(true)
            setFrameInterval(setInterval(grabFrame, 1000 / frame))
        }else {
            clearInterval(interval)
            setFrameInterval(undefined)
            video.current.pause()
            setPlaying(false)
        }
    }

    const handleOnEnded = () => {
        clearInterval(interval)
        setFrameInterval(undefined)
        setPlaying(false)
    }

    return (
        <>
            <div className='video-player-container'>
                <div className='original-overall-container'>
                    <div className='info-container'>
                        <h3>Original Video</h3>
                        <h5>Resolution: 1080p</h5>
                        <h5>Frame: Max (Original)</h5>
                    </div>
                    <div className='original-video-container'>
                        <video ref={video} onEnded={handleOnEnded}>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className='clone-overall-container'>
                    <div className='info-container'>
                        <h3>Video with Settings</h3>
                        <h5>Resolution: {resolution}</h5>
                        <h5>Frame: {frame}</h5>
                    </div>
                    <div className='clone-video-container'>
                        <div className='canvas-container'>
                            <canvas className='canvas' ref={canvas} width={video.current ? video.current.videoWidth: "500px"} height={video.current ? video.current.videoHeight : "300px"}/>
                        </div>
                    </div>
                </div>
            </div>
            <Box sx={{width: '75', height: '75'}} className='button-container'>
                <Button type="button" variant='contained' color={playing ? "error" : "success"} onClick={play}>
                    {playing ? 'Pause' : 'Play'}
                </Button>
            </Box>
        </>
    )
}

export default VideoPlayer