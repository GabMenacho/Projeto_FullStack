import React from 'react';
import {Container} from 'react-bootstrap'
import {Form, Col, Button} from 'react-bootstrap';


class FormularioArtista extends React.Component {
    render() {
        return (
            <Container fluid>
            <Form>
            <Form.Label><h3>Cadastro de Artistas</h3></Form.Label><br />
            <Form.Label><p>Quer vender suas produções artísticas na Uma Store? <br />Preencha o formulário de interesse e nossa curadoria entrará em contato.</p></Form.Label>
           
            <Form.Row>
                <Form.Group as={Col} controlId="nomeArtista">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="name" placeholder="Digite seu nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="redeSocial">
                <Form.Label>Rede Social:</Form.Label>
                <Form.Control type="redeSocial" placeholder="Cole aqui o link do seu perfil de artista (facebook, insta, etc)" />
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
                <Form.Group as={Col} controlId="cidade">
                <Form.Label>Cidade:</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="estado">
                <Form.Label>Estado:</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                    <option>SP</option>
                    <option>RJ</option>
                    <option>AC</option>
                    <option>AL</option>
                    <option>AP</option>
                    <option>AM</option>
                    <option>BA</option>
                    <option>CE</option>
                    <option>DF</option>
                    <option>ES</option>
                    <option>GO</option>
                    <option>MA</option>
                    <option>MT</option>
                    <option>MS</option>
                    <option>MG</option>
                    <option>PA</option>
                    <option>PB</option>
                    <option>PR</option>
                    <option>PE</option>
                    <option>PI</option>
                    <option>RN</option>
                    <option>RS</option>
                    <option>RO</option>
                    <option>RR</option>
                    <option>SC</option>
                    <option>SE</option>
                    <option>TO</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="cep">
                <Form.Label>CEP:</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="endereco">
                <Form.Label>Endereço:</Form.Label>
                <Form.Control placeholder="Logradouro, número, bairro" />
            </Form.Group>

            <Form.Group controlId="mensagem">
                <Form.Label>Mensagem:</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Conte sobre o que você deseja disponibilizar na UMA STORE" />
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

export default FormularioArtista;