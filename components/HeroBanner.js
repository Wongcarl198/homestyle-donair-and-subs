import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function HeroBanner({ image, title, button }) {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${image})`, // Replace with your image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: '#f5ea89',
                        color: '#242105',
                        mt: 3,
                        '&:hover': {
                            backgroundColor: '#242105',
                            color: '#fff',
                        },
                    }}
                >
                    {button}
                </Button>
            </Container>
        </Box>
    )
}