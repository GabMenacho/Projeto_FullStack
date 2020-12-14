import './galeria.css'

export default function Produto(props) {

    function show_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";
    }

    function hide_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "hidden";
    }

    return (
        
        <figure className={props.categoria + "produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} onMouseOver ={show_info} onMouseOut = {hide_info}>
            <img src={require(`./imagens/${props.imagem}`).default} alt="Imagem de Inspirações"/>
            <figcaption>
                <p className="nome-produto">
                    {props.nome}
                </p>
                <p className="preco-produto">
                    R$ {props.preco}
                </p>
                <p className="nome-artista">
                    {props.artista}
                </p>
                <p className="material">
                    {props.material}
                </p>
            </figcaption>
        </figure>        
    )
}