import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import '../App.scss';
import '../img/logo2@2x.png';
import { X_OK } from 'constants';

class AppHeader extends Component {
    render() {
        return (
            <div>
            <header id="header">
            <div className="container">
                <div id="logo" className="pull-left">
                    <a href='#'><img height="28px" src="https://res.cloudinary.com/lycoris/image/upload/v1556164102/logo2_2x_d1rbos.png" alt="" title="" ></img></a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Overview</a>
                        </li>
                        <li>
                            <a href="#">Rooms</a>
                        </li>
                        <li>
                            <a href="#">Facilities</a>
                        </li>
                        <li>
                            <a href="#">Dining</a>
                        </li>
                        <li>
                            <a href="#">Offers</a>
                        </li>
                        <li>
                            <a href="#">Meet & Even</a>
                        </li>
                        <li>
                            <a className="button-nav" href='#'>Reserve</a>
                        </li>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <i class="fa fa-bars"></i>
                        </a>
                    </ul>
                </nav>
                {/* <script>
                    function myFunction() {
                        var x = document.getElementById("nav-menu-container");
                        if (x.ClassName === "nav-menu-container") {
                            x.ClassName += " responsive";
                        }
                    }
                </script> */}
            </div>
            </header>
            <section id="hero">
                <div class="hero-container">
                    <h1>Relax Before Your Next Flight</h1>
                </div>
            </section>
            </div>
        );
    }
}

export default AppHeader;