import Button from '@mui/material/Button';
import VideoPlayer from '../video-player/video.component'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react'
import './mui-modal.component.styles.css'

const MUIModal = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80rem',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4
    };

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
                  <Box sx={{width: '75', height: '75'}} className='button-container'>
                    <Button variant="contained"  onClick={handleToggle} color="error">Close</Button>
                  </Box>
                    <VideoPlayer />
                </div>
            </Box>
          </Modal>
        </div>
      );

    // return (
    //     <>
    //         <Button onClick={handleToggle} variant="contained" >Preview</Button>
    //         <div className='backdrop-container'>
    //             <Backdrop
    //                 sx={{ color: '#fff', zIndex: 'modal' }}
    //                 open={open}
    //             >
    //                 <div className='video-container'>
    //                     <Button variant="contained" onClick={handleToggle}>Close</Button>
    //                     <VideoPlayer />
    //                 </div>
    //             </Backdrop>
    //         </div>
    //     </>
    // )
}

export default MUIModal