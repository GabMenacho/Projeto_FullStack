import React from 'react';
import {Card, CardDeck, } from 'react-bootstrap';
import kkrankenbruder2 from './kkrankenbruder2.jpg';
import nieta3 from './nieta3.jpg'
import Wander4 from './Wander4.jpg'

class Cards extends React.Component {
    render() {
        return (
            <CardDeck>
            <Card>
                <Card.Img variant="top" src={kkrankenbruder2} alt="Imagem de Inspirações" />
                <Card.Body>
                <Card.Title>Ilustrações</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
            <Card.Img variant="top" src={nieta3} alt="Imagem de Inspirações" />
                <Card.Body>
                <Card.Title>Esculturas</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Wander4} alt="Imagem de Inspirações" />
                <Card.Body>
                <Card.Title>Objetos lúdicos</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardDeck>
       )
    }
}

export default Cards;