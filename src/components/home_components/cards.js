import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import kkrankenbruder from './kkrankenbruder.png';
import nieta from './nieta.png'
import wander from './wander.png'

class Cards extends React.Component {
    render() {
        return (
            <CardDeck>
            <Card>
                <Card.Img variant="top" src={kkrankenbruder} alt="Imagem de Inspirações" />
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
            <Card.Img variant="top" src={nieta} alt="Imagem de Inspirações" />
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
                <Card.Img variant="top" src={wander} alt="Imagem de Inspirações" />
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