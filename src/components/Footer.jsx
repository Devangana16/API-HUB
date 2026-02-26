import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="py-5 mt-auto bg-white border-top">
            <Container>
                <Row className="gy-4 align-items-center text-center">
                    <Col md={12}>
                        <h4 className="fw-bold mb-3">API HUB</h4>
                        <p className="text-muted mx-auto mb-4" style={{ maxWidth: '500px' }}>
                            Exploring the world of live data through modern integration.
                            Simple, fast, and real-time.
                        </p>
                        <div className="border-top pt-4">
                            <p className="text-muted small mb-0">
                                &copy; {new Date().getFullYear()} API HUB. All rights reserved.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
