import React from 'react'
import { imageURL } from '../../utils/constant'
import { Grid } from '@mui/material'
import { GridWrapper, Images } from '../../styles/slider/Middle_Slider'


const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
const Middle_Slider_Sec = () => {
    return (
        <>
            <GridWrapper item lg={12} sm={12} md={12} xs={12} container>
                {imageURL.map((data, i) => (
                    <Grid item lg={4} md={4} sm={12} xs={12} key={i}>
                        <img src={data} alt="Slider sec" style={{ width: '100%', }} />
                    </Grid>
                ))}
            </GridWrapper>
            <Images src={url} alt="Images" />
        </>
    )
}
export default Middle_Slider_Sec