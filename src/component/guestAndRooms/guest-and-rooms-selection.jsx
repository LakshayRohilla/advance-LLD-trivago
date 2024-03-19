import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputField from "./input-field";

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

export default function GuestAndRoom() {

  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const boldLable = {
    fontWeight : 'bolder',
    color: 'black'
  }

  return (
    <Box sx={{ flexGrow: 1}}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={6} md={6}>
        <p style={{...boldLable}}>Adults</p>
      </Grid>
      <Grid item xs={2} md={2}>
        <RemoveCircleOutlineOutlinedIcon color="primary" />
      </Grid>
      <Grid item xs={2} md={2} sx={inputContainerStyle}>
        <InputField />
      </Grid>
      <Grid item xs={2} md={2}>
        <ControlPointOutlinedIcon color="primary" />
      </Grid>
    </Grid>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={6} md={6}>
      <p style={{...boldLable}}>Children</p>
      </Grid>
      <Grid item xs={2} md={2}>
        <RemoveCircleOutlineOutlinedIcon color="primary" />
      </Grid>
      <Grid item xs={2} md={2} sx={inputContainerStyle}>
        <InputField/>
      </Grid>
      <Grid item xs={2} md={2}>
        <ControlPointOutlinedIcon color="primary" />
      </Grid>
    </Grid>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={6} md={6}>
      <p style={{...boldLable}}>Rooms</p>
      </Grid>
      <Grid item xs={2} md={2}>
        <RemoveCircleOutlineOutlinedIcon color="primary" />
      </Grid>
      <Grid item xs={2} md={2} sx={inputContainerStyle}>
        <InputField/>
      </Grid>
      <Grid item xs={2} md={2}>
        <ControlPointOutlinedIcon color="primary" />
      </Grid>
    </Grid>
    
  </Box>
  );
}
