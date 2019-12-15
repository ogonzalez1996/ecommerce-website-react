/**
 * Default Home Page
 */
import React , {Component} from 'react';
import HomeSlider from '../../widgets/HomSlider.js';
import EndOfSeason from '../../widgets/EndOfSeason.js';
import TopSellingProduct from '../../widgets/TopSellingProduct.js';
import HomeBanner from '../../widgets/HomeBanner.js';
import DealOfTheWeek from '../../widgets/DealOfTheWeek.js';
import AboutBanner from '../../widgets/AboutBanner.js';
import Subscribe from '../../widgets/Subscribe.js';
import OurLatestPost from '../../widgets/OurLatestPost.js';
import { Row, Col,Container } from 'reactstrap';
import Instagram from '../../widgets/Instafeed.js';


const latestblogslider = {
   dots: false,
   infinite: true,
   arrows: true,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
};

class HomePage extends Component {
   componentDidMount() {
      window.scrollTo(0, 0)
    }
   render() {
    return (
         <div>
            <HomeSlider />
            <div id="content" className="site-content" tabIndex={-1}>
            <div className="content-wrapper content-wrapper-vc-enabled">
               <div id="primary" className="content-area">
                  <main id="main" className="site-main">
                     <article id="post-13069" className="post-13069 page type-page status-publish hentry">
                        <div className="entry-content">
                           <Container>
                                 <EndOfSeason />
                           </Container>
                           <Container>
                                    <Row className="mb-0 mb-sm-3 mb-lg-5">
                                       <Col sm={12}>
                                          <Row mb={3} className="justify-content-center">
                                          <Col sm={10} lg={6} className="text-center">
                                             <div className="section-title">
                                                <h2 className="title"> Some of our Products</h2>
                                                <p>Some of the Devices offered in our store!</p>
                                             </div>
                                           </Col>
                                          </Row>
                                          <TopSellingProduct />
                                       </Col>
                                    </Row>
                              </Container>
                              <Container>
                                 <HomeBanner />
                              </Container>
                              <div className="container-fluid section-2">
                                 <DealOfTheWeek />
                              </div>
                              <div className="container section-3">
                                 <AboutBanner />
                              </div>
                              <Container>
                                 <Subscribe />
                              </Container>
                              </div>
                       </article>
                     </main>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default HomePage;
