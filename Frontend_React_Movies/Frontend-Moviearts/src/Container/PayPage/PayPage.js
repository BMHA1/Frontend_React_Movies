import { useNavigate } from "react-router";
import { APIConsumer } from "../../services/APIConsumer";
import Button from "../Components/Button/Button";
import LayOut from "../Components/LayOut/LayOut";
import Logo from "../Components/Logo/Logo";
import Tittle from "../Components/Title/Tittle";


const PayPage = (props) => {
    const movies = JSON.parse(localStorage.getItem('cart'));
    const movieIds = movies.map((e) => e._id);
    const user = JSON.parse(localStorage.getItem('user'));
    let userId = user._id;
    console.log(userId);
    const navigate = useNavigate
    const CreateRental = async () => {
        let result = await APIConsumer.CreateRental(userId, movieIds);
        if (result) {
            localStorage.setItem('cart', JSON.stringify([]));
            setTimeout(() => {
                navigate('/moviepage')
            }, 3000)
        }
    };
    const getTotal = () => {
        return movies.reduce((previousValue, movieItem) => previousValue + movieItem.price, 0);
    };
    return (
        <div>

            <Logo />
            <LayOut>
                <Tittle />
            </LayOut>
            <h2>Movies</h2>
            {movies.map(x => <li key={x.title} className='movie'> {x.title} <span>{x.price} BitCoin</span> </li>)}
            <p>total: {getTotal()}</p>
            <Button onClick={CreateRental} >Pay</Button>
        </div>
    );
};

export default PayPage;
