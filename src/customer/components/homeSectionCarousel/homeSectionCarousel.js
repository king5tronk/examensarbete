import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../homeSectionCard/homeSectionCard';

const homeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1,1,1,1,1].map((item)=><HomeSectionCard/>)

  return (
    <div className='relative px-4 lg:px8  border border-grey '>
    <div className='relative p-5'>
        <AliceCarousel
        items={items}
        disableDotsControls={true}
        disableButtonsControls={true}
        autoPlay
        autoPlayInterval={2000}
        infinite
        responsive={responsive}
        />
    </div>
    </div>
  )
}

export default homeSectionCarousel