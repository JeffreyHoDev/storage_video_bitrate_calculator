import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

import { useEffect, useState } from 'react'
import './mui-modal.component.styles.css'

const LocalStorageModal = ({ setChannelList, setStorageLength, storageLength }) => {
    const [open, setOpen] = useState(false);
    const [ dataFromLocalStorage, setDataFromLocalStorage ] = useState([])
    

    const handleToggle = () => {
      setOpen(!open);
    }

    useEffect(() => {
      let existingStorage = JSON.parse(localStorage.getItem('PJakvvAbksa2AHM*.9mo'))
      if(existingStorage){
        setDataFromLocalStorage([].concat(existingStorage))
        setStorageLength(existingStorage.length)
      }
    },[open])


    const selectConfigurations = (index) => {
      // Index of the localStorage
      let requiredSet = dataFromLocalStorage[index].data
      setChannelList(prev => [])
      setChannelList(prev => [].concat(requiredSet))
      setOpen(false)
    }

    const removeFromLocalStorage = (indexToBeRemoved) => {
      let newSet = dataFromLocalStorage.filter((item, index) => {
        return index !== indexToBeRemoved
      })
      localStorage.setItem('PJakvvAbksa2AHM*.9mo', JSON.stringify(newSet))
      setDataFromLocalStorage([].concat(newSet))
      setStorageLength(prev => prev-1)
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

    return (
        <div>
          <div className='local-storage-action-container'>
            <Button variant='contained' color="secondary" style={{marginRight: "1rem"}} onClick={handleToggle}>Apply Saved Configurations</Button>
            <p>You have {storageLength} templates saved</p>
          </div>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='local-storage-container'>
                <Button variant='contained' color="error" onClick={handleToggle}>Close</Button>
                <h3>Saved Configurations</h3>
                <p>Click on one of the saved template to apply the configurations</p>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <List>
                      {
                        dataFromLocalStorage.map((item, index) => {
                          return (
                            <ListItem key={`localstorage-${index}`}>
                              <div className='list-item-container'>
                                <ListItemButton onClick={() => selectConfigurations(index)}>
                                  <ListItemText primary={index} />
                                  <ListItemText primary={item.name} />
                                </ListItemButton>
                                <ListItemAvatar>
                                  <Avatar>
                                    <DeleteForeverTwoToneIcon style={{cursor: "pointer"}} color="error" onClick={() => removeFromLocalStorage(index)}/>
                                  </Avatar>
                                </ListItemAvatar>
                              </div>
                            </ListItem>
                          )
                        })
                      }
                    </List>
                </Box>
              </div>
            </Box>
          </Modal>
        </div>
      );
}

export default LocalStorageModal