const INITIAL_VALUES = {
    channelList: []
}


export const ChannelReducer = (state=INITIAL_VALUES, action) => {
    switch(action.type){
        case 'ADD_CHANNEL':
            let clone = Array.from(state.channelList)
            clone.push(action.payload)
            return {...state, channelList: [].concat(clone)}
        default:
            return state
    }
}