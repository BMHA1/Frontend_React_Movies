import Button from "../Button/Button";
import './MovieCard.scss';

const MovieCard = (props) => {
    const { movie, addToCart } = props
    return(
        <div className="movieCard">
            <h3>Title: {movie.title} <span>({movie.year})</span></h3>
            <p> Price: {movie.precio} $ </p>
            <Button onClick={()=> addToCart(movie)} >Add to Cart</Button>
        </div>
    )
};

export default MovieCard