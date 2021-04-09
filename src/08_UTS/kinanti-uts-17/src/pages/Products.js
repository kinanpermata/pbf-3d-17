import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Products extends React.Component {
    render() {
        return(

            <div>

                <div class="page-h">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h3>Products</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="filter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <ul class="filter-controls controls">
                                    <li class="filter active" data-filter="mix">All</li>
                                    <li class="filter" data-filter="category-1">Music</li>
                                    <li class="filter" data-filter="category-2">Creative</li>
                                    <li class="filter" data-filter="category-3">Responsive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="products">
                    <div class="container">
                        <div class="row">
                            <div id="Grid">
                            <div class="mix category-1 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p1.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p1.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>First Item</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-2 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p2.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p2.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>New Second</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-3 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p3.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p3.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>Number Three</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-2 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p4.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p4.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>Fourth Item</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-1 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p5.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p5.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>Active Five</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-3 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p6.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p6.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>Another Six</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-2 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p7.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p7.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>New Seven</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            <div class="mix category-1 col-md-3 col-sm-6">
                                <div class="thumb-p">
                                    <img src="assets/images/p8.jpg" alt=""/>
                                    <div class="overlay-p">
                                        <a href="assets/images/p8.jpg" data-rel="lightbox"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="content-p">
                                    <h4>Eighth Item</h4>
                                    <span>Creative</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fourth-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h2>NEW PRODUCT PROMOTION ?</h2>
                                <Link to="/contact">(BE THERE RIGHT NOW)</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Products