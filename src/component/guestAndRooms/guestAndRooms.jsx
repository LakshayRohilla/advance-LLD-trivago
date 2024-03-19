import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";
import GuestAndRoom from './guest-and-rooms-selection';
import Divider from '@mui/material/Divider';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { guestAndRoom } from '../../store/searchSlice';

const GuestAndRooms = function(){

    const [open, setOpen] = useState(false);
    const [adult, setAdult] = useState();
    const [children, setChildren] = useState();
    const [room, setRoom] = useState();
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allData = (adult, children, room) => {
    setAdult(adult);
    setChildren(children);
    setRoom(room);
  }
  const dispatch = useDispatch();
  const onApplyClickHandler = () => {
    dispatch(guestAndRoom({'adult': adult, 'children': children, 'room': room}));
  }
  const data = useSelector((state) => state.search.guestAndRoom);
  const handleApply = () => {
    handleClose(); // Call handleClose function
    onApplyClickHandler(); // Call additional function
  };

//   const InputCSS = {
//     width: '10px'
//   }

  return (
    <React.Fragment>
      {/* <Button  onClick={handleClickOpen} sx={{...InputCSS}}>
        ## Guest and ## Rooms
      </Button> */}
      <Typography onClick={handleClickOpen} style={{cursor: 'pointer'}}>
        {data.adult && data.room ? `${data.adult} Guests & ${data.room} Rooms` : 'Guests And Rooms'}
                
            </Typography>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Select Guests & Rooms"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider variant='middle'/>
        <DialogContent>
          <DialogContentText>
            <GuestAndRoom provideData={allData}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleApply}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default GuestAndRooms;