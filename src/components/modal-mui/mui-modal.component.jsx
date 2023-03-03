import Button from '@mui/material/Button';
import VideoPlayer from '../video-player/video.component'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react'
import './mui-modal.component.styles.css'

const MUIModal = ({ row }) => {
    const [open, setOpen] = useState(false);
    const [interval, setFrameInterval] = useState(undefined)
    let [playing, setPlaying] = useState(false)
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
          <Button variant='contained' color="primary" onClick={handleToggle}>Frame Preview</Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <div className='video-container'>
                  <h5 style={{textAlign: 'center'}}>Preview currenly doesn't support bit rate and mode as parameters. The frame image is also scaled down to serve the image as close to video as much as possible</h5>
                  <h5 style={{textAlign: 'center'}}>Due to limitation of video sources, the video shown might not be similar as what chosen but will replace with video close to selection. Here are the references</h5>
                  <div className='video-info'>
                    <h6>1080p & 980p use 1080p video</h6>
                    <h6>720p use 720p video</h6>
                    <h6>WD1 & WHD1 use 480p video</h6>
                    <h6>D1 use 360p video</h6>
                    <h6>Others use 240p video</h6>
                  </div>
                  <Box sx={{width: '75', height: '75'}} className='button-container'>
                    <Button variant="contained" disabled={playing} onClick={handleToggle} color="error">Close</Button>
                  </Box>
                    <VideoPlayer playing={playing} setPlaying={setPlaying}  row={row} interval={interval} setFrameInterval={setFrameInterval} />
                </div>
            </Box>
          </Modal>
        </div>
      );
}

export default MUIModal