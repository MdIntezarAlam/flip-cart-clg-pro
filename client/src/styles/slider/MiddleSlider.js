
import { Box, styled } from '@mui/material'

export const MiddleSliderComponent = styled(Box)`
display:flex;
`
export const MiddleSliderLeft = styled(Box)(({ theme }) => ({
    width: '85%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

export const MiddleImg = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    marginTop: '15px',
    marginLeft: '10px',
    textAlign: 'center',
    width: '15%',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))
