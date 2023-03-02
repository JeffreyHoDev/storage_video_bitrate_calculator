import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddWallVideoMUIModal = ({ setWallList, wallList }) => {
    const [open, setOpen] = useState(false);
    const [chosenOption, setChosenOption] = useState("1080p")

    const handleToggle = () => {
      setOpen(!open);
    }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      // border: '2px solid #000',
      boxShadow: 24,
      p: 5
    };

  
    const handleChange = (e) => {
      setChosenOption(e.target.value)
    }


    const addVideoToWallList = () => {
      if(wallList.length === 3){
        alert("Videos on wall maximum 3. Please remove and insert")
      }else {
        let clone = wallList
        clone.push(chosenOption)
        setWallList([].concat(clone))
        handleToggle()
      }
    }

    return (
        <div>
          <Button variant='contained' color="primary" onClick={handleToggle}>Add Wall Video</Button>
          <Modal
            open={open}
            onClose={handleToggle}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='add-resolution-video-wall-container'>
                <h2>Add Video Wall</h2>
                <InputLabel id="resolution-wall-video-select-label">Resolution</InputLabel>
                <Select
                  labelId="resolution-wall-video-select-label"
                  id="resolution-wall-video-select"
                  value={chosenOption}
                  label="Resolution"
                  onChange={handleChange}
                >
                  <MenuItem key={`res-1080`} value="1080p">1080p</MenuItem>
                  <MenuItem key={`res-720`} value="720p">720p</MenuItem>
                  <MenuItem key={`res-D1`} value="D1">D1</MenuItem>
                </Select>
                <Box sx={{ m: 5}}>
                  <Button variant='contained' color="success" onClick={addVideoToWallList}>Add Wall Video</Button>
                </Box>
              </div>
            </Box>
          </Modal>
        </div>
      );
}

export default AddWallVideoMUIModal