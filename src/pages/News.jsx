import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner } from 'react-bootstrap';

function News() {
    const [data, setData] = useState([]);
    const [topic, setTopic] = useState('technology');
    const [isDone, setIsDone] = useState(false);

    const API_KEY = "56b8031d41aa4445b450d43c711824c2";

    const getNews = (e) => {
        if (e) e.preventDefault();
        setIsDone(false);

        fetch(`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                if (result.articles) {
                    setData(result.articles.slice(0, 12));
                } else {
                    setData([]);
                }
                setIsDone(true);
            })
            .catch(err => {
                console.error(err);
                setIsDone(true);
            });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold fs-1">Today's <span className="text-primary">Journal</span></h1>
                <p className="text-muted">Stay informed with live headlines via NewsAPI.</p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col md={6}>
                    <Form onSubmit={getNews} className="d-flex p-1 border rounded-pill bg-white shadow-sm">
                        <Form.Control
                            type="text"
                            placeholder="Search news topics..."
                            className="border-0 shadow-none px-4"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="rounded-pill px-4">
                            Refresh
                        </Button>
                    </Form>
                </Col>
            </Row>

            {!isDone ? (
                <div className="text-center py-5">
                    <Spinner animation="grow" variant="primary" />
                </div>
            ) : (
                <Row className="g-4">
                    {data.map((post, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="h-100 p-3 border-0 shadow-sm">
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-2">
                                        <span className="badge bg-light text-primary border">{post.source.name}</span>
                                    </div>
                                    <Card.Title className="fw-bold fs-5 mb-3">{post.title}</Card.Title>
                                    <p className="small text-muted mb-4">{post.description ? post.description.substring(0, 100) + "..." : "No description available."}</p>
                                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                                        <small className="text-muted">{new Date(post.publishedAt).toLocaleDateString()}</small>
                                        <a href={post.url} target="_blank" className="text-decoration-none fw-bold small">Read Full →</a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {data.length === 0 && isDone && (
                        <div className="text-center w-100 py-5">
                            <p className="text-muted">No news found for this topic.</p>
                        </div>
                    )}
                </Row>
            )}
        </Container>
    );
}

export default News;
