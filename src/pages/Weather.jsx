import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner, Alert } from 'react-bootstrap';

function Weather() {
    const [city, setCity] = useState('London');
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_KEY = "78b70034f253a7567af0a4f4b11b0718";

    const fetchWeather = (e) => {
        if (e) e.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError('');

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => {
                if (!res.ok) throw new Error("City not found");
                return res.json();
            })
            .then(data => {
                setReport({
                    name: data.name,
                    country: data.sys.country,
                    temp: Math.round(data.main.temp),
                    desc: data.weather[0].description,
                    humidity: data.main.humidity,
                    wind: data.wind.speed,
                    feel: Math.round(data.main.feels_like)
                });
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("We couldn't find weather data for '" + city + "'. Please check the name.");
                setReport(null);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold fs-1">Weather <span className="text-primary">Center</span></h1>
                <p className="text-muted">Live conditions powered by OpenWeather API.</p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col md={6}>
                    <Form onSubmit={fetchWeather} className="d-flex p-1 bg-white border rounded-pill shadow-sm">
                        <Form.Control
                            type="text"
                            placeholder="Search city (e.g. Kollam, London)..."
                            className="border-0 shadow-none px-4"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className="rounded-pill px-4">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>

            {loading && (
                <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            )}

            {error && (
                <div className="text-center mb-4">
                    <Alert variant="danger" className="d-inline-block rounded-4 border-0 shadow-sm">{error}</Alert>
                </div>
            )}

            {report && !loading && (
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="text-center border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="p-5 text-white" style={{ background: 'linear-gradient(135deg, #8da9c4 0%, #a8d1d1 100%)' }}>
                                <div className="fs-1 mb-2">☁️</div>
                                <h2 className="fw-bold mb-1">{report.name}, {report.country}</h2>
                                <p className="text-uppercase small mb-4 opacity-75">{report.desc}</p>
                                <div className="display-1 fw-bold mb-2">{report.temp}°C</div>
                                <p className="mb-0">Feels like {report.feel}°C</p>
                            </div>
                            <Card.Body className="p-4 bg-white">
                                <Row>
                                    <Col className="border-end">
                                        <p className="small text-muted mb-1 text-uppercase fw-bold">Humidity</p>
                                        <h4 className="fw-bold mb-0">{report.humidity}%</h4>
                                    </Col>
                                    <Col>
                                        <p className="small text-muted mb-1 text-uppercase fw-bold">Wind</p>
                                        <h4 className="fw-bold mb-0">{report.wind} m/s</h4>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Weather;
