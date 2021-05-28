import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <section className="section-padding bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-truck-fast" />
                                    <h6>Free &amp; Next Day Delivery</h6>
                                    <p>Lorem ipsum dolor sit amet, cons...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-basket" />
                                    <h6>100% Satisfaction Guarantee</h6>
                                    <p>Rorem Ipsum Dolor sit amet, cons...</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-tag-heart" />
                                    <h6>Great Daily Deals Discount</h6>
                                    <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer bg-white border-top">
                <div className="container">
                
                        <div className="row">
                            <div className="col-lg-8 col-md-3">
                                <h3>About Our Store</h3>
                                <p>
Loreum Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
<div className="row">
<div className="col-lg-8 col-sm-3">
                                <h3 className="mb-4">Informations</h3>
                                <ul>
                                    <li><a href="#"> Contact us</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Terms&Conditions</a></li>
                                    
                                    
                                    </ul></div>
                                    </div>


                            </div>
                        </div>
                        </div>
                    
                </section>
                {/* End Footer */}
                {/* Copyright */}
                <section className="pt-4 pb-4 footer-bottom">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0">© Copyright 2021 <strong className="text-dark">Annapurna foods LLc</strong>. All Rights Reserved<br />
                                    <small className="mt-0 mb-0"><i className="mdi mdi-heart text-danger" /> 
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Copyright */}
            </div>
        )
    }
}
