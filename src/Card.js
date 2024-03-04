import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCards = () => {
    return (
        <div class="col">
            <Card>
                <div class="bg-primary text-white rounded col-sm-6 w-50">
                <Card.Body>
                    <Card.Title>Card 01</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
            <Card>
                <div class="bg-danger text-white rounded col-sm-6 w-50">
                <Card.Body>
                    <Card.Title>Card 02</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
            <Card>
                <div class="bg-success text-white rounded col-sm-6 w-50">
                <Card.Body>
                    <Card.Title>Card 03</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </div>
                </Card>
                </Card>
            </Card>
        </div>
    );
};

export default CustomCards;