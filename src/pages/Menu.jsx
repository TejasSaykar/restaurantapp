import React, { useContext } from 'react'
import Layout from '../components/Layouts/Layout';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import FoodData from './Data';
import { Cart } from '../Context/CartCotext';
import { Link } from 'react-router-dom';

const Menu = () => {

  const { cart, setCart } = useContext(Cart)

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
        {
          FoodData.map((menu, i) => {
            return (
              <Card sx={{ width: "370px", display: 'flex', m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: '400px' }}
                    component={'img'}
                    src={menu.image}
                    alt={menu.name}
                  />
                  <CardContent>
                    <Typography variant='h5' component={'div'}>
                      {menu.name}
                    </Typography>

                    <Typography variant='p' sx={{my : '5px'}} component={'div'}>
                      {menu.desc}
                    </Typography>

                    <Typography variant='p'  component={'div'}>
                      ₹ {menu.price}.00
                    </Typography>

                    <Typography sx={{
                      "& Button:hover": {
                        bgcolor: 'lightgreen',
                        color: "white"
                      }
                    }}>
                      {
                        cart.includes(menu) ? <Link to="/cart"> <Button sx={{ bgcolor: "green", color: "white", my: 1 }} >Go To Cart</Button></Link> : <Button sx={{ bgcolor: "green", color: "white", my: 1 }} onClick={() => setCart([...cart, menu])}>Add To Cart</Button>
                      }

                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
      </Box>
    </Layout>
  )
}

export default Menu
