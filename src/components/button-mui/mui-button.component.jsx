import Button from '@mui/material/Button';

const MUIButton = ({ label, onClickFunc }) => {

    return (
        <Button variant="contained" onClick={onClickFunc}>{label}</Button>
    )
}

export default MUIButton;