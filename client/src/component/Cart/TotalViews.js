import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TotalViewsContainer = styled(Box)`
     background-color:#fff;
     padding:5px;
`
export const TotalViewsHeading = styled(Typography)`
     font-size:18px;
     color:#808080;
     padding:18px 24px;
`
export const TotalViewsBox = styled(Box)`
     border-top:1px solid #808080;
     display:flex;
     flex-direction:column;
     padding:10px; 
`
export const BoxFlex = styled(Box)`
     display:flex;
     justify-content:space-between;
     padding:12px;
`

const TotalViews = ({ cartItems }) => {
    // console.log(cartItems)
    const [price, setPrice] = useState(0)
    const [discount, setDisc] = useState(0)

    useEffect(() => {
        priceandDiscount()
    }, [cartItems])

    const priceandDiscount = () => {
        let price = 0, discount = 0
        cartItems.map(items => {
            price += items.price.mrp;
            discount += (items.price.mrp - items.price.cost);
        })
        setPrice(price)
        setDisc(discount)
    }

    // console.log("price", price)
    // console.log("disc", discount)
    return (
        <TotalViewsContainer>
            <TotalViewsHeading>PRICE DETAILS</TotalViewsHeading>
            <TotalViewsBox>
                <BoxFlex>
                    <Typography>Price {cartItems?.length} item</Typography>
                    <Typography>₹{price}</Typography>
                </BoxFlex>
                <BoxFlex>
                    <Typography>Discount</Typography>
                    <Typography>₹{discount}</Typography>
                </BoxFlex>
                <BoxFlex>
                    <Typography>Delivery Charges</Typography>
                    <Typography style={{ color: "green", }}>₹40</Typography>
                </BoxFlex>
                <BoxFlex style={{ borderTop: "1px dotted  #808080", borderBottom: "1px dotted  #808080" }}>
                    <Typography style={{ color: "#000", fontWeight: 600, fontSize: "18px" }}>Total Amount</Typography>
                    <Typography style={{ color: "#000", fontWeight: 600, fontSize: "18px" }}>{price - discount + 40}</Typography>
                </BoxFlex>
                <Typography style={{ color: "green", padding: '10px' }}>You will save ₹{discount - 40} on this order</Typography>
            </TotalViewsBox>
        </TotalViewsContainer>
    )
}

export default TotalViews
//it is right side component 