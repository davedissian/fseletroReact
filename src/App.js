import Menu from './Components/Menu'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Components/Routes'

export default () =>
    <BrowserRouter>
        <Menu />
        <Routes />
        <Footer />
    </BrowserRouter>

