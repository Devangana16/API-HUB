import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Table, Spinner, Badge } from 'react-bootstrap';

function Finance() {
    const [rates, setRates] = useState({});
    const [isSearching, setIsSearching] = useState(true);
    const [base, setBase] = useState('USD');
    const [search, setSearch] = useState('');

    useEffect(() => {
        setIsSearching(true);
        fetch(`https://api.frankfurter.app/latest?from=${base}`)
            .then(response => response.json())
            .then(data => {
                setRates(data.rates);
                setIsSearching(false);
            })
            .catch(err => {
                console.error("Error:", err);
                setIsSearching(false);
            });
    }, [base]);

    const filteredCodes = Object.keys(rates).filter(code =>
        code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container className="py-5">
            <div className="text-center mb-5 mt-4">
                <h1 className="fw-bold fs-1">Currency <span className="text-primary">Rates</span></h1>
                <p className="text-muted">Live global exchange rates at your fingertips.</p>
            </div>

            <Row className="mb-5 justify-content-center">
                <Col md={4} className="mb-3">
                    <Form.Label className="small fw-bold text-uppercase">Base Currency</Form.Label>
                    <Form.Select value={base} onChange={(e) => setBase(e.target.value)} className="shadow-sm">
                        <option value="USD">USD - US Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Label className="small fw-bold text-uppercase">Search Currency</Form.Label>
                    <Form.Control
                        placeholder="e.g. INR, GBP..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="shadow-sm"
                    />
                </Col>
            </Row>

            {isSearching ? (
                <div className="text-center py-5">
                    <Spinner animation="grow" variant="primary" />
                </div>
            ) : (
                <Card className="overflow-hidden border-0 shadow-sm">
                    <Table responsive hover className="mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th className="px-4 py-3 border-0">Currency Code</th>
                                <th className="py-3 border-0">Exchange Rate (1 {base})</th>
                                <th className="py-3 border-0 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCodes.map(code => (
                                <tr key={code}>
                                    <td className="px-4 py-3 fw-bold">{code}</td>
                                    <td className="py-3 text-primary fs-5 fw-medium">{rates[code].toFixed(4)}</td>
                                    <td className="py-3 text-center">
                                        <Badge bg="success" className="bg-opacity-10 text-success rounded-pill px-3">Active</Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {filteredCodes.length === 0 && (
                        <div className="text-center py-5">
                            <p className="text-muted">No currencies found for "{search}".</p>
                        </div>
                    )}
                </Card>
            )}
        </Container>
    );
}

export default Finance;
