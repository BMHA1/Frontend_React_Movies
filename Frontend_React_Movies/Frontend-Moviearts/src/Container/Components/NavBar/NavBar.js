import Logo from '../Logo/Logo';
import './NavBar.scss';
import Cart from '../Cart/Cart';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom'

const NavBar = (props) => {
    
    let navigate = useNavigate()
    const { cart, cartVisible, showCart } = props
    
    const navigateMi= ()=>{
      
        navigate('/myrentals')
    }
    
    return (
        <nav className='navBar'>
            <Logo />
            <div className="perfil">
            <Button onClick={()=> navigateMi()}>Mis pedidos</Button>
            <Cart
                cart={cart}
                cartVisible={cartVisible}
                showCart={showCart}
            />
            </div>
        </nav>
    )
};

export default NavBar