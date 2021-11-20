import './CartDetails.scss'

const CartDatails = (props) => {
    const { cart } = props; 
    console.log(cart);
    return(
        <div className="cartDetails" >
            <ul className='ul'>
                {cart.map(x => <li key={x.title} className='movie'> {x.title} <span>{x.precio}</span> </li> )}
            </ul>
        </div>
    )
};

export default CartDatails