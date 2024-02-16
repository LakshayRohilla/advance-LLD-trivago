import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function HeaderBody(){
    return (
        <Container sx={{ marginLeft: 2, marginTop: 9 }}>
        <Typography variant="h5" sx={{fontWeight: 600}}>
        We compare hotel prices from 100s of sites
          </Typography>
          <Typography >
          We’ll do the searching. You do the saving.
        </Typography>
        </Container>
    );
}