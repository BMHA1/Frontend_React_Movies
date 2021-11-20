import BubbleAlert from '../bubbleAlert/BubbleAlert';
import Button from '../Button/Button';
import './Cart.scss'

const Cart = (props) => {

    const { cart } = props
    console.log (cart)
    
    const cantidad = cart.reduce((acc, ele) => acc + 1, 0)
    console.log(Number(cantidad));
    
    return(
        <div>
            <span className='bubble'>
            {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null }
            </span>
            <Button className='cart' >Cesta</Button>
        </div>
    )
};

export default Cart