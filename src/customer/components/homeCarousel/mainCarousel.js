import React from "react";
import { mainCarouselData } from "./mainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img className="cursor-pointer" 
    role="presentation" src={item.Image} alt={item.title} />)

    return (
        <AliceCarousel
        items={items}
        disableButtonsControls={true}
        autoPlay
        autoPlayInterval={3000}
        infinite
        />
    )
}

export default MainCarousel;