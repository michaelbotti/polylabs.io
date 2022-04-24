import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import Logo from "~images/kora-logo@1x.png";
import Logo2X from "~images/kora-logo@2x.png";

export default class Footer extends Component {

	componentDidMount() {
		// To top
		const toTop = document.querySelector('.to-top');

		// Scroll
		window.addEventListener('scroll', function() {
			const mainMenu = document.querySelector('.main-menu-area');
			const pos = window.scrollY;
	
			if (mainMenu) {
				if (pos >= 100) {
					mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
				} else {
					mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
				}
			}
	
			// Scroll to top button
			if (pos >= 500) {
				toTop.classList.add('fixed-totop');
			} else {
				toTop.classList.remove('fixed-totop');
			}
		});
	}

	render() {
		return (
			<footer>
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row className="justify-content-center">
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-1 res-margin">
								<div className="widget">
									<img style={{
										borderRadius: '4px',
										background: '#fff',
										padding: '10px'
									}} src={Logo} srcSet={`${Logo2X} 2x`} alt="Kora Labs" width={45} />
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									<a href="https://twitter.com/koralabs">Twitter</a> | <a href="mailto:hello@koralabs.io">Contact</a> | <a href="https://adahandle.com">ADA Handle</a><br/><br/>
									Copyright © 2022 <a href="/" target="_blank">Kora Labs</a>. All Rights Reserved.
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>

			</footer>
		);
	}
	
}