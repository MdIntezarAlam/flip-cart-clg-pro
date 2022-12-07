import React from 'react'
import { Box } from '@mui/material'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import Countdown from 'react-countdown'
import { SliderComponent, LeftBox, SliderHeading, LeftTimer, Buttons, SliderImage, SliderBox, SliderText } from '../../styles/slider/Sliderpage'
import { responsiveSlider } from '../../utils/constant'
import { Link } from 'react-router-dom'
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const SliderPage = ({ products, title, timer }) => {
    // console.log("Products in Slider Pages=>>>", products)

    //timer fnnction code 
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box>{hours}:{minutes}:{seconds} Left</Box>;
    }

    return (
        <SliderComponent>
            <LeftBox>
                <SliderHeading>{title}</SliderHeading>
                <LeftTimer>
                    {timer &&
                        <span>
                            <img src={timerURL} alt="Timer images" />
                            <Countdown renderer={renderer} date={Date.now() + 5.04e+7} />
                        </span>
                    }
                </LeftTimer>
                <Buttons variant="contained">View All</Buttons>
            </LeftBox>
            <Carousel
                swipeable={false}
                responsive={responsiveSlider}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                slidesToSlide={1}
                keyBoardControl={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {products.map((product, id) => (
                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }} key={id}>
                        <SliderBox >
                            <SliderImage src={product.url} alt="Slider Images" />
                            <SliderText style={{ color: "#000", fontWeight: 500, fontSize: '15px' }}>{product.title.shortTitle}</SliderText>
                            <SliderText style={{ color: "green", fontWeight: 500, fontSize: '13px' }}>{product.discount}</SliderText>
                            <SliderText style={{ color: "gray", fontWeight: 500, fontSize: '13px' }}>{product.tagline}</SliderText>
                        </SliderBox>
                    </Link>
                ))}
            </Carousel>
        </SliderComponent>
    )
}

export default SliderPage