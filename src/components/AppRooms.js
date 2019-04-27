import React, { Component } from 'react';
import '../App.scss';

class AppRooms extends Component {
    render() {
        return (
            // <div id="content-rooms">
            //     <section className="section-rooms">
            //         <img className="img-rooms" src="https://res.cloudinary.com/lycoris/image/upload/v1556246837/asset/4_2x_sztj2c.png" alt="" />
            //         <div className="container row class">
            //             <h2>Junior Suit</h2>
            //         </div>
            //     </section>
            // </div>
            <section id="call-to-action">
                <div class="container wow fadeIn">
                    <div class="row">
                        <div class="col-lg-9 text-center text-lg-left">
                        <h2 class="cta-title">Discover Our Rooms</h2>
                        <p class="cta-text">Lorem impsum</p>
                        </div>
                        <div class="col-lg-3 cta-btn-container text-center">
                        <a class="cta-btn align-middle">Junior Suite</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppRooms;