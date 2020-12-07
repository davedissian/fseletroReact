import { useEffect, useState } from 'react'

const EscolherCat = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(async() => {
        const resposta = await fetch("http://localhost/backend/api.php")
        setCategorias(await resposta.json())
    }, [])

    const category = categorias.map(category => {
        const container = {}
        container['id'] = category.id_categoria
        container['nome'] = category.categoria
        return container
    })

    const duplicidade = category.map(JSON.stringify).reverse()
        .filter(function(item, index, arr){return arr.indexOf(item, index + 1) === -1 })
        .reverse().map(JSON.parse)

    let product = document.getElementsByClassName('produto');

    const exibir = (event) => {
        let item = event.target.id;
        for (let i = 0; i < product.length; i++) {
            if (item === product[i].id) {
                product[i].style.display = "inline-block";
            } else {
                product[i].style.display = "none";
            }
        }
    }

    const exibirTodos = () => {
        for (let i = 0; i < product.length; i++) {
            product[i].style.display = "inline-block";
        }
    }

    return(
        <>
        <div className="container-fluid mt-5 row">
            <aside className="col-lg-3 col-sm-3">
                <h4>Categorias</h4>
                <br />
                <ul className="lista navbar-nav ml-auto">
                    <li className="nav-item" onClick={exibirTodos}> <b>Todos</b></li>
                    {duplicidade.map(categoria => {
                        return (
                            <li key={categoria.id} id={categoria.id} className="nav-item" onClick={exibir}>{categoria.nome}</li>
                        )
                    })}
                </ul>
            </aside>
        </div>
        
        </>
    )
}

export default EscolherCat;
