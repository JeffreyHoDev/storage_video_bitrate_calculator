import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { useState } from 'react'

import './mui-modal.component.styles.css'

const SaveLocalStorageModal = ({ localStorage, setLocalStorage }) => {
    const [open, setOpen] = useState(false);

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

    return (
        <div>
          <Button variant='contained' color="primary" onClick={handleToggle}>Save Configurations</Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='save-to-local-storage-container'>
                <Button variant='contained' color="error" onClick={handleToggle}>Close</Button>
                <TextField id="save-config-name" label="Name" variant="outlined" />
                <Button>Save</Button>
              </div>
            </Box>
          </Modal>
        </div>
      );
}

export default SaveLocalStorageModal