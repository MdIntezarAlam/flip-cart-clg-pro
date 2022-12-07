import { Box, InputBase, List, ListItem, styled } from '@mui/material'

export const SearchComponent = styled(Box)`
  background-color:#fff;
  width:37%;
  border-radius:2px;
  margin-left:10px;
  display:flex;
  align-items:center;
  `
export const InputSearchBase = styled(InputBase)`
width:100%;
padding-left:20px;
font-size:unset;
color:#000;
font-weight:500;

  `
export const SearchIconWrappers = styled(Box)`
display:flex;
color:blue;
padding:5px;
`

export const WrapperSeatchProduct = styled(List)`
position:absolute;
color:#000;
background-color:#fff;
margin-top:20%; //new
width:35.8%; //new
border-radius:4px; //new
`
export const ListItems = styled(ListItem)` 
color:#000;
background-color:#fff;
width:100%;
`