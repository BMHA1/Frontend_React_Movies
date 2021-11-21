import BubbleAlert from '../bubbleAlert/BubbleAlert';
import Button from '../Button/Button';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.scss';

const Cart = (props) => {

    const { cart, cartVisible, showCart} = props;
    
    const cantidad = (cart ? cart.length : 0);
    
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
            {cartVisible ? <CartDetails cart={cart}/> : null}
            
        </div>
    )
};

export default Cart;