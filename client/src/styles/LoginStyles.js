import { Box, styled } from '@mui/material'
import { Button, Dialog, TextField, Typography } from '@mui/material'

export const LoginContainer = styled(Box)`
   height:70vh;
   width:80vh;
  `
export const Image = styled(Box)`
   height:95%;
   width:30%;
   padding:40px 30px;
   background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
   &>p,  &>h5{
    color:#fff;
    font-weight:600;
   }
  `
export const LoginWrapper = styled(Box)`
   display:flex;
   flex-direction:column;
   padding:25px 35px;
   flex:1;
   &>div, &>button, &>p{
    margin-top:20px
   }
  `
export const LoginButtons = styled(Button)`
  text-transform:none;
  background-color:#FB641B;
  font-size:20px;
  color:#fff;
  height:40px;
  border-radius:2px;
  padding:10px;
  export `

export const LoginRequest = styled(Button)`
  text-transform:none;
  background-color:#fff;
  font-size:20px;
  color:#f2874f0;
  height:45px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/ 24%)
  `

export const Text = styled(Typography)`
    font-size:14px;
    color:#878787;
  `

export const CreateAcc = styled(Typography)`
    font-size:15px;
    color:#2874f0;
    font-weight:600;
    text-align:center;
    cursor:pointer;
  `