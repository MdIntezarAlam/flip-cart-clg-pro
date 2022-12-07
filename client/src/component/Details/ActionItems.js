import React, { useState } from 'react'
import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { addtoCartAction } from '../../redux/action/cart.action'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LeftContainer, Images, Buttons } from '../../styles/Details/ActionItems'

const ActionItems = ({ product }) => {
    const [quentity, setQty] = useState(1)

    const navigate = useNavigate()
    const disptch = useDispatch()

    const { id } = product

    const addItemCart = () => {
        disptch(addtoCartAction(id, quentity))
        navigate("/cart")
    }

    return (
        <LeftContainer>
            <Box style={{ padding: "14px 20px", border: "1px solid #f3f3f3r",marginBottom:'10px' }}>
                <Images src={product.detailUrl} />
            </Box>
            <Buttons onClick={() => addItemCart()} variant='contained' style={{ marginRight: "10px", background: "orange" }}>
                <ShoppingCartIcon />
                Add To cart</Buttons>
            <Buttons variant='contained' style={{ marginRight: "10px", background: "#b5b" }}><FlashOnIcon /> By Now</Buttons>
        </LeftContainer>
    )
}

export default ActionItems
//note dispatch an action means send the data to the action files
//which will used in cart file using useSelector to get the data
//get id from selected product and send in to actionfiles & quntity
//naviate to the Cart file
//make an onclick btn and call it