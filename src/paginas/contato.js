import React from 'react';
import {Tab, Nav, Row, Col} from 'react-bootstrap';
import FormularioArtista from '../components/formulario/formulario_artista';
import FormularioContato from '../components/formulario/formulario_contato';
import '../components/css_paginas/contato.css';

class Contato extends React.Component {
    render() {
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <br />
                <br />
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Contato</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Formulário Artistas</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <FormularioContato />
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <FormularioArtista />
                        {/* <Sonnet /> */}
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        )
    };
};

export default Contato;