import React, { Children, useState } from 'react'
import { IconButton, Toolbar, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import { Search, CustomButtons } from './'
import { HederStyled, MenuButton, Component, SubHeadings, Sublogo, CustomButton } from '../../styles/header/HeaderStyles'
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux'

const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <HederStyled>
            <Toolbar style={{ minHeight: "56px" }}>
                {/*Menu icon  */}
                <MenuButton color='inherit' onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>
                <Drawer open={open} onClose={handleClose} >
                    <Box style={{ width: "200px" }} onClick={handleClose}>
                        <List>
                            <ListItem button>
                                <CustomButtons />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                {/*Menu icon  */}
                <a href="/" style={{textDecoration:'none',color:'inherit', marginLeft: '12%',marginRight:'2%', lineHeight: 0 }}>
                    <Component>
                        <img src={logoURL} alt="logo" style={{ width: "75px" }} />
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <SubHeadings >Explore&nbsp;
                                <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>
                            </SubHeadings>
                            <Sublogo src={subURL} alt="sublogo" />
                        </Box>
                    </Component>
                </a>
                <Search />
                <CustomButton>
                    <CustomButtons />
                </CustomButton>
            </Toolbar>
        </HederStyled>
    )
}

export default Header