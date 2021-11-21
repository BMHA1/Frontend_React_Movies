import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import './CartDetails.scss'

const CartDetails = (props) => {
    const { cart } = props; 
    console.log(cart);
    let navigate = useNavigate()
    const getTotal = () =>{
        return cart.reduce((previousValue, cartItem) => previousValue + cartItem.price, 0)
    };
    return(
        <div className="cartDetails" >
            <ul className='ul'>
                {cart.map(x => <li key={x.title} className='movie'> {x.title} <span>{x.price} BitCoin</span> </li> )}
            </ul>
            <Button className="button buttonShop" onClick={()=>navigate('/cart')}>finalize purchase</Button>
            <p>total: {getTotal()}</p>
        </div>
    )
};

export default CartDetails;