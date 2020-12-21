import React from 'react';
import {Container} from 'react-bootstrap'
import {Form, Col, Button} from 'react-bootstrap';


class paginaProduto extends React.Component {
    render() {
        return (
            <Container fluid>
            <Form><br /><br />
            <Form.Label><h3>Pedido</h3></Form.Label><br />

            <Form.Row>
                <Form.Group as={Col} controlId="nomeProduto">
                <Form.Label>Nome produto:</Form.Label>
                <Form.Control type="nomeProduto" placeholder="O mar" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="nome">
                <Form.Label>Nome do destinatário:</Form.Label>
                <Form.Control type="name" placeholder="Digite seu nome" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group as={Col} controlId="telefone">
                <Form.Label>Telefone:</Form.Label>
                <Form.Control type="telefone" placeholder="Digite o número do seu telefone / celular" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Col xs={3}>
                <Form.Group controlId="cep">
                <Form.Label>CEP:</Form.Label>
                <Form.Control type="cep" placeholder="" />
                </Form.Group>
                </Col>
                
                <Col>
                <Form.Group controlId="redeSocial">
                <Form.Label>Endereço:</Form.Label>
                <Form.Control type="redeSocial" placeholder="Cole aqui o link do seu perfil de artista (facebook, insta, etc)" />
                </Form.Group>
                </Col>
            </Form.Row>

            <Form.Group controlId="pagamento">
                <Form.Label>Forma de Pagamento:</Form.Label>
                <Form.Control as="select" defaultValue="Selecione a forma de pagamento">
                        <option>Boleto bancário</option>
                        <option>Cartão de débito</option>
                        <option>Cartão de crédito 1x</option>
                        <option>Cartão de crédito 2x</option>
                        <option>Cartão de crédito 3x</option>
                </Form.Control>
            </Form.Group>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Quero receber novidades por email" />
            </Form.Group>

            <Button variant="primary" type="submit" className="btn-formulario">
                Ir para pagamento
            </Button>
            </Form>
            </Container>
        )
    }
}

export default paginaProduto;
