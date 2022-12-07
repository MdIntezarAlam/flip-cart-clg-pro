import { allNavbarData } from '../../utils/constant'
import { NavContainer, TypographyText, NavContainerBox } from '../../styles/navbar/NavbarStyle'
import { Box } from '@mui/material'

const Navbar = () => {
    return (
        <Box style={{backgroundColor:"#ffffff"}}>
            <NavContainer>
                {
                    allNavbarData.map((data, id) => (
                        <NavContainerBox key={id}>
                            <img src={data.url} alt="all nav data" style={{ width: "65%" }} />
                            <TypographyText>{data.text}</TypographyText>
                        </NavContainerBox>
                    ))
                }
            </NavContainer>
        </Box>
    )
}

export default Navbar