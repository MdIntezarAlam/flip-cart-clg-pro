
import { Box, Button, styled } from '@mui/material'
export const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("lg")]: {
        padding: "20px 40px"
    }
}))

export const Images = styled('img')`
   width:90%;
   padding:15px 20px;

  `
export const Buttons = styled(Button)(({ theme }) => ({
    width: "46%",
    height: "40px",
    borderRadius: "2px",
    [theme.breakpoints.down("lg")]: {
        width: "44%",
    },
    [theme.breakpoints.down("md")]: {
        width: "45%",
        fontSize: "10px"
    },
    [theme.breakpoints.down("sm")]: {
        width: "45%",
        fontSize: "10px"
    },
}))
