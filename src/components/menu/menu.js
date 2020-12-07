import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../galeria/imagens/logo.png';

class Menu extends React.Component{
    render() {
        return (
            <Navbar>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Uma Store logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href=".../">Home</Nav.Link>
                    <Nav.Link href="#link">Produtos</Nav.Link>
                    <Nav.Link href=".../artistas.js">Artistas</Nav.Link>
                    <Nav.Link href=".../blog.js">Notícias</Nav.Link>
                    <Nav.Link href=".../contato.js">Contato</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        
               /* <buttom className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </buttom>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Artistas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contato</a>
                        </li>
                    </ul>
                </div>
            </Navbar>*/
        )
    }
}

export default Menu;