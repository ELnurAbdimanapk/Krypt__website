import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material';

const pages = ["Market","Exchange","Tutorials","Wallets"];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' sx={{ 
        backgroundColor: '#121212', 
        boxShadow: 'none', 
        borderBottom: '1px solid #333',
        transition: 'all 0.3s ease'
    }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant='h3'
                    noWrap
                    component="a"
                    href='/'
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'roboto',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#66E267', 
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        "&:hover": {
                            color: '#00ff00',
                        }
                    }}
                >
                    KRYPT
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button 
                            color="inherit" 
                            key={page} 
                            sx={{ 
                                mx: 1, 
                                fontWeight: 600, 
                                transition: 'all 0.3s ease',
                                "&:hover": {
                                    backgroundColor: '#333',
                                    color: '#0f0'
                                }
                            }}>
                            {page}
                        </Button>
                    ))}
                    <Button variant='contained' sx={{ 
                        borderRadius:10,
                        fontWeight:600,
                        backgroundColor: '#66E267',
                        transition: 'all 0.3s ease',
                        "&:hover": {
                            backgroundColor: '#00ff00',
                        }
                    }}>
                        Login
                    </Button>
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenu}
                        sx={{ 
                            ml: 1,
                            transition: 'color 0.3s ease',
                            "&:hover": {
                                color: '#0f0'
                            }
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        sx={{ mt: 2 }}
                    >
                        {pages.map((page) => (
                            <MenuItem 
                                key={page} 
                                onClick={handleClose} 
                                sx={{ 
                                    fontWeight: 600,
                                    transition: 'background-color 0.3s ease',
                                    "&:hover": {
                                        backgroundColor: '#333'
                                    }
                                }}
                            >
                                <Typography>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button color='inherit'>Login</Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar;
