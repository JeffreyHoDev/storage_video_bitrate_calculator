import { useEffect, useRef } from 'react'
import { Button } from '@mui/material'

import './video.component.styles.css'

import { useSelector } from 'react-redux'
import { getVideoWallStatus } from '../../redux/video-wall/video-wall.selector'

const WallVideoPlayer = ({ resolution, wallList, setWallList, index, setCountPlayedFinish  }) => {

    let dayRef = useRef(undefined)
    let nightRef = useRef(undefined)

    const { playVideoWall } = useSelector(getVideoWallStatus)

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
        setCountPlayedFinish(prev => prev + 1)
    }


    return (
        <>
            <div className='wall-video-player-container'>
                <div className='wall-overall-container'>
                    <div className='wall-video-container'>
                        <div className='unit'>
                            <p >Day View</p>
                            <div className='unit-video-container'>
                                <video className='wall-video' ref={dayRef} onEnded={onHandleEnd} muted="muted">
                                    <source src={require(`../../assets/${sourceVideo}-day-normal.mp4`)} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className='unit'>
                            <p>Night View</p>
                            <div className='unit-video-container'>
                                <video className='wall-video' ref={nightRef} onEnded={onHandleEnd} muted="muted">
                                    <source src={require(`../../assets/${sourceVideo}-night-normal.mp4`)} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wall-video-info-container'>
                    <p>Resolution: {resolution.resolution}</p>
                    <Button disabled={playVideoWall} className='remove-wall-video-button' variant='contained' color="error" onClick={removeFromWallList}>Remove</Button>
                </div>
            </div>
        </>
    )
}

export default WallVideoPlayer