import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const MenuComponent = styled(Menu)`
  margin-top:10x;
`
const Logout = styled(Typography)`
     font-size:19px;
     margin-left:20px;
`

const Profiles = ({ account, setAccount }) => {
    const [open, steOpoen] = useState(false)

    const handleClicks = (event) => {
        steOpoen(event.currentTarget)
    }
    const handleClose = () => {
        steOpoen(false)
    }
    const LogoutUsers = () => {
        setAccount('')
    }

    return (
        <>
            <Box onClick={handleClicks} style={{ cursor: "pointer" }}>
                <Typography>{account}</Typography>
            </Box>
            <MenuComponent
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}>
                <MenuItem onClick={() => { handleClose(); LogoutUsers() }}>
                    <PowerSettingsNewIcon fontSize='small' color='primary' />
                    <Logout onClick={handleClose}>Logout</Logout>
                </MenuItem>
            </MenuComponent>
        </>
    )
}

export default Profiles