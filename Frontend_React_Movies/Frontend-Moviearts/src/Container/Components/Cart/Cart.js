import BubbleAlert from '../bubbleAlert/BubbleAlert';
import Button from '../Button/Button';
import CartDatails from '../CartDetails/CartDatails';
import './Cart.scss'

const Cart = (props) => {

    const { cart, cartVisible, showCart} = props
    
    const cantidad = cart.reduce((acc, ele) => acc + 1, 0)
    
    return(
        <div>
            <span className='bubble'>
            {cantidad !== 0 
                ? <BubbleAlert value={cantidad} /> 
                : null }
            </span>
            <Button className='cart' onClick={showCart}>
                Cesta
            </Button>
            {cartVisible ? <CartDatails cart={cart}/> : null}
            
        </div>
    )
};

export default Cart