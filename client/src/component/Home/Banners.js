import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { allBannerData, responsive } from '../../utils/constant'
import { styled } from '@mui/material'

const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '240px',
    [theme.breakpoints.down('md')]: {
        height: '180px'
    }
}))

const Banners = () => {
    return (
        <Carousel
            swipeable={false}
            responsive={responsive}
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
            {allBannerData.map((data, id) => (
                <Image src={data.url} alt="banners" key={id} />
            ))}
        </Carousel>
    );
}
export default Banners