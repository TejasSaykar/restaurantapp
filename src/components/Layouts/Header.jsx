import React, { useContext, useState } from 'react';
import { Box, AppBar, IconButton, Typography, Toolbar, Drawer, Divider, Button } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/Headerstyle.css'
import { Cart } from '../../Context/CartCotext';

const Header = () => {

  const { cart } = useContext(Cart);
  console.log(cart)

  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon />
        My Restaurant
      </Typography>
      <Divider />
      <ul className='mobileNav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Box>
  )

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton onClick={handleDrawerToggle} color='inherit' aria-label='open drawer' edge='start' sx={{ display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant='h6' component={'div'} sx={{ flexGrow: 1, ml: 0 }}>
              <FastfoodIcon />
              My Restaurant
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navMenu'>
                <li>
                  <NavLink activeClassName='active' to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </Box>
            <Box sx={{ bgcolor: "white", fontSize: '1.3rem', fontWeight: "bold", borderRadius: '5px' }}>
              <Link to='/cart'>
                <Button sx={{ color: 'black' }}>Cart : {cart.length} </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={'nav'}>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": { boxSizing: 'border-box', width: '240px' } }}>
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>

    </>
  )
}

export default Header
