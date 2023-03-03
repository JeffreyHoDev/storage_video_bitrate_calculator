import { useEffect, useRef } from 'react'
import { Button } from '@mui/material'

import './video.component.styles.css'
const WallVideoPlayer = ({ playVideoWall, setPlayVideoWall, resolution, wallList, setWallList, index }) => {

    let dayRef = useRef(undefined)
    let nightRef = useRef(undefined)
    useEffect(() => {
        if(playVideoWall){
            dayRef.current.play()
            nightRef.current.play()
        }else {
            dayRef.current.pause()
            nightRef.current.pause()
        }
        
    }, [playVideoWall])

    let sourceVideo = resolution.resolution
    if(resolution.resolution === "D1") {
        sourceVideo = "360p"
    }
    if(resolution.resolution === "CIF") {
        sourceVideo = "240p"
    }

    const removeFromWallList = () => {
        let newArray = wallList.filter((item, itemIndex) => itemIndex !== index)
        setWallList([].concat(newArray))
    }

    const onHandleEnd = () => {
        setPlayVideoWall(!playVideoWall)
    }


    return (
        <>
            <div className='wall-video-player-container'>
                <div className='wall-overall-container'>
                    <div className='wall-video-container'>
                        <div className='unit'>
                            <h5>Day View</h5>
                            <div className='unit-video-container'>
                                <video className='wall-video' ref={dayRef} onEnded={onHandleEnd} muted="muted">
                                    <source src={require(`../../assets/${sourceVideo}-day-rain.mp4`)} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className='unit'>
                            <h5>Night View</h5>
                            <div className='unit-video-container'>
                                <video className='wall-video' ref={nightRef} onEnded={onHandleEnd} muted="muted">
                                    <source src={require(`../../assets/${sourceVideo}-night-rain.mp4`)} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wall-video-info-container'>
                    <h5>Resolution: {resolution.resolution}</h5>
                    <Button disabled={playVideoWall} className='remove-wall-video-button' variant='contained' color="error" onClick={removeFromWallList}>Remove</Button>
                </div>
            </div>
        </>
    )
}

export default WallVideoPlayer