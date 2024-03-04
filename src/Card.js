import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCards = () => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* Add more Card components as needed */}
        </div>
    );
};

export default CustomCards;