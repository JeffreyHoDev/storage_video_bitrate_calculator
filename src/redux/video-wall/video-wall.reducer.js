import { VIDEO_WALL_TYPE_CONSTANT } from './video-wall.types'

export const INITIAL_STATES = {
    playVideoWall: false
}

export const VideoWallReducer = (state=INITIAL_STATES, action={}) => {
    const { type, payload } = action
    switch(type){
        case VIDEO_WALL_TYPE_CONSTANT.TOOGLE_PLAY:
            return { ...state, playVideoWall: !state.playVideoWall }
        case VIDEO_WALL_TYPE_CONSTANT.PAUSE_PLAY:
            return { ...state, playVideoWall: false }
        default:
            return state
    }
}