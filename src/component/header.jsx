import { Divider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// const useStyle = makeStyles((theme) => ({
//     trivago_img: {
//         flexGrow: 1
//     },
// }));

export default function Header(){
    // const classes = useStyle();

    return (
        <>
            <Toolbar>
            {/* <img src="https://www.vectorlogo.zone/logos/trivago/trivago-ar21.svg" alt="trivago log"/> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingTop: 2}}>
                <img src="https://www.vectorlogo.zone/logos/trivago/trivago-ar21.svg" alt="trivago log"/>
            </Typography>
            
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <FavoriteBorderOutlinedIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <LanguageOutlinedIcon />
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <AccountCircleOutlinedIcon/>
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            </Toolbar>
            <Divider/>
        </>
    );

}