import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function HeaderBody(){
    return (
        <Box sx={{ marginLeft: 4, marginTop: 9 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 , fontWeight: 600}}>
        We compare hotel prices from 100s of sites
          </Typography>
          <Typography >
          We’ll do the searching. You do the saving.
        </Typography>
        </Box>
    );
}