import { useNavigate } from 'react-router';
import Button from '../Button/Button';
import './CartDetails.scss'

const CartDatails = (props) => {
    const { cart } = props; 
    console.log(cart);
    let navigate = useNavigate()
    return(
        <div className="cartDetails" >
            <ul className='ul'>
                {cart.map(x => <li key={x.title} className='movie'> {x.title} <span>{x.price} BitCoin</span> </li> )}
            </ul>
            <Button className="button buttonShop" onClick={()=>navigate('/user/rental')}>finalize purchase</Button>

        </div>
    )
};

export default CartDatails