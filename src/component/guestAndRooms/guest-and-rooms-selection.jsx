import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import InputField from "./input-field";
import { useEffect, useState } from "react";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   // padding: theme.spacing(1),
//   textAlign: 'center',
//   // alignItems: "center",
//   // display: 'flex',
//   // justifyContent: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function GuestAndRoom({provideData}) {

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const boldLable = {
    fontWeight : 'bolder',
    color: 'black'
  }

  const [adult, setAdult] = useState(2);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const adultButtonDisable = adult <= 0;
  const childrenButtonDisable = children <= 0;
  const roomButtonDisable = room == 1;
  const adultButtonDisablePerRoom = room*2 == adult; 


  // function onClickAdultHandler() {
  //   setGuest(guest+1);
  //   console.log(guest);
  //   // dispatch this.
  // }

  // function onClickChildrenHandler() {
  //   setChildren(children+1);
  //   console.get(children);
  //   // dispatch this.
  // }

  // function onClicRoomkHandler() {
  //   setRoom(room+1);
  //   console.log(room);
  //   // dispatch this.
  // }
  
  function onClickAdd(stateUpdater, stateName){
    stateUpdater(+stateName+1);
    if(adultButtonDisablePerRoom) setAdult(adult);
  }

  const onClickIfAddButtonDisable = () => {
    if(adultButtonDisablePerRoom) alert('One room can have only 2 people !!!');
  }

  const handleApply = () => {
    onClickIfAddButtonDisable(); 
    onClickAdd(setAdult, adult); 
  };

  function onClickSub(stateUpdater, stateName){
    if(stateName==room && stateName>1) stateUpdater(stateName-1);
    else if(stateName!==room && stateName!==room && stateName>0) stateUpdater(stateName-1);
  }

  useEffect(() => {
      provideData(adult, children, room);
  },[adult, children, room]);

  

  return (
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={6} md={6}>
        <p style={{...boldLable}}>Adults</p>
      </Grid>
      <Grid item xs={2} md={2}>
        <RemoveCircleOutlineOutlinedIcon color={!adultButtonDisable ? "primary" : "disabled"} onClick={() => onClickSub(setAdult, adult)}/>
      </Grid>
      <Grid item xs={2} md={2} sx={inputContainerStyle}>
        <InputField data={adult}/>
      </Grid>
      <Grid item xs={2} md={2}>
        <ControlPointOutlinedIcon color={adultButtonDisablePerRoom ? "disabled" : "primary"} onClick={handleApply}/>
      </Grid>
    </Grid>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={6} md={6}>
      <p style={{...boldLable}}>Children</p>
      </Grid>
      <Grid item xs={2} md={2}>
        <RemoveCircleOutlineOutlinedIcon color={!childrenButtonDisable ? "primary" : "disabled"} onClick={() => onClickSub(setChildren, children)}/>
      </Grid>
      <Grid item xs={2} md={2} sx={inputContainerStyle}>
        <InputField data={children}/>
      </Grid>
      <Grid item xs={2} md={2}>
        <ControlPointOutlinedIcon color="primary" onClick={() => onClickAdd(setChildren, children)}/>
      </Grid>
    </Grid>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={6} md={6}>
      <p style={{...boldLable}}>Rooms</p>
      </Grid>
      <Grid item xs={2} md={2}>
        <RemoveCircleOutlineOutlinedIcon color={!roomButtonDisable ? "primary" : "disabled"} onClick={() => onClickSub(setRoom, room)}/>
      </Grid>
      <Grid item xs={2} md={2} sx={inputContainerStyle}>
        <InputField data={room}/>
      </Grid>
      <Grid item xs={2} md={2}>
        <ControlPointOutlinedIcon color="primary" onClick={() => onClickAdd(setRoom, room)}/>
      </Grid>
    </Grid>
    
  </Box>
  );
}