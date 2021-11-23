import './RentalsCard.scss'
import MovieCard from '../MovieCard/MovieCard'

const RentalCard= (props) => {
console.log(props.title)

    return (
        <>
            <div className='cardRentals'>
                <span>UserId:{props.id}</span>
                <span>Name: {props.name} </span>
                <span>Collection:{props.title}</span>
                <span> Price Total: {props.totalPrice}$</span>
                <span> Email: {props.email}</span>
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