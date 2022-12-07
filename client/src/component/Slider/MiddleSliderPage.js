import React from 'react'
import SliderPage from './SliderPage'
import {MiddleSliderComponent, MiddleSliderLeft,MiddleImg } from '../../styles/slider/MiddleSlider'

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
const MiddleSliderPage = ({ products, title, timer }) => {
  return (
    <MiddleSliderComponent>
      <MiddleSliderLeft>
        <SliderPage products={products} title={title} timer={timer} />
      </MiddleSliderLeft>
      <MiddleImg>
        <img src={adURL} alt=" middle slider image" style={{ height: "300px", padding: '10px' }} />
      </MiddleImg>
    </MiddleSliderComponent>
  )
}

export default MiddleSliderPage