import { useState, useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './video.component.styles.css'

const VideoPlayer = ({ interval, setFrameInterval, row, playing, setPlaying }) => {
    let { frame, resolution } = row
    let [ctx, setCtx] = useState(undefined)
    
    
    let canvas = useRef(undefined)
    let video = useRef(undefined)
    let unitVideoContainer = useRef(undefined)
    let canvasContainer = useRef(undefined)
    useEffect(() => {
        setCtx(canvas.current.getContext("2d"))
        
    }, [])

    let sourceVideoToChose = resolution === "P1080" || resolution === "P960" ? "1080p" 
    : resolution === "P720" ? "720p" 
    : resolution === "WD1" || resolution === "WHD1" ? "480p"
    : resolution === "D1" ? "360p" 
    : "240p"

    const grabFrame = () => {
        let width = video.current.videoWidth
        let height = video.current.videoHeight

        let scale_factor = Math.min(600 / width, 350 / height);
        let newWidth = width * scale_factor;
        let newHeight = height * scale_factor;
        let x = (canvas.current.width / 2) - (newWidth / 2);
        let y = (canvas.current.height / 2) - (newHeight / 2);
        return ctx.drawImage(video.current, x, y, newWidth, newHeight)
        // return ctx.drawImage(video.current, 0, 0, 500, 250)
        // html2canvas(unitVideoContainer.current)
        // .then(canvasImg => {
        //     if(canvasContainer.current.hasChildNodes()){
        //         canvasContainer.current.removeChild(canvasContainer.current.firstElementChild)
        //     }
        //     canvasContainer.current.appendChild(canvasImg)
        // })

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
                        <h5>Resolution: {sourceVideoToChose}</h5>
                        <h5>Frame: Max (Original)</h5>
                    </div>
                    <div className='original-video-container'>
                        <div className='original-unit-video' ref={unitVideoContainer}>
                            <video className='original-video' ref={video} onEnded={handleOnEnded} muted="muted">
                                <source src={require(`../../assets/${sourceVideoToChose}-day-normal.mp4`)} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className='clone-overall-container'>
                    <div className='info-container'>
                        <h3>Video with Settings</h3>
                        <h5>Resolution: {resolution}</h5>
                        <h5>Frame: {frame}</h5>
                    </div>
                    <div className='clone-video-container'>
                        <div className='canvas-container' ref={canvasContainer}>
                            {/* <canvas className='canvas' ref={canvas} width={video.current ? video.current.videoWidth: "500px"} height={video.current ? video.current.videoHeight : "300px"}/> */}
                            <canvas className='canvas' ref={canvas} width="500px" height="300px"/>
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