import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCards = () => {
    return (
        <div class="container">
            <div class="col" style={{ width: 400, display: 'inline-flex', margin: 20 }}>
            <Card>
                    <div class="bg-primary text-white rounded col-sm" style={{ width: 400, display: 'inline-flex', margin: 20 }}>
                <Card.Body>
                    <Card.Title>Card 01</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
            <Card>
                    <div class="bg-danger text-white rounded col-sm" style={{ width: 400, display: 'inline-flex', margin: 20 }}>
                <Card.Body>
                    <Card.Title>Card 02</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <Card>
                    <div class="bg-success text-white rounded col-sm" style={{ width: 400, display: 'inline-flex', margin: 20 }}>
                <Card.Body>
                    <Card.Title>Card 03</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
        </div>
        </div>
    );
};

export default CustomCards;