/**
 * Home Slider
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
   slidesToScroll: 1
  };

class HomSlider extends Component {

   render() {
    return (
        <Slider className="slider-01 slider-simple-arrow" {...settings}>
               <div key={1} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-01-slider/iphone11.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content">
                       <div class="container">
                       <div class="row">
                          <div class="col-xl-6 col-md-8">
                          <div class="slide-left">
                            <div class="slide-sale">20 <span>%<br/>off</span></div>
                            <div class="slide-title">
                               <h1>Spring</h1>
                            </div>
                            <div class="slide-subtitle">Season festival</div>
                            <span class="slide-since">iPhone 11 Max Pro</span>
                          </div>
                          </div>
                          <div class="col-xl-6 col-md-4 text-right d-none d-md-block">
                             <div class="slide-offer">
                                 Limited time offer
                             </div>
                             <Link class="slide-button" to="/shop">Get the Offer</Link>
                          </div>
                          </div>
                       </div>
                       </div>
                    </div>
                    </div>

                <div key={2} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-01-slider/pixel4_main.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content">
                       <div class="container">
                       <div class="row">
                          <div class="col-xl-6 col-md-8">
                            <div class="slide-left">
                            <div class="slide-title">
                               <h1>Pixel 4 XL</h1>
                            </div>
                            <div class="slide-subtitle">20% off</div>
                             <Link class="slide-button-flat" to="/shop">Shop now</Link>
                          </div>
                          </div>
                          <div class="col-xl-6 col-md-4 text-right d-none d-md-block">
                             <div class="slide-offer">
                                 Limited time offer
                             </div>
                             <Link class="slide-button" to="/shop">Get the Offer</Link>
                          </div>
                       </div>
                       </div>
                    </div>
                    </div>
                </div>
        </Slider>
      )
   }
}

export default HomSlider;
