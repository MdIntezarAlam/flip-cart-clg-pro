import React, { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { Navbar, Banners } from './'

import { useSelector, useDispatch } from 'react-redux'
import { getProductAction } from '../../redux/action/product.action'
import SliderPage from '../Slider/SliderPage'
import MiddleSliderPage from '../Slider/MiddleSliderPage'
import Middle_Slider_Sec from '../Slider/Middle_Slider_Sec'

const BannerContainer = styled(Box)`
padding:10px 10px;
background-color:#f2f2f2;
`

const Home = () => {
    const { products } = useSelector((store) => store.productReducer)
    const dispatch = useDispatch()

    // console.log("Products in Home Pages=>>>>>", products)

    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <BannerContainer>
                <Banners />
                <MiddleSliderPage products={products} title="Best of Electronics" timer={true} />
                <Middle_Slider_Sec />
                <SliderPage products={products} title="Beauty, Food, Toys" timer={false} />
                <SliderPage products={products} title="Winter Essentials" timer={false} />
                <SliderPage products={products} title="New Year Specials" timer={false} />
                <SliderPage products={products} title="Sports, Healthcare" timer={false} />
                <SliderPage products={products} title="Wedding & Gifting Specials" timer={false} />
                <SliderPage products={products} title="Home & Kitchen Essentials" timer={false} />
                <SliderPage products={products} title="Hand-picked Christmas" timer={false} />
                <SliderPage products={products} title="Grooming, Books, Auto" timer={false} />
            </BannerContainer>
        </>
    )
}

export default Home