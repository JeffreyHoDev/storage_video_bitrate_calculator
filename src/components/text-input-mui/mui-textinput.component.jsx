import TextField from '@mui/material/TextField';

import { useState } from 'react'

const MUITextInput = ({ channelList, setChannelList, id }) => {

    const [hours, setHours] = useState(0)

    const durationInputHandler = (e) => {
        if(e.target.value < 0){
            alert("Duration should not be negative")
            setHours(0)
            let newArray = channelList.map((item, index) => {
                if(index === id-1){
                    item.duration = 0
                    return item
                }
                return item
                })
        
            setChannelList([].concat(newArray))
        }else {
            setHours(e.target.value)
            let newArray = channelList.map((item, index) => {
            if(index === id-1){
                item.duration = e.target.value
                return item
            }
            return item
            })
    
            setChannelList([].concat(newArray))
        }
        
    }

    return (
        <>
            <TextField value={hours} InputProps={{ inputProps: { min: 0 } }} onChange={durationInputHandler} label="Hours" variant="outlined" type='number'/>
        </>
    )
}

export default MUITextInput