import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCards = () => {
    return (
        <div class="column">
            <Card>
                <div class="p-3 mb-2 bg-primary text-white rounded">
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <Card>
                <div class="p-3 mb-2 bg-danger text-white rounded">
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <Card>
                <div class="p-3 mb-2 bg-success text-white rounded">
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default CustomCards;