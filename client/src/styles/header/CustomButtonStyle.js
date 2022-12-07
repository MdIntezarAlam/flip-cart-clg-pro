import { Box, Button, styled, Typography, theme } from '@mui/material'

export const CustomButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    margin: '0 3% 0, auto',
    '& *': {
        fontSize: '16px',
        alignItems: 'cente',
        marginRight: '20px !important',
    },
    [theme.breakpoints.down("md")]: {
        display: 'block',
    }   
}))

export const LoginButtons = styled(Button)`
height:34px;
color:blue;
padding:5px 40px;
font-weight:500;
background-color:#ffffff;
border-radius:2px;
text-transform:none;
box-shadow:0;
`

export const CardContainers = styled(Box)(({ theme }) => ({
    display: 'flex',
    // gap: '3px',
    [theme.breakpoints.down("md")]: {
        display: 'block',
    }
}))

export const TypographyWeight = styled(Typography)`
 font-weight:600;
`