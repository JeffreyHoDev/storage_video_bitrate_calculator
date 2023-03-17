import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { useState } from 'react'

import './mui-modal.component.styles.css'

const SaveLocalStorageModal = ({ channelList, setStorageLength }) => {
    const [open, setOpen] = useState(false);
    const [ templateName, setTemplateName ] = useState("")

    const handleToggle = () => {
      setOpen(!open);
    }

    const handleSaveLocalStorage = () => {
      let currentLocal = JSON.parse(localStorage.getItem('PJakvvAbksa2AHM*.9mo'))
      if(!currentLocal){ // If first time
        currentLocal = []
      }
      if(channelList.length === 0){
        alert("Please have at least one channel configuration")
      }else {
        let objectToBeAdd = {
          "name": templateName,
          "data": channelList
        }
        currentLocal.push(objectToBeAdd)
        localStorage.setItem('PJakvvAbksa2AHM*.9mo', JSON.stringify(currentLocal))
        alert("Success Save")
        setStorageLength(prev => prev + 1)
        setOpen(false)
      }
    }

    /*
      Local Storage Structure:
        [
          {
            "name": String,
            "data": [] This will represent the channel list
          },
          {
            "name": String,
            "data": []
          }
        ]
    */

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
          <Button variant='contained' color="secondary" style={{marginTop: ".5rem"}} onClick={handleToggle}>Save Configurations</Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='save-to-local-storage-container'>
                <Button variant='contained' color="error" onClick={handleToggle}>Close</Button>
                <TextField onChange={(e) => setTemplateName(e.target.value)} id="save-config-name" label="Name" variant="outlined" />
                <Button variant='contained' color="success" onClick={handleSaveLocalStorage}>Save</Button>
              </div>
            </Box>
          </Modal>
        </div>
      );
}

export default SaveLocalStorageModal