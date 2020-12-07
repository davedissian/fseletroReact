import useState from 'react'
import { Form, Button, Row } from 'react-bootstrap'

export default function Pedido() {
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
        <Row>
            <main className="col-lg-6 col-md-6 mx-auto">
                <Form>
                    <h2>Venda</h2>
                    <Form.Group>
                        <Form.Label>Nome do cliente:</Form.Label>
                        <Form.Control type="text" id="nome_cliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control type="text" id="endereço" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control type="text" id="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor unitário:</Form.Label>
                        <Form.Control type="text" id="valor_uni" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="text" id="qtd" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Total:</Form.Label>
                        <Form.Control disabled type="text" id="total" />
                    </Form.Group>
                    <Button type="submit">Efetuar Venda</Button>
                </Form>
            </main>
        </Row>
        </div>
    );
}

/* 
const [form, setForm] = useState({
        nome_cliente: "",
        endereço: "",
        telefone: "",
        produto: "",
        valor_uni: "",
        qtd: "",
        total: ""
    })

    const alteraDados = (evento) => {
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
        console.log(form);
    }

    const enviar = (evento) => {
        setForm({
            ...form,
            total: total
        })
        evento.preventDefault();
        const total = parseFloat(form.valor_uni) * parseFloat(form.qtd)
        document.getElementById("total").value = `R$ ${total}`

        const json = JSON.stringify(form)

        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }

    }

    return (
        <Row>
            <br /><br /><br /><br />
            <main className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={enviar}>
                    <h2>Venda</h2>
                    <Form.Group>
                        <Form.Label>Nome do cliente:</Form.Label>
                        <Form.Control onChange={alteraDados} type="text" id="nome_cliente" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={alteraDados} type="text" id="endereço" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={alteraDados} type="text" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control onChange={alteraDados} type="text" id="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor unitário:</Form.Label>
                        <Form.Control onChange={alteraDados} type="text" id="valor_uni" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={alteraDados} type="text" id="qtd" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Total:</Form.Label>
                        <Form.Control disabled onClick={enviar} type="text" id="total" />
                    </Form.Group>
                    <Button type="submit">Efetuar Venda</Button>
                </Form>
            </main>
        </Row>
    );
*/