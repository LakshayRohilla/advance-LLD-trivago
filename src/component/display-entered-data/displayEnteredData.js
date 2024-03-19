import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function DisplayEnteredData() {
    const data = useSelector((state) => state.search);
    const {adult, children, room} = data.guestAndRoom;
    if(data?.buttonClick == 'true' && data.selectedLocation !== undefined) {
        return (
            <Container sx={{display: 'flex', justifyContent: 'center', mt: 7}}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <LocationOnIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Location :" secondary={data.selectedLocation} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Check In Time :" secondary={data.checkInTime} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <CalendarMonthIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Check Out Time :" secondary={data.checkOutTime} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <SingleBedIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Check Out Time :" secondary={`${adult} Adult , ${children} Children, ${room} Room`} />
                </ListItem>
                </List>
            </Container>
        );
    }
}
