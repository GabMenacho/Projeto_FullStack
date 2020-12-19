import { useState, useEffect} from 'react';
import Categorias from '../components/categorias/categorias';


import Produto from '../components/galeria/Produto';
import {Container, Row, Col, TabContainer} from 'react-bootstrap';

export default function Produtos () {
    const [ produtos, setProdutos ] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/Projeto-Site/PHP/api/produtos.php")
        const dados = await resposta.json()
        setProdutos(dados);
        console.log(produtos);
    }, []);

    return (
            <Row>
                    <Categorias />
                    {produtos && produtos.map(item => <Produto imagem={item.nomeImagem} nome={item.nome} preco={item.preco} categoria={item.categoria} artista={item.nomeArtista} material={item.material} />)}
            </Row>
    )
}