import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner, Badge } from 'react-bootstrap';

function Products() {
    const [items, setItems] = useState([]);
    const [isWait, setIsWait] = useState(true);
    const [hint, setHint] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(r => r.json())
            .then(val => {
                setItems(val);
                setIsWait(false);
            });
    }, []);

    const results = items.filter(item =>
        item.title.toLowerCase().includes(hint.toLowerCase())
    );

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold fs-1">Shopping <span className="text-primary">Cart</span></h1>
                <p className="text-muted">A curated collection of items for your daily needs.</p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search our catalog..."
                        className="shadow-sm border-0 bg-white"
                        value={hint}
                        onChange={(e) => setHint(e.target.value)}
                        style={{ borderRadius: '50px', padding: '15px 30px' }}
                    />
                </Col>
            </Row>

            {isWait ? (
                <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Row className="g-4">
                    {results.map((obj) => (
                        <Col key={obj.id} md={6} lg={4} xl={3}>
                            <Card className="h-100 p-3">
                                <div className="text-center mb-3" style={{ height: '180px' }}>
                                    <img src={obj.image} alt={obj.title} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                                </div>
                                <Card.Body className="p-0 d-flex flex-column">
                                    <Badge bg="secondary" className="mb-2 align-self-start opacity-75">{obj.category}</Badge>
                                    <Card.Title className="fs-6 fw-bold mb-3">{obj.title}</Card.Title>
                                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                        <span className="fs-5 fw-bold text-dark">${obj.price}</span>
                                        <Button variant="primary" size="sm" className="rounded-circle px-2 py-1">＋</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default Products;
