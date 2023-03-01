import Button from '@mui/material/Button';
import VideoPlayer from '../video-player/video.component'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react'
import './mui-modal.component.styles.css'

const MUIModal = ({ row }) => {
    const [open, setOpen] = useState(false);
    const [interval, setFrameInterval] = useState(undefined)

    const handleToggle = () => {
      setOpen(!open);
      clearInterval(interval)
      setFrameInterval(undefined)
    }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      // border: '2px solid #000',
      boxShadow: 24,
      p: 2
    };

    useEffect(() => {
      return () => clearInterval(interval)
      
    }, [])
    useEffect(() => {
      return () => setFrameInterval(undefined)
      
    }, [])

    return (
        <div>
          <Button variant='contained' color="primary" onClick={handleToggle}>Video Preview</Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <div className='video-container'>
                  <h5 style={{textAlign: 'center'}}>Preview currenly doesn't support bit rate and mode as parameters</h5>
                  <Box sx={{width: '75', height: '75'}} className='button-container'>
                    <Button variant="contained"  onClick={handleToggle} color="error">Close</Button>
                  </Box>
                    <VideoPlayer row={row} interval={interval} setFrameInterval={setFrameInterval} />
                </div>
            </Box>
          </Modal>
        </div>
      );
}

export default MUIModal