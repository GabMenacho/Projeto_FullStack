import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import logo from '../galeria/Produto/imagens/logo.png';

function BaseMenu (props){
    const {location} = props
        return (
            <Navbar className = "navbar-dark" bg="dark" expand ="lg" fixed="top">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Uma Store logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="item-menu" /> 
                <Navbar.Collapse id="item-menu">
                    <Nav activeKey={location.pathname} className="mr-auto mr-3">
                        
                        <Nav.Item>
                            <Nav.Link as={Link} href="/home" to="/home">Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} href="/artistas" to="/artistas">Artistas</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} href="/blog" to="/blog">Blog</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link as={Link} href="/contato" to="/contato">Contato</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    const Menu = withRouter(BaseMenu);

    export default Menu;