import Button from '@mui/material/Button';

const RemoveMUIButton = ({ channelList, id, setChannelList }) => {
    const removeFromChannelList = () => {
        let newArray = channelList.filter((item, index) => index !== id-1)
        setChannelList([].concat(newArray))
    }
    return (
        <Button variant="contained" onClick={removeFromChannelList}>Remove</Button>
    )
}

export default RemoveMUIButton;