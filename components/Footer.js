import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/system/Grid';
import Typography from '@mui/material/Typography';

import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
    return (
        <Box
            sx={{ backgroundColor: "#373b3a", py:3 }}
        >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }} sx={{textAlign:"center"}}>
                    <Typography variant='h6' color='#f1f1f1'>
                        Contact Us
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        <PlaceIcon/>
                        3424 43 Ave NW, Edmonton, AB T6L 5T2
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        <LocalPhoneIcon/>
                        (780) 465-7699
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        <InstagramIcon/>
                        @homestyle_donair
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{textAlign:"center"}}>
                    <Typography variant='h6' color='#f1f1f1'>
                        Hours
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Monday : 11 a.m. - 10 p.m.
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Tuesday : 11 a.m. - 10 p.m.
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Wednesday : 11 a.m. - 10 p.m.
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Thursday : 11 a.m. - 10 p.m.
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Friday : 11 a.m. - 11 p.m.
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Saturday : 11 a.m. - 10 p.m.
                    </Typography>
                    <Typography variant='body1' color='#dbdbdb'>
                        Sunday : 11 a.m. - 10 p.m.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}