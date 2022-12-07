import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@mui/material'
import { CartContainer, LeftHeader, ButtonWrapper, ButtonStyles, LeftGridComponent } from '../../styles/Cart/Cart'
import { CartItem, TotalViews, ItemsNotfound } from './'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cartReducer)
    // console.log("Cart Items", cartItems)
    return (
        <>
            {cartItems.length ?
                <CartContainer container>
                    <LeftGridComponent item lg={9} md={9} sm={12} xs={12}>
                        <LeftHeader>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </LeftHeader>
                        {cartItems.map((cartItems, id) => (
                            <CartItem cartItems={cartItems} key={id} />
                        ))
                        }
                        <ButtonWrapper>
                            <Link to="/address" style={{ textDecoration: 'none', color: "inherit" }}>
                                <ButtonStyles>Replace All</ButtonStyles>
                            </Link>
                        </ButtonWrapper>
                    </LeftGridComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalViews cartItems={cartItems} />
                    </Grid>
                </CartContainer>
                :
                <ItemsNotfound cartItems={cartItems} />
            }
        </>
    )
}

export default Cart

//note
//get all the product data using useSelector
//conditionalyy render if items is there then show the data else show not found