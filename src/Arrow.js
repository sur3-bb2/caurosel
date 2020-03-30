import React from "react";
import './Carousel.css';

export const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </div>
);
