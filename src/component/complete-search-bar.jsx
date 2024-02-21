import { Box } from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import Location from "./location-component";
import SearchButton from "./search-button";
import CheckIn from "./searchbar-components/check-in";
import CheckOut from "./searchbar-components/check-out";

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // border: '1px solid', // this should be removed later
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '10px',
  }));

export default function CompleteSeachBar(){
    return (
        <Box sx={{m: 4, mt: 5, boxShadow: `2px 1.5px 15px 2px grey`, borderRadius: '10px'}}>
            <Box sx={{borderRadius: '10px', backgroundColor: 'white'}}>
            
            <Grid container sx={{p: 1}}>
                <Grid xs={3} sm={3} md={0.5}>
                <Item><SearchOutlinedIcon/></Item>
                </Grid>
                <Grid xs={9} sm={9} md={2.3} sx={{borderRight:' 1.5px solid grey', borderRadius:0 }}>
                <Item ><Location/></Item>
                </Grid>
                <Grid xs={4} sm={4} md={0.5}>
                <Item ><CalendarMonthOutlinedIcon/></Item>
                </Grid>
                <Grid xs={4} sm={4} md={2}>
                {/* <Item sx={{listStyle: 'none', display: 'inline-block', borderRight:' 2px solid grey', lineHeight: '2px', borderRadius:0 }}><CheckIn/></Item> */}
                <Item sx={{borderImage: 'linear-gradient(transparent 10%, grey 10% 90%, transparent 90%) 0 1 0 0 / 1.5px', paddingTop: '0'}}><CheckIn/></Item>
                {/* <Item>Check-In</Item> */}
                </Grid>
                <Grid xs={4} sm={4} md={2} sx={{borderRight:' 1.5px solid grey', borderRadius:0 }}>
                <Item sx={{paddingTop: '0'}}><CheckOut/></Item>
                </Grid>
                <Grid xs={3} sm={3} md={0.5} >
                <Item><BedOutlinedIcon/></Item>
                </Grid>
                <Grid xs={9} sm={9} md={2.2}>
                <Item>Guests and Rooms</Item>
                </Grid>
                <Grid xs={12} sm={12} md={2}>
                <Item sx={{pt:0.5, pb:0.5}}><SearchButton/></Item>
                </Grid>
            </Grid>
            </Box>
        </Box>
    );
}
