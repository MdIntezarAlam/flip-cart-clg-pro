import { Typography } from '@mui/material'
import React from 'react'
import { BoxNotFound, LeftHeaders, BoxImg, ButtonStyle } from '../../styles/Cart/Itemnotfound'

const ItemsNotfound = ({ cartItems }) => {
    return (
        <BoxNotFound>
            <LeftHeaders>
                <Typography>My Cart ({cartItems.length})</Typography>
            </LeftHeaders>
            <BoxImg>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width={200} height={150} />
                <Typography>Missing Cart items?</Typography>
                <Typography>Login to see the items you added previously</Typography>
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ButtonStyle>Login</ButtonStyle>
                </a>
            </BoxImg>
        </BoxNotFound>
    )
}

export default ItemsNotfound