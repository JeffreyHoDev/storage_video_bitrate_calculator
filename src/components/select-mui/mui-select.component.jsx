import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from 'react'

const MUISelect = ({ options, label, resolution, channelList, setChannelList, id })  => {


    const [chosenOption, setChosenOption] = useState(options[0])

    const handleChange = (e) => {
      let editedChannel = channelList.map((item, index) => {
        if(index === id-1){
          let key = label.toLowerCase()
          item[key] = e.target.value
          return item
        }
        return item
      })
      setChannelList([].concat(editedChannel))
      setChosenOption(e.target.value)
    }


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chosenOption}
          label={label}
          onChange={handleChange}
        >
            {
                options.map((value, index) => {
                    return <MenuItem key={`option-index-${index}`} value={value}>{value}</MenuItem>
                })
            }
        </Select>
        { resolution ? resolution[chosenOption] : null}
      </FormControl>
    </Box>
  );
}

export default MUISelect