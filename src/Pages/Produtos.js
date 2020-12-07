import { useState, useEffect } from 'react';
import Produto from '../Components/indexProd.js'
import EscolherCat from '../Components/Categoria.jsx'
import { Container, Row } from 'react-bootstrap' 
import '../backend/produtos.php'

export default function Produtos () { 
    const [ produtos, setProdutos ] = useState([]);

    useEffect(async () => {
        const retorno = await fetch('http://localhost/backend/api.php')
        setProdutos(await retorno.json())
    }, [] )

    return(
        <>
            
            <Container>
            <br /><br /><br /><br /><br /><br />
                    <Container>
                        <EscolherCat />
                    </Container>
                                  
                    <Container>
                        <Row>
                            {produtos && produtos.map(item => <Produto imagem={item.imagem} nome={item.nome} preco={item.preco} categoria={item.fogao} />)}               
                        </Row>
                    </Container> 
                
            </Container>
        </>
    )
}
