import React from 'react'
import PropTypes from 'prop-types';
import {ImageSlide} from "./ImageSlide";
import {Arrow} from "./Arrow";
import './Carousel.css';

class Carousel extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentImageIndex: 0
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = this.props.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = this.props.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return <div className="carousel">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Arrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#9664;" />

            <ImageSlide url={this.props.imgUrls[this.state.currentImageIndex]}/>

            <Arrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#9654;" />
        </div>
    }
}

Carousel.propTypes = {
    imgUrls: PropTypes.array,
};

export default Carousel