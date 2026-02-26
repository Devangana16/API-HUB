import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="display-4 fw-bold">About <span className="text-primary">Our Studio</span></h1>
                <p className="text-muted fs-5 mt-3 mx-auto" style={{ maxWidth: '600px' }}>
                    We believe data should be accessible, beautiful, and easy to understand for everyone.
                </p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col md={10}>
                    <Card className="p-4 p-md-5">
                        <h3 className="fw-bold mb-4">Our Mission</h3>
                        <p className="lead text-muted">
                            API HUB was created as a project to show how modern web technologies can
                            bring different sources of information into one cohesive experience.
                            We wanted to build something that feels pleasant to use while providing
                            valuable real-time information.
                        </p>

                        <Row className="mt-5 g-4">
                            <Col md={4} className="text-center">
                                <span className="fs-1">🌈</span>
                                <h5 className="fw-bold mt-2">Simplicity</h5>
                                <p className="small text-muted">No clutter, just the data you need in a clean layout.</p>
                            </Col>
                            <Col md={4} className="text-center">
                                <span className="fs-1">⚡</span>
                                <h5 className="fw-bold mt-2">Live Sync</h5>
                                <p className="small text-muted">We fetch fresh data every time you perform a search.</p>
                            </Col>
                            <Col md={4} className="text-center">
                                <span className="fs-1">📱</span>
                                <h5 className="fw-bold mt-2">Mobile Ready</h5>
                                <p className="small text-muted">Works perfectly on your phone, tablet, or desktop.</p>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            <div className="text-center py-5 bg-white rounded-4 shadow-sm border">
                <h4 className="fw-bold mb-4">Built With Care</h4>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <span className="px-3 py-2 bg-light rounded-pill border">React JS</span>
                    <span className="px-3 py-2 bg-light rounded-pill border">Bootstrap 5</span>
                    <span className="px-3 py-2 bg-light rounded-pill border">Fetch API</span>
                    <span className="px-3 py-2 bg-light rounded-pill border">React Router</span>
                </div>
            </div>
        </Container>
    );
}

export default About;
