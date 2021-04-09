import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div>

                {/* <!-- HEADER --> */}
                <div class="site-header">
                    <div class="container">
                        <div class="row">
                            <nav class="navbar navbar-default navbar-static-top">
                                <div class="navbar-header">
                                    <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#main-menu">
                                        <span class="sr-only">Toggle navigation</span>
                                        <i class="fa fa-bars"></i>
                                    </button>
                                    <Link to="/" class="navbar-brand">Stone</Link>
                                </div>
                                <div class="collapse navbar-collapse" id="main-menu">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/promotion">Promotion</Link></li>
                                        <li><Link to="/products">Products</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <!-- .site-header --> */}

            </div>
        );
    }
}

export default Header;