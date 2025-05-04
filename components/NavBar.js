import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//drawer
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Box } from '@mui/material';



export default function NavBar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };

    const DrawerList = (
        <Box sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // vertical alignment
            alignItems: 'center',     // horizontal alignment
            gap: 2,                    // spacing between List and Button
          }} 
        
            role="presentation" 
            onClick={toggleDrawer(false)}>
                    <List>
                        {["Home", "Menu", "About", "Contact/Hours"].map((text, index) => (
                            <ListItem key={text}>
                                <ListItemButton>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Button 
                        variant='contained' 
                        sx={{
                            backgroundColor: "#f5ea89",
                            color: '#242105',
                            
                            borderRadius: "8px",
                            padding: "8px 16px", // optional for spacing
                            '&:hover': {
                                backgroundColor: "common.black", 
                                color: "common.white",
                            }
                        }}>
                        <Typography variant='body1'>
                            Order Online
                        </Typography>
                    </Button>
                </Box>
    )

    return (
        <div>
            <AppBar position='sticky' sx={{ backgroundColor: '#f5ea89', color: '#242105' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        [Insert logo]
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>

    )
}