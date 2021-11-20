import Logo from '../Logo/Logo';
import './NavBar.scss';
import Cart from '../Cart/Cart';

const NavBar = (props) => {
    const { cart } = props
    return(
        <nav className='navBar'>
            <Logo/>
            <Cart cart={cart}/>
        </nav>
    )
};

export default NavBar 