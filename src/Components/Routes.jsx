import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Produtos from '../Pages/Produtos'
import Lojas from '../Pages/Lojas'
import Contato from '../Pages/Contato'
import Pedido from '../Pages/Pedido'

export default () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Produtos" component={Produtos} />
        <Route path="/Lojas" component={Lojas} />
        <Route path="/Contato" component={Contato} />
        <Route path="/Pedido" component={Pedido} />
    </Switch>


