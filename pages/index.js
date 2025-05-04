import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Image from 'next/image';

import NavBar from "@/components/NavBar"
import HeroBanner from "@/components/HeroBanner"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroBanner
        image={"/img/donair-poutine1.jpeg"}
        title={"Welcome to Homestyle Donair & Subs"}
        button={"Menu"}
      />
      <Container
        maxWidth="md"
        sx={{ textAlign: "center", padding: 5 }}>
        <Typography variant='h3' sx={{mt:3, fontFamily: '"Parisienne", cursive' }} >
          Welcome
        </Typography>
        <Typography variant='body1' sx={{mt: 3, mb:3}}>
          At Homestyle Donair & Subs, freshness isn't just a promise — it's the foundation of everything we make. Legendary flavour, handcrafted with premium ingredients, made just for you.
        </Typography>
        <Button variant='text' color='black'>
          OUR STORY
          <ArrowRightAltIcon />
        </Button>
        <Image
          src="/img/donair.jpeg"
          alt="Donair image"
          width={1200}
          height={400}
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
      </Container>
    </main>

  )
}
