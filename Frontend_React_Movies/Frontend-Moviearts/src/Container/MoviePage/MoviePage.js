import { Component } from "react";
import LayOut from "../Components/LayOut/LayOut";
import MovieList from "../Components/MovieList/MovieList";
import NavBar from "../Components/NavBar/NavBar";
import Tittle from "../Components/Title/Tittle";

class MoviePage extends Component {
    
    //esta es la importacion desde el servidor 
    state = {
    }

    

    addToCart = (movie) =>{
        const { cart } = this.state
        if(cart.find(x => x.title === movie.title)){ 
            const newCart = cart.map(x => x.title === movie.title?({
                ...x
            }): x )
            return this.setState({cart:newCart})
        }
        return this.setState({
            cart: this.state.cart.concat({
                ...movie,
                cantida:1,
            })
        })
    }

    showCart = () => {
        if (!this.state.cart.length) {
            return
        }
        this.setState({cartVisible: !this.state.cartVisible})
    }

    render(){
        const { cartVisible } = this.state
        console.log(cartVisible);
        return(
            <div>
                <NavBar 
                    cart={this.state.cart} 
                    cartVisible={cartVisible} 
                    showCart={this.showCart}
                />
                <LayOut>
                    <Tittle/>
                    <MovieList
                        addToCart={this.addToCart}
                        movies={this.state.movies}
                    />
                </LayOut>
            </div>
        )
    }
}

export default MoviePage