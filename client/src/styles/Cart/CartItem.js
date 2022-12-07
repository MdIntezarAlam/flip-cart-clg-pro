import { Box, Button, styled, Typography } from '@mui/material'

export const CartItemContainer = styled(Box)`
    display:flex;
    border-top:1px solid gray;
    background:#fff;
    `
export const LeftContainer = styled(Box)`
    display:flex;
    flex-direction:column;
    margin:20px;
`
export const SellerText = styled(Typography)`
color:#808080;
font-weight:bold;
font-size:14px;
margin-top:12px;
`
export const RemoveButton = styled(Button)`
margin-top:10px;
font-size:16px;
font-weight:500;
color:#000;
`