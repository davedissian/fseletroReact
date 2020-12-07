import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import logo from '../midia/logo.png'
import '../style/menu.css'

function BaseMenu(props){
    const { location } = props;
    return( 
    <Navbar className="navbar" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">
            <img src={logo} className="d-inline-block align-top" alt="Logo FullStackEletro" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={location.pathname} className="ml-auto mr-3" >
                <Nav.Item>
                    <Nav.Link as={Link} className="text-white" href="/Produtos" to="/Produtos">Produtos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} className="text-white" href="/Lojas" to="/Lojas">Lojas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} className="text-white" href="/Contato" to="/Contato">Fale Conosco</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} className="text-white" href="/Pedido" to="/Pedido">Faça seu pedido</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

const Menu = withRouter(BaseMenu);
export default Menu 

