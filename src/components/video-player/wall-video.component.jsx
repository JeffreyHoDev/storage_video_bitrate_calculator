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

    const removeFromWallList = () => {
        let newArray = wallList.filter((item, itemIndex) => itemIndex !== index)
        setWallList([].concat(newArray))
    }

    const onHandleEnd = () => {
        setPlayVideoWall(!playVideoWall)
        dayRef.current.pause()
        nightRef.current.pause()
    }


    return (
        <>
            <div className='wall-video-player-container'>
                <div className='wall-overall-container'>
                    <div className='wall-video-container'>
                        <div>
                            <h5>Day View</h5>
                            <video className='wall-video' ref={dayRef} onEnded={onHandleEnd} >
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <div>
                            <h5>Night View</h5>
                            <video className='wall-video' ref={nightRef} onEnded={onHandleEnd}>
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className='wall-video-info-container'>
                    <h5>Resolution: {resolution}</h5>
                    <Button className='remove-wall-video-button' variant='contained' color="error" onClick={removeFromWallList}>Remove</Button>
                </div>
            </div>
        </>
    )
}

export default WallVideoPlayer