import { Component } from "react";
import LayOut from "../Components/LayOut/LayOut";
import MovieList from "../Components/MovieList/MovieList";
import NavBar from "../Components/NavBar/NavBar";
import Tittle from "../Components/Title/Tittle";

class MoviePage extends Component {
    
    //esta es la importacion desde el servidor 
    state = {
        movies:[
            { title: 'Soy Leyenda', year: 2007, precio:10,   imagen:'../../../../public/productos/soy_leyenda.jpg'},
            { title: 'Yo Robots', year: 2002, precio:6,  imagen:'../../../../public/productos/yo_robot.jpg'},
            { title: 'El Hombre Bicentenario', year: 2001, precio:3,  imagen:'../../../../public/productos/bicentenial_man.jpg'},
            { title: 'El Hombre Bicentenario', year: 2001, precio:3,  imagen:'../../../../public/productos/bicentenial_man.jpg'},
            { title: 'El Hombre Bicentenario', year: 2001, precio:3,  imagen:'../../../../public/productos/bicentenial_man.jpg'},
            { title: 'El Hombre Bicentenario', year: 2001, precio:3,  imagen:'../../../../public/productos/bicentenial_man.jpg'},
            { title: 'Evangelion', year: 2001, precio:10,  imagen:'../../../../public/productos/bicentenial_man.jpg'},
            { title: 'Iron Man', year: 2001, precio:15,  imagen:'../../../../public/productos/bicentenial_man.jpg'},
        ],
        cart:[],
        cartVisible: false
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
        this.setState({cartVisible: !this.state.cartVisible})
    }

    render(){
        const { cartVisible} = this.state
        return(
            <div>
                <NavBar cart={this.state.cart} cartVisible={cartVisible} showCart={this.showCart}/>
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