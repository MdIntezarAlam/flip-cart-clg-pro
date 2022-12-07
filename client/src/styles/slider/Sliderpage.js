import { Box, Button, styled, Typography } from '@mui/material'

export const SliderComponent = styled(Box)`
 background-color:#fff;
 margin-top:15px;
 `
export const LeftBox = styled(Box)`
 display:flex;

 align-items:center;
//  padding:15px 20px;
 background-color:#fff
 `
export const LeftTimer = styled(Box)`
 display:flex;
 align-items:center;
 margin-left:15px;
 gap:8px
 `
export const Buttons = styled(Button)`
   margin-left:auto;
 `
export const SliderHeading = styled(Button)`
  font-size:19px;
  color:#000;
  font-weight:600;
 `
export const SliderImage = styled('img')`
   padding:20px 15px;
   width:auto;
   height:148px;
 `
export const SliderBox = styled(Button)`
 display:flex;
 flex-direction:column;
 align-items:center;
 `
export const SliderText = styled(Typography)`
text-align:center;
text-transform:none;
  `