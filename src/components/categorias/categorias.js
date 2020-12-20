import React from 'react';
import {Container} from 'react-bootstrap';
import './categorias.css';

class Categorias extends React.Component {
    render() {
        return (
            <Container>
                <br/><br/>
                <ul className="border">
                    <br />
                    <h5>Artistas</h5>
                    <li className="mb-1 mt-1 text-left categorias">
                        <a className="text-black" href="/">Kkranken</a>
                    </li>
                    <li className="mb-1 mt-1 text-left categorias">
                        <a className="text-black" href="/">Nychder</a>
                    </li>
                    <li className="mb-1 mt-1 text-left categorias">
                        <a className="text-black" href="/">Kcha</a>
                    </li>
                    <li className="mb-1 mt-1 text-left categorias">
                        <a className="text-black" href="/">Nieta Sol</a>
                    </li>
                    <li className="mb-1 mt-1 text-left categorias">
                        <a className="text-black" href="/">Taynara</a>
                    </li>
                <br/><br/>
                
                    <h5>Categoria</h5>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Ilustração</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Objeto</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Escultura</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Adereço</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Figurino</a>
                    </li>
                <br/><br/>
                
                    <h5>Material</h5>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Cerâmica</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Digital</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Madeira</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Papel</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Tecido</a>
                    </li>
                </ul>
            </Container>
        )
    }
}

export default Categorias;