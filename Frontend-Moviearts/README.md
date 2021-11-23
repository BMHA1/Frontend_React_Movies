# Indice

En este proyecto de geekhub nos han pedido realizar un frontend en base a un proyecto pasado con tecnología react.
Teniendo en cuenta , un backend ajeno a el equipo en Mongoose DB.

1. Tecnologías utilizadas
2. Arquitectura Frontend
3. Contenedores
4. Componentes
5. Instalación
6. Utilización

## 1. Tecnologías & Frameworks

Las dependencias de este proyecto :


![](https://imagizer.imageshack.com/v2/64x64q90/924/agCMk6.png)
![](https://imagizer.imageshack.com/v2/64x21q90/923/kHm8gf.png)
![](https://imagizer.imageshack.com/v2/64x64q90/922/mZxBj9.png)


## 2. Arquitectura Frontend

```
          ├───SRC
            ├───Container
            |   ├──Components
            |   |     ├──bubbleAlert
            |   |     ├──Button
            |   |     ├──Cart
            |   |     ├──CartDetails
            |   |     ├──Footer
            |   |     ├──LayOut
            |   |     ├──Logo
            |   |     ├──MovieCard
            |   |     ├──MovieList
            |   |     ├──NavBar
            |   |     ├──RentalsCard
            |   |     ├──RentalsList
            |   |     ├──Search
            |   |     ├──Title
            |   |     ├──UserCard
            |   |     └──UserList
            |   ├──CreateUser
            |   ├──Login
            |   ├──MoviePage
            |   ├──PayPage
            |   └──ProfileAdmin
            ├───Services
            |         └──ApiConsumer
            ├───App
            ├───Index
            └───Package.json
```

## 3. Contenedores
En este ejemplo estamos viendo el contenedor PayPage.
El cual implementamos la esctrura funcional de componentes.


```
const PayPage = (props) => {
    const movies = JSON.parse(localStorage.getItem('cart'));
    const movieIds = movies.map((e)=> e._id);
    const user = JSON.parse(localStorage.getItem('user'));
    let userId = user._id;
    console.log(userId);
    console.log(movieIds);

    const CreateRental = async() =>{
        let result = await APIConsumer.CreateRental(userId, movieIds);
        if(result){
            localStorage.setItem('cart', JSON.stringify([]));
        }
    };
    const getTotal = () =>{
        return movies.reduce((previousValue, movieItem) => previousValue + movieItem.price, 0);
    };
    return(
        <div>
            
            <Logo/>
            <LayOut>
                <Tittle/>
            </LayOut>
            <h2>Movies</h2>
            {movies.map(x => <li key={x.title} className='movie'> {x.title} <span>{x.price} BitCoin</span> </li> )}
            <p>total: {getTotal()}</p>
            <Button onClick={CreateRental} >Pay</Button>
        </div>
    );
};
```
## 4. Componentes
En este ejemplo pondremos el componente CartDetails y su funcionamiento.

```
const CartDetails = (props) => {
    const { cart } = props; 
    console.log(cart);
    let navigate = useNavigate()
    const getTotal = () =>{
        return cart.reduce((previousValue, cartItem) => previousValue + cartItem.price, 0)
    };
    return(
        <div className="cartDetails" >
            <ul className='ul'>
                {cart.map(x => <li key={x.title} className='movie'> {x.title} <span>{x.price} BitCoin</span> </li> )}
            </ul>
            <Button className="button buttonShop" onClick={()=>navigate('/cart')}>finalize purchase</Button>
            <p>total: {getTotal()}</p>
        </div>
    )
};
```
## Instalación
Para empezar a usar el proyecto necesitaremos  instalar las dependencias.
esto lo haremos con un npm install.

## Utilización
Para levantar el servidor react utilizamos "npm start".
Se ejecuta desde la carpeta raiz del proyecto.

## Dependencias 
| DEPENDECIA |VERSION |
| -------------| ------ |
| Jwt-decode   | 3.1.2 |
| Node-sass    | 6.0.1 |
| React        | 17.0.2 |
| React-dom    |  17.0.2|
| React-router-dom | 6.0.2 |
## License
[BMS](BMS)
