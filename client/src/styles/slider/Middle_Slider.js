import { Grid, styled, theme } from '@mui/material'

export const GridWrapper = styled(Grid)`
justify-content:space-between;
margin-top:10px;
padding:10px;
`
export const Images = styled('img')(({ theme }) => ({
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: '120px'
    }
}))