import '../style/produto.css'

export default function Produto(props) {

    function showInfo(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";
    }

    function hideInfo(event) {
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "hidden";
    }

    return (
        <figure className={props.nome + " produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} onMouseOver={showInfo} onMouseOut={hideInfo}>
            <img src={require(`../midia/${props.imagem}`).default} alt="Imagem de produtos" />
            <figcaption> 
                <p className="nomeProd">
                    {props.nome}
                </p>
                <p className="descr">
                    {props.descr}
                </p>
                <p className="precoFinal">
                    R$ {props.preco}
                </p>
            </figcaption>
        </figure>
    )
}

