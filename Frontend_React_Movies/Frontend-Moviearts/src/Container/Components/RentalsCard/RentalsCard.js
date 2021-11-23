import './RentalsCard.scss'
import MovieCard from '../MovieCard/MovieCard'

const RentalCard = (props) => {


    return (
        <>
            <div className='cardRentals'>
                <div className="delete">{props.buton}</div><br/>
                <span>UserId:{props.id}</span><br/>
                <span>Name: {props.name} </span><br/>
                <span>Collection:{props.title}</span><br/>
                <span> Price Total: {props.totalPrice}$</span><br/>
                <span> Email: {props.email}</span><br/>
                <span>Movies in rental: </span>
                <select> Movies
                    {props.movies.map((movie) => {
                        return <option>{movie.title}</option>
                    })}
                </select>

            </div>
        </>
    )
}
export default RentalCard