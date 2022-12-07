import { AppBar, styled, Typography } from '@mui/material'
import {Box , IconButton } from '@mui/material'


export const HederStyled = styled(AppBar)`
     height:56px;
     background-color:#2874F0;
     box-shadow:0px;
`
export const Component = styled(Box)`
     margin-left:12%;
     line-height:0;
    `
export const SubHeadings = styled(Typography)`
    font-size:12px;
    font-style:italic;
  `
export const Sublogo = styled('img')`
    width:10px;
    height:10px;
    margin-left:4px;
`
export const CustomButton = styled(Box)(({ theme }) => ({
    margin: "0 5%  0 auto",
    [theme.breakpoints.down("md")]: {
        display: "none",
    }
}))
export const MenuButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block"
    }
}))