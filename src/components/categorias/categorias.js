import React from 'react';
import {ListGroup} from 'react-bootstrap';

class Categorias extends React.Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-sm-12">
                <br/><br/>
                <ul className="border">
                    <h5>Artistas</h5>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Kkranken</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Nychder</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Kcha</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
                        <a className="text-black" href="/">Nieta Sol</a>
                    </li>
                    <li className="mb-1 mt-1 text-left">
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
            </div>
        )
    }
}

export default Categorias;