import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import HandleLogo from "~images/features/handle-logo.svg";

const Features = (props) => {
    return (
        <section id="features" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Protocols &amp; Products</h3>
							<p>Kora Labs is dedicated to building lasting protocols and DAO's that further the Cardano ecosystem and broader crypto adoption.</p>
						</div>
						
					</Col>
				</Row>
			
				<Row className="d-flex justify-content-center">
					
					{/* <!-- Left --> */}
					<Col className="col-12 col-md-6 col-lg-2"> 				
						
						<a href="https://adahandle.com">
							<img src={HandleLogo} />
						</a>

					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Features;