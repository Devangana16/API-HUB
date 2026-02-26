import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    const apiList = [
        { title: 'Weather', emoji: '☁️', color: '#e0f2fe', path: '/weather', text: 'Check the current weather in any city.' },
        { title: 'Recipes', emoji: '🍳', color: '#fef3c7', path: '/recipes', text: 'Find delicious meals to cook tonight.' },
        { title: 'Products', emoji: '🛍️', color: '#dcfce7', path: '/products', text: 'Browse items from our online store.' },
        { title: 'Movies', emoji: '🎬', color: '#f3e8ff', path: '/movies', text: 'Search for shows and movies you love.' },
        { title: 'Finance', emoji: '📈', color: '#ffedd5', path: '/finance', text: 'View the latest currency exchange rates.' },
        { title: 'News', emoji: '📰', color: '#fee2e2', path: '/news', text: 'Read the top headlines from today.' }
    ];

    const scrollToContent = () => {
        const section = document.getElementById('explore-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <section className="py-5 mb-5">
                <Container className="py-5 text-center">
                    <h1 className="display-3 fw-bold mb-4">Explore the World of <span className="text-primary">Data</span></h1>
                    <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '650px' }}>
                        A cozy space where you can find everything from recipes to weather forecasts
                        in just one click. Simple, clean, and easy to use.
                    </p>
                    <Button onClick={scrollToContent} variant="primary" size="lg" className="rounded-pill shadow px-5 py-3">
                        Start Exploring
                    </Button>
                </Container>
            </section>

            <Container id="explore-section" className="pb-5">
                <div className="mb-5">
                    <h2 className="fw-bold h1">Our Collections</h2>
                    <p className="text-muted">Pick a category to begin exploring live data.</p>
                </div>

                <Row className="g-4">
                    {apiList.map((item, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="h-100 p-4 text-center border-0 shadow-sm">
                                <Card.Body>
                                    <div className="fs-1 mb-3 p-3 rounded-circle d-inline-block" style={{ backgroundColor: item.color }}>
                                        {item.emoji}
                                    </div>
                                    <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                                    <p className="text-muted mb-4">{item.text}</p>
                                    <Button as={Link} to={item.path} variant="outline-primary" className="w-100 rounded-pill">
                                        See Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
