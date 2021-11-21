import Logo from '../Logo/Logo';
import './NavBar.scss';
import Cart from '../Cart/Cart';
// import Button from '../Button/Button';

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
             {/* <Button >Mis Pedidos</Button> */}
        </nav>
    )
};

export default NavBar 