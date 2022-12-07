import { Box, styled, Typography } from '@mui/material'

export const NavContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        margin:'0px'
    }
}))


export const NavContainerBox = styled(Box)`
   text-align:center;
   padding:12px 8px; 
`
export const TypographyText = styled(Typography)`
   font-size:17px;
   font-weight:600;
   font-family:inherit;
`