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

export default function DisplayEnteredData() {
    const data = useSelector((state) => state.search);
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
                        <WorkIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Check In Time :" secondary={data.checkInTime} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Check Out Time :" secondary={data.checkOutTime} />
                </ListItem>
                </List>
            </Container>
        );
    }
}
