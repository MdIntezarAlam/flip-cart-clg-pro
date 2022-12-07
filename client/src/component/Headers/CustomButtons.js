import React, { useContext, useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/DataProviders';
import { Login } from '../Login/index'
import { Profiles } from '../Login/index';
import {
    CustomButtonContainer,
    CardContainers,
    LoginButtons,
    TypographyWeight
} from '../../styles/header/CustomButtonStyle'
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux'

const CustomButtons = () => {
    const [open, setOpen] = useState(false)
    const { account, setAccount } = useContext(DataContext)
    const { cartItems } = useSelector((state) => state.cartReducer)

    const handleOpen = () => {
        setOpen(true)
    }



    return (
        <CustomButtonContainer>
            {
                account ? <Profiles account={account} setAccount={setAccount} /> :
                    <LoginButtons variant='contained' onClick={() => handleOpen()}>Login</LoginButtons>
            }
            <TypographyWeight>Become a Seller </TypographyWeight>
            <TypographyWeight>More </TypographyWeight>
            <CardContainers>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                    <TypographyWeight>Cart</TypographyWeight>
                </Badge>
            </CardContainers>
            <Login open={open} setOpen={setOpen} />
        </CustomButtonContainer>
    )
}

export default CustomButtons