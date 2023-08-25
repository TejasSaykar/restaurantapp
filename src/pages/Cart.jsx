import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layouts/Layout';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import FoodData from './Data';
import { Cart } from '../Context/CartCotext';

const CartPage = () => {

    const { cart, setCart } = useContext(Cart)

    const [total, setTotal] = useState([]);

    useEffect(() => {
        setTotal(cart.reduce((accu, curr) => accu + Number(curr.price), 0));
    })

    console.log(total)

    return (
        <Layout>
            {
                cart.length === 0 ? <div className="empty" style={{ margin: "10.4rem 0px", textAlign: 'center' }}><h2>Cart Is Empty</h2></div> :

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
                        <h2 className='mt-3'>Total : ₹ {total}.00</h2>
                        {
                            cart.map((item, i) => {
                                return (
                                    <Card sx={{ width: "370px", display: 'flex', m: 2 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                sx={{ height: '400px' }}
                                                component={'img'}
                                                src={item.image}
                                                alt={item.name}
                                            />
                                            <CardContent>
                                                <Typography variant='h5' component={'div'}>
                                                    {item.name}
                                                </Typography>

                                                <Typography variant='p' component={'div'}>
                                                    {item.desc}
                                                </Typography>

                                                <Typography variant='p' component={'div'}>
                                                    ₹ {item.price}.00
                                                </Typography>

                                                <Typography sx={{
                                                    "& Button:hover": {
                                                        bgcolor: 'lightgreen',
                                                        color: "white"
                                                    }
                                                }}>

                                                    <Button sx={{ bgcolor: "green", color: "white", my: 1 }} onClick={() => setCart(cart.filter((c) => c.id !== item.id))}>Remove</Button>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            })
                        }
                    </Box>
            }
        </Layout>
    )


}
export default CartPage;
