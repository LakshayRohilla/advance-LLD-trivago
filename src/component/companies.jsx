import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import agooda from '../asset/images/pngegg.png'
import oyo from '../asset/images/Oyo_Rooms-Logo.wine.png'

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: '#F5F5F5',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
    border: "none", 
    boxShadow: "none"
  }));


  // TODO: Images needs to be added and size needs to be adjusted.
 // Later, update the company array to have all the imgs on the page.   


export default function Companies(){

    const companies = [
        {
          img: agooda,
          alt:
            "Agooda",
        },
        {
            img: oyo,
            alt:
              "Oyo",
        },
    ];

    return (
        <Box sx={{m: 3.8}}>
          <Grid container spacing={1}>
            {companies.map(com => {
                return (
                    <Grid item xs={1.5} sm={1.5} md={1.5}>
                        {/* <Item><img src={com.img} alt={com.alt}/></Item> */}
                        <Item>{com.alt}</Item>
                    </Grid>
                )
            })}
            
            <Grid item xs={1.5} sm={1.5} md={1.5}>
              <Item>Booking.com</Item>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5}>
              <Item>Make My Trip</Item>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5}>
              <Item sx={{textAlign:'center'}}>ALL</Item>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5}>
              <Item>Trip.com</Item>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5}>
              <Item>Hotel.com</Item>
            </Grid>
            <Grid item xs={1.5} sm={1.5} md={1.5}>
              <Item>+100 more</Item>
            </Grid>
          </Grid>
        </Box>
      );
}