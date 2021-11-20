import { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.scss'

class MovieList extends Component {
    render(){
        const { movies, addToCart } = this.props
        return(
            <div className='movieList'>
                {movies.map(movie => <MovieCard
                addToCart={addToCart}
                key={movies.title}
                movie={movie}
                />)}
            </div>
        )
    }
};
export default MovieList