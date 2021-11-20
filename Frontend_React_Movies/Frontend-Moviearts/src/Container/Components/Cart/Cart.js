import BubbleAlert from '../bubbleAlert/BubbleAlert';
import Button from '../Button/Button';
import CartDatails from '../CartDetails/CartDatails';
import './Cart.scss'

const Cart = (props) => {

    const { cart } = props
    
    const cantidad = cart.reduce((acc, ele) => acc + 1, 0)
    console.log(Number(cantidad));
    
    return(
        <div>
            <span className='bubble'>
            {cantidad !== 0 
                ? <BubbleAlert value={cantidad} /> 
                : null }
            </span>
            <Button className='cart' >Cesta</Button>
            <CartDatails cart={cart}/>
        </div>
    )
};

export default Cart