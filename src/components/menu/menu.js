import React from 'react'
class Menu extends React.Component{
    render() {
        return (
            <nav className ="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className = "navbar-brand" href="/">Uma Store</a>
                <buttom className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbar">
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
            </nav>
        )
    }
}

export default Menu;