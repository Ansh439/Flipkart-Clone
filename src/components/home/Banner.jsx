import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';


const Image = styled('img')({
    width: '100%',
    height: '280px'
})

const Banner = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Carousel responsive={responsive} swipeable={false}
        draggable={false} dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" containerClass="carousel-container" infinite={true} autoPlay={true}  autoPlaySpeed={2000} slidesToSlide={1}>
            {
                bannerData.map(data => (
                    <Image src={data.url} alt='bannerData' />
                ))
            }
        </Carousel>
    )
}

export default Banner;