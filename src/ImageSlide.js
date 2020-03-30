import React from "react";
import './Carousel.css';

export const ImageSlide = ({url}) => {
    const styles = {
        height: '700px',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return(<div className="image-slide" style={styles} /> )
}