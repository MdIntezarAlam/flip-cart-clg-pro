
import { Grid, styled, Box, Button } from '@mui/material'



export const CartContainer = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  [theme.breakpoints.down("md")]: {
    padding: '15px 0',
  }
}))


export const LeftHeader = styled(Box)`
padding:15px 25px;
background:#fff
`


export const LeftGridComponent = styled(Grid)(({ theme }) => ({
  // width: '70%',
  paddingRight: '15px',
  [theme.breakpoints.down("md")]: {
    marginBottom: '15px',
  }
}))



export const ButtonWrapper = styled(Box)`
padding:16px 22px ;
background-color:#fff;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
export const ButtonStyles = styled(Button)`
display:flex;
margin-left:auto;
color:#fff;
background-color:red;
width:150px;
border-radius:2px;
height:50px;
font-weight:500;
`