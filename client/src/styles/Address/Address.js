import { Box, Button, styled, TextField, Typography } from '@mui/material'

export const AddressContainer = styled(Box)`
  width:100vw;
  min-height:100vh;
  background-color:#fff;
  display:inline-block;
`
export const AddressBox = styled(Box)(({ theme }) => ({
  width: '50vw',
  margin: '20px auto',
  alignItems: 'center',
  [theme.breakpoints.down("md")]: {
    width: '90%',
    margin: '10px'
  }
}))

export const BoxOne = styled(Box)`
  display:flex;
  flex-direction:column;
`
export const Typographys = styled(Typography)`
text-align:center;
background-color:#fff;
padding:10px;
font-size:28px;
`
export const TextFields = styled(TextField)`
margin:2px;
out-line:none;
border:0;

&>input{
    height:12px;
    padding:5px;
}
`
export const Save = styled(Box)`
margin-top:10px;
&>button{
    margin:10px;
}
`
//Address button  page
export const Paymnet = styled(Box)(({ theme }) => ({
  width: '48vw',
  margin: '20px auto',
  alignItems: 'center',
  paddingTop: ' 20px',
  backgroundColor: '#808080',
  borderRadius: '10px',
  padding: ' 15px',
  [theme.breakpoints.down("md")]: {
    width: '85%',
    margin: '10px'
  }
}))

export const PaymentHeading = styled(Typography)`
   color:#fff;
   padding:20px;
   font-size:19px;
   border-bottom:1px solid gray;
`
export const BoxFlex = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-between',
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
    gap: 10
  }
}))

//addressPage

export const Boxs = styled(Box)`
    margin:50px; 
    display:flex;
    flex-direction:column;
    justify-content:'center;
    align-items:center;
`
export const Boxss = styled(Button)`
margin-top:50px;
font-size:20px;
`