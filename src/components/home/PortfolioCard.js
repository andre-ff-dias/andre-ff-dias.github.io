import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function PortfolioCard({ item }) {
    const img_url = `assets/images/portfolio/${item.img}`;
    return (
        <Card border="dark" className="home-card" bg="light">
            <Card.Img variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PortfolioCard;
