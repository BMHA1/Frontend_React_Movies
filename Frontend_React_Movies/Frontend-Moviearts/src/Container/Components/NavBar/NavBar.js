import Logo from '../Logo/Logo';
import './NavBar.scss';
import Cart from '../Cart/Cart';

const NavBar = (props) => {
    const { cart, cartVisible, showCart} = props
    return(
        <nav className='navBar'>
            <Logo/>
            <Cart 
            cart={cart}
            cartVisible={cartVisible}
            showCart={showCart}
            />
        </nav>
    )
};

export default NavBar 