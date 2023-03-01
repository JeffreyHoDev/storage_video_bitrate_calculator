import Button from '@mui/material/Button';

const MUIButton = ({ label, onClickFunc, color }) => {

    return (
        <Button variant="contained" color={color} onClick={onClickFunc}>{label}</Button>
    )
}

export default MUIButton;