import React, { Component } from 'react'
import CarouselItem from './CarouselItem';
import Slider from "react-slick";

export default class Carousel extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
        }

        const { pageclass } = this.props
        return (
            <Slider {...settings} className={`fade-carousel ${pageclass ? pageclass : ''}`}>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Slider>
        )
    }
}
