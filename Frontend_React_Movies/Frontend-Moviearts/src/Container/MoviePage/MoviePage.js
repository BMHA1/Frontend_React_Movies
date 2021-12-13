import { Component } from "react";
import './MaviePage.scss'
import LayOut from "../Components/LayOut/LayOut";
import MovieList from "../Components/MovieList/MovieList";
import NavBar from "../Components/NavBar/NavBar";
import Search from "../Components/Search/Search";
import Tittle from "../Components/Title/Tittle";
import { APIConsumer } from "../../services/APIConsumer";


class MoviePage extends Component {
    state = {
        movies:[],
        cart: JSON.parse(localStorage.getItem('cart')),
        cartVisible: false,
        text: null
    };

    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleSearch = (e) =>{
        e.preventDefault();
        let text = e.target.value;
        this.setState({text:text});
        this.handleGetData(text);
    };

    handleGetData = async (text) =>{
        let result = await APIConsumer.getMovies(text);
        console.log(result.movies);
        this.setState({movies:result.movies});
    };

    addToCart = (movie) =>{
        let cart = this.state.cart;
        if(!cart) {
            cart = [];
        }
        if(!cart.find(x => x.title === movie.title)){
            cart.push(movie);
            this.setState({
                cart: cart
            });
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    showCart = () => {
        if (!this.state.cart.length) {
            return;
        }
        this.setState({cartVisible: !this.state.cartVisible});
    };

    componentDidMount = () => {
        this.handleGetData();
        console.log('soy un didmount');
    }
    

    render(){
        
        const { cartVisible } = this.state
        return(
            <div >
                <NavBar 
                    cart={this.state.cart} 
                    cartVisible={cartVisible} 
                    showCart={this.showCart}
                />
                <LayOut>
                    <Tittle/>
                    <Search
                    className="search"
                    handleSearch={this.handleSearch}
                    />
                    <MovieList
                        addToCart={this.addToCart}
                        movies={this.state.movies}
                    />
                    <div className="boton-pedidos">
                   
                   </div>
                </LayOut>
            </div>
        )
    }
}

export default MoviePage