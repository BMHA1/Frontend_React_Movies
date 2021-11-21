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
        cart:[],
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
        const { cart } = this.state;
        if(cart.find(x => x.title === movie.title)){ 
            const newCart = cart.map(x => x.title === movie.title?({
                ...x
            }): x );
            return this.setState({cart:newCart});
        }
        return this.setState({
            cart: this.state.cart.concat({
                ...movie
            })
        });
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
        console.log('me he renderizado');
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
                </LayOut>
            </div>
        )
    }
}

export default MoviePage