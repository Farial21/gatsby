import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button} from 'react-bootstrap';

function WineCard(props) {
    const {title, image, rating, price, handleClick} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title} - {price} Baht</Card.Title>
                {/* <Card.Text>{description}</Card.Text> */}
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default WineCard