import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    const updateField = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMessage = (e) => {
        e.preventDefault();
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
    };

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold display-4">Contact <span className="text-primary">Us</span></h1>
                <p className="text-muted fs-5">We would love to hear from you. Send us a message below.</p>
            </div>

            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="p-4 border-0 shadow-sm">
                        {isSent && (
                            <Alert variant="success" className="rounded-pill text-center mb-4">
                                Message sent successfully!
                            </Alert>
                        )}

                        <Form onSubmit={handleMessage}>
                            <Form.Group className="mb-4">
                                <Form.Label className="small fw-bold text-uppercase">Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={updateField}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="small fw-bold text-uppercase">Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={updateField}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="small fw-bold text-uppercase">Your Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={5}
                                    placeholder="How can we help?"
                                    value={formData.message}
                                    onChange={updateField}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100 py-3 shadow">
                                Send Message
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>

            <div className="mt-5 text-center">
                <p className="text-muted">Or reach us at <span className="text-primary fw-bold">hello@apihub.com</span></p>
            </div>
        </Container>
    );
}

export default Contact;
