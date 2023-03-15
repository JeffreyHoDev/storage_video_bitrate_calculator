import { combineReducers } from '@reduxjs/toolkit'
import { VideoWallReducer } from './video-wall/video-wall.reducer'

export const rootReducer = combineReducers({
    videoWall: VideoWallReducer
})
