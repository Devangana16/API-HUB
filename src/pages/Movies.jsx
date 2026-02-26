import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner, Alert } from 'react-bootstrap';

function Movies() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('Avatar');
    const [error, setError] = useState('');

    const API_KEY = "89d21e8d";

    const searchMovies = (e) => {
        if (e) e.preventDefault();
        setLoading(true);

        fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setList(data.Search);
                    setError('');
                } else {
                    setList([]);
                    setError(data.Error || "No movies found.");
                }
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Failed to connect to movie database.");
                setLoading(false);
            });
    };

    useEffect(() => {
        searchMovies();
    }, []);

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold fs-1">Movie <span className="text-primary">Library</span></h1>
                <p className="text-muted">Powered by OMDb API with secure access.</p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col md={6}>
                    <Form onSubmit={searchMovies} className="d-flex p-1 border rounded-pill bg-white shadow-sm">
                        <Form.Control
                            type="text"
                            placeholder="Search for a movie title..."
                            className="border-0 shadow-none px-4"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="rounded-pill px-4">
                            Find
                        </Button>
                    </Form>
                </Col>
            </Row>

            {error && (
                <div className="text-center mb-4">
                    <Alert variant="danger" className="d-inline-block rounded-4 border-0 shadow-sm">{error}</Alert>
                </div>
            )}

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="grow" variant="primary" />
                </div>
            ) : (
                <Row className="g-4">
                    {list.map((movie) => (
                        <Col key={movie.imdbID} md={6} lg={4} xl={3}>
                            <Card className="h-100 overflow-hidden border-0 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400x600?text=No+Poster'}
                                    style={{ height: '350px', objectFit: 'cover' }}
                                />
                                <Card.Body className="text-center">
                                    <h6 className="fw-bold text-truncate">{movie.Title}</h6>
                                    <p className="text-muted small mb-3">{movie.Year} | {movie.Type}</p>
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        className="w-100 rounded-pill"
                                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                                        target="_blank"
                                    >
                                        View IMDB
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    {list.length === 0 && !loading && (
                        <div className="text-center w-100 py-5">
                            <p className="text-muted">No movies found for your search.</p>
                        </div>
                    )}
                </Row>
            )}
        </Container>
    );
}

export default Movies;
