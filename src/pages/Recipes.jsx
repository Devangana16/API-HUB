import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner, Modal } from 'react-bootstrap';

function Recipes() {
    const [meals, setMeals] = useState([]);
    const [active, setActive] = useState(false);
    const [search, setSearch] = useState('chocolate');
    const [pick, setPick] = useState(null);

    const getMeals = (e) => {
        if (e) e.preventDefault();
        setActive(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(info => {
                setMeals(info.meals || []);
                setActive(false);
            });
    };

    useEffect(() => {
        getMeals();
    }, []);

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold fs-1">Chef's <span className="text-primary">Corner</span></h1>
                <p className="text-muted">Discover simple and delicious recipes to try at home.</p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col md={6}>
                    <Form onSubmit={getMeals} className="d-flex p-1 border rounded-pill bg-white shadow-sm">
                        <Form.Control
                            type="text"
                            placeholder="What are you craving?"
                            className="border-0 shadow-none px-4"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="rounded-pill px-4">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>

            {active ? (
                <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>
            ) : (
                <Row className="g-4">
                    {meals.map((m) => (
                        <Col key={m.idMeal} md={6} lg={4}>
                            <Card className="h-100 overflow-hidden border-0">
                                <Card.Img variant="top" src={m.strMealThumb} style={{ height: '220px', objectFit: 'cover' }} />
                                <Card.Body className="text-center">
                                    <h5 className="fw-bold">{m.strMeal}</h5>
                                    <p className="text-muted small mb-3">{m.strCategory} | {m.strArea}</p>
                                    <Button
                                        variant="outline-primary"
                                        className="w-100 py-2"
                                        onClick={() => setPick(m)}
                                    >
                                        View Recipe
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}

            <Modal show={pick !== null} onHide={() => setPick(null)} size="lg" centered>
                {pick && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title className="fw-bold">{pick.strMeal}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            <Row>
                                <Col md={5}>
                                    <img src={pick.strMealThumb} alt={pick.strMeal} className="img-fluid rounded-4 shadow-sm mb-3" />
                                    <div className="p-3 bg-light rounded-3">
                                        <p className="mb-1"><strong>Type:</strong> {pick.strCategory}</p>
                                        <p className="mb-0"><strong>Region:</strong> {pick.strArea}</p>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <h6 className="fw-bold mb-3">Cooking Instructions:</h6>
                                    <p className="text-muted small" style={{ lineHeight: '1.8' }}>
                                        {pick.strInstructions}
                                    </p>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </>
                )}
            </Modal>
        </Container>
    );
}

export default Recipes;
