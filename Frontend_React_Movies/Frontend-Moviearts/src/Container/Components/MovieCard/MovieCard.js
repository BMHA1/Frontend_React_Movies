import Button from '../Button/Button'
import './MovieCard.scss';

const MovieCard = (props) => {
    const { movie, addToCart } = props
    return(
        <div className="movieCard">
            <h3>Title: {movie.title} <span>({movie.year})</span></h3>
            <p> genres: {movie.duration} min </p>
            <p> Genres: {movie.genres}  </p>
            <p> Actors: {movie.actors}  </p>
            <p> Price: {movie.price} bitcoins </p>
            <Button onClick={()=> addToCart(movie)} >Add to Cart</Button>
        </div>
    )
};

export default MovieCard