import React from 'react';
import {Form, Col, Button, Container} from 'react-bootstrap';
import './formulario.css';


class FormularioContato extends React.Component {
    render() {
        return (
            <Container fluid>
            <Form>
            <Form.Label><h3>Entre em Contato</h3></Form.Label>
            <Form.Row>
                <Form.Group as={Col} controlId="nome-contato">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="name" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="email-contato">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="assunto-contato">
                <Form.Label>Assunto:</Form.Label>
                <Form.Control />
            </Form.Group>

        
            <Form.Group controlId="mensagem-contato">
                <Form.Label>Mensagem:</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escreva sua mensagem" />
            </Form.Group>
         

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Quero receber novidades por email" />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-formulario">
                Enviar
            </Button>
            </Form>
            </Container>
       )
    }
}

export default FormularioContato;