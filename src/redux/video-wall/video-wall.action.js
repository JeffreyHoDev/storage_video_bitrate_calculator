import { VIDEO_WALL_TYPE_CONSTANT } from './video-wall.types'
import { createActionObject } from '../util'

export const toogleVideoWall = () => createActionObject(VIDEO_WALL_TYPE_CONSTANT.TOOGLE_PLAY)
export const pauseVideoWall = () => createActionObject(VIDEO_WALL_TYPE_CONSTANT.PAUSE_PLAY)