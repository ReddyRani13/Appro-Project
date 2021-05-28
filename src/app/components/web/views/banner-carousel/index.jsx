import React, { Component } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Bannerslider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            
                    <div className="owl-item">
                        <img src="img/banners/offer-2.jpg" alt="supermarket" />
                    </div>
                    
        )
    }
}
