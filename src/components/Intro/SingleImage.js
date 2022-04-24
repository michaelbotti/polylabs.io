import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import Product from '~images/product.png';

const SingleImage = () => {
    return (
        <section id="home" className="banner image-bg">

			{/* <!-- Container --> */}
			<Container>
				
				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-3 res-margin">

						{/* <!-- Banner text --> */}
						<div className="banner-text">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
								Web3 for<br/>
								the Future
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
								Kora Labs is a cutting-edge software development agency building robust and resilient Web3 products and protocols on the Cardano blockchain.
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
								
								<a href="/" className="btn" style={{ backgroundColor: '#000 !important'}}>
									Learn More
								</a>
							
							</div>

						</div>
					
					</Col>

					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-9">
				
						<div className="banner-image wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
							<img src={Product} alt="" />
						</div>

					</Col>
					

				</Row>
				
			</Container>
			
			{/* <!-- Wave effect --> */}
			<div className="wave-effect wave-anim">
				
                <div className="waves-shape shape-one">
                    <div className="wave wave-one"></div>
                </div>
				
                <div className="waves-shape shape-two">
                    <div className="wave wave-two"></div>
                </div>
				
                <div className="waves-shape shape-three">
                    <div className="wave wave-three"></div>
                </div>
				
            </div>
			
		</section>
    );
}

export default SingleImage;