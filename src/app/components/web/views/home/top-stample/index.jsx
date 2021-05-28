import React, { Component } from 'react'
import Slider from "react-slick";
import { connect } from 'react-redux';
import { addToCart } from '../../../../../store/actions/cartActions';

import { Link } from 'react-router-dom';
import GroceryStampleDetails from '../../../../services/GroceryStampleDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

class Topstample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productlist: [],isloaded:false
        }
    }
    async componentDidMount() {
        let list = await GroceryStampleDetails.getAllGroceryStaple();
        if(list){
            this.setState({ productlist: list.data, isloaded:true })
        }
    }
    render() {
        let list = this.state.productlist.products;
        console.log(list)
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                {/* New Item slider */}
                <section className="product-items-slider section-padding">
                    <div className="container" id="header-category-bk">
                        <div className="section-header">
                            <span></span>
                            <h5 className="heading-design-h5">{/* <span className="badge badge-primary">20% OFF</span> */}
                                <Link to={{
                                    pathname: `/shop/${this.state.productlist.slug}`,
                                    state: list
                                }}><span className="float-right text-secondary">View All</span></Link>
                            </h5>
                        </div>
                        </div>
                </section>
                <div>
                <div className="section145">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-title-tt">
                                    <div className="main-title-left">
                                        <span></span>
                                        <h2></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5col-md-3">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-8.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-3">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-9.jpg" alt />
                                </a>
                            </div>
                            <div className="col-0g-5co1-md-3">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-10.jpg" alt />
                                </a>
                            </div>
                            <hr></hr><hr></hr><hr></hr><br></br>
                            <div className="col-lg-5col-md-3">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-11.jpg" alt />
                                </a>
                            </div>
                            
                
                            <div className="col-lg-10col-md-5000">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-12.jpg" alt />
                                </a>
                            </div>
                            <hr></hr><br></br>
                            <div className="col-lg-5col-md-10">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-133.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-2">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-144.jpg" alt />
                                </a>
                            </div>
                            
                            <div className="col-lg-10col-md-5000">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-23.jpg" alt />
                                </a>
                                </div>
                            
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-16.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-17.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-17.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-18.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-19.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-20.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-5col-md-8">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-21.jpg" alt />
                                </a>
                            </div>
                            <div className="col-lg-1col-md-0">
                                <a href="#" className="best-offer-item">
                                    <img src="img/best-offers/offer-22.jpg" alt />
                                </a>
                            </div>
                            
                           
                           
                        
                            </div>
                        
                    </div>
                    </div>
                    </div>
                
               
               
                        

                {/* End New item slider */}
            </div>
        )
    }
}
export default connect(null, { addToCart })(Topstample);