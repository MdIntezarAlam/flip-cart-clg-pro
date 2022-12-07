import { Box, Grid, styled, Typography } from '@mui/material'

export const Component = styled(Box)(({ theme }) => ({
    width:"100%",
    background: " #F2F2f2",
    marginTop: "55px",
    [theme.breakpoints.down("md")]:{
        margin:0
    }
}))

export const Container = styled(Grid)`
background:#fff;
margin-top:55px;
display:flex;
`
export const RightContainer = styled(Grid)`
width:55%;
margin-top:50px;

`
