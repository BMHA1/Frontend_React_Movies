// import { useState } from "react";
// import { APIConsumer } from "../../services/APIConsumer";
// import LayOut from "../Components/LayOut/LayOut";
// import MovieList from "../Components/MovieList/MovieList";
// import NavBar from "../Components/NavBar/NavBar";
// import Search from "../Components/Search/Search";
// import Tittle from "../Components/Title/Tittle";

// const MoviePage = () => {
//     const [ movies, serMovies ] = useState([]);
//     const [cart, setcart] = useState([])
    
//     const getMovies = async() =>{
//         let result = await APIConsumer.getMovies
//     };
//     return(
//         <div >
//                 <NavBar 
//                     cart={this.state.cart} 
//                     cartVisible={cartVisible} 
//                     showCart={this.showCart}
//                 />
//                 <LayOut>
//                     <Tittle/>
//                     <Search
//                     className="search"
//                     />
//                     <MovieList
//                         addToCart={this.addToCart}
//                         movies={this.state.movies}
//                     />
//                 </LayOut>
//             </div>
//     )
// };

