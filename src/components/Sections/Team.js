import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Images
import Goose from '~images/team/goose.jpeg';
import Conrad from '~images/team/conrad.jpeg';
import PapaGoose from '~images/team/papagoose.jpeg';
import BigIrishLion from '~images/team/bigirishlion.png';
import Calvin from '~images/team/calvin.png';

const Team = () => {
    return (
        <section id="team">
            {/* <!-- Container --> */}
            <Container>
                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        <div className="section-title text-center">
                            <h3>Our Team</h3>
                            <p>
                                Meet the team around Kora Labs, a combined 50+ years of engineering experience on enterprise scale solutions, including staking
                                and mining expertise on Cardano and Ergo.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-12">
                        <h4 className="text-center" style={{ marginBottom: 40 }}>
                            Founders
                        </h4>
                    </Col>
                    {/* <!-- Member 1 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="team-member res-margin">
                            <div className="team-image">
                                <img src={Goose} alt="" />
                                <div className="team-social">
                                    <div className="team-social-inner">
                                        <a href="https://twitter.com/gooseofcrypto" target="_blank" aria-label="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details">
                                <h5 className="title">
                                    <a href="/worker">$goose</a>
                                </h5>
                                <span className="position">CEO | CoFounder</span>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Member 2 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="team-member res-margin">
                            <div className="team-image">
                                <img src={Conrad} alt="" />
                                <div className="team-social">
                                    <div className="team-social-inner">
                                        <a href="https://twitter.com/conraddit" target="_blank" aria-label="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details">
                                <h5 className="title">
                                    <a href="/worker">$conrad</a>
                                </h5>
                                <span className="position">COO | CoFounder</span>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Member 3 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="team-member res-margin">
                            <div className="team-image">
                                <img src={PapaGoose} alt="" />
                                <div className="team-social">
                                    <div className="team-social-inner">
                                        <a href="https://twitter.com/papagoose" target="_blank" aria-label="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details">
                                <h5 className="title">
                                    <a href="/worker">$papagoose</a>
                                </h5>
                                <span className="position">CPO | CoFounder</span>
                            </div>
                        </div>
                    </Col>

                    {/* <!-- Member 4 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="team-member">
                            <div className="team-image">
                                <img src={BigIrishLion} alt="" />
                                <div className="team-social">
                                    <div className="team-social-inner">
                                        <a href="https://twitter.com/bigirishlion" target="_blank" aria-label="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details">
                                <h5 className="title">
                                    <a href="/worker">$bigirishlion</a>
                                </h5>
                                <span className="position">CTO | CoFounder</span>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-12">
                        <h4 className="text-center" style={{ margin: 40 }}>
                            Advisory Committee
                        </h4>
                    </Col>

                    {/* <!-- Member 5 --> */}
                    <Col className="col-12 col-md-6 col-lg-3">
                        <div className="team-member">
                            <div className="team-image">
                                <img src={Calvin} alt="" />
                                <div className="team-social">
                                    <div className="team-social-inner">
                                        <a href="https://twitter.com/CalvinsBrew" target="_blank" aria-label="Twitter">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="https://linkedin.com/u/cjkoepke" target="_blank" aria-label="LinkedIn">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="https://dribbble.com/cjkoepke" target="_blank" aria-label="Dribbble">
                                            <i className="fab fa-dribbble"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details">
                                <h5 className="title">
                                    <a href="/worker">$calvin</a>
                                </h5>
                                <span className="position">Chairman of the Board</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Team;
