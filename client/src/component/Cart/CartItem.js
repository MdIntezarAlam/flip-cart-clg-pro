import React from 'react'
import { Box, Typography } from '@mui/material'
import { LeftContainer, SellerText, RemoveButton, CartItemContainer } from '../../styles/Cart/CartItem'
import { addElips } from '../../utils/common.utility'
import { ButttonGroups } from './'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/action/cart.action'

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


const CartItem = ({ cartItems }) => {
    // console.log("cartItemss CaertItems Data", cartItems)
    const dispatch = useDispatch()

    const { id } = cartItems
    const removeItemfromCart = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <CartItemContainer>
            {/* Left Box */}
            <LeftContainer>
                <img src={cartItems.url} alt="cart imaege" width={110} />
                <ButttonGroups />
            </LeftContainer>
            {/* Right Box */}
            <Box style={{ margin: '20px' }}>
                <Typography>{addElips(cartItems.title.longTitle)}</Typography>
                <SellerText>Seller:RetailNet
                    <Box component="span">
                        <img src={fassured} alt="img" style={{ width: 50, marginLeft: 10 }} />
                    </Box>
                </SellerText>
                <Typography style={{ margin: '20px 0px' }}>
                    <Box component={"span"} style={{ fontWeight: '600', fontSize: '15px' }}>₹ {cartItems.price.cost}</Box> &nbsp; &nbsp; &nbsp;
                    <Box component={"span"} style={{ color: "#787878" }}>{cartItems.price.mrp}</Box> &nbsp; &nbsp; &nbsp;
                    <Box component={"span"} style={{ color: "#388E3C" }}>{cartItems.price.discount} off</Box> &nbsp; &nbsp; &nbsp;
                </Typography>
                <RemoveButton onClick={() => removeItemfromCart(cartItems.id)}>Remove</RemoveButton>
            </Box>
        </CartItemContainer>
    )
}

export default CartItem
//it is left side component