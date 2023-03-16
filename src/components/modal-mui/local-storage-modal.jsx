import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react'
import './mui-modal.component.styles.css'

const LocalStorageModal = () => {
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
          <Button variant='contained' color="primary" onClick={handleToggle}>Apply Saved Configurations</Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='local-storage-container'>
                <Button variant='contained' color="error" onClick={handleToggle}>Close</Button>
                <h3>Saved Configurations</h3>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <List>
                      <ListItem>
                        <div className='list-item-container'>
                          <ListItemButton>
                            <ListItemText primary="1" />
                            <ListItemText primary="Name 1" />
                          </ListItemButton>
                          <ListItemAvatar>
                            <Avatar>
                              <DeleteIcon />
                            </Avatar>
                          </ListItemAvatar>
                        </div>
                      </ListItem>
                    </List>
                </Box>
              </div>
            </Box>
          </Modal>
        </div>
      );
}

export default LocalStorageModal