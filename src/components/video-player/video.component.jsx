import { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './video.component.styles.css'
const VideoPlayer = () => {
    let frame = 1
    const [interval, setFrameInterval] = useState(undefined)
    let [ctx, setCtx] = useState(undefined)
    
    let canvas = useRef(undefined)
    let video = useRef(undefined)

    useEffect(() => {
        setCtx(canvas.current.getContext("2d"))
        return () => {}
    }, [])


    const grabFrame = () => {
        return ctx.drawImage(video.current, 0 , 0, 676, 480)
    }

    const play = () => {
        if(video.current.paused){
            if(interval){
                clearInterval(interval)
            }
            video.current.play()
            setFrameInterval(setInterval(grabFrame, 1000/frame))
        }else {
            clearInterval(interval)
            setFrameInterval(undefined)
            video.current.pause()
        }
    }

    return (
        <>
            <div className='video-player-container'>
                <div className='original-video-container'>
                    <video ref={video} width="480" height="676">
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className='clone-video-container'>
                    <canvas ref={canvas} width="480" height="676"/>
                </div>
            </div>
            <Box sx={{width: '75', height: '75'}} className='button-container'>
                <Button type="button" variant='contained' color="primary" onClick={play}>
                    Play Video
                </Button>
            </Box>
        </>
    )
}

export default VideoPlayer