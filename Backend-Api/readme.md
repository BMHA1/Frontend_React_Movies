# PROYECTO BUSCADOR DE PELÍCULAS

En este tercer reto técnico hemos de realizar un buscador de películas.

## OBJETIVOS

Se nos pide tener dos 2 áreas distinguidas: la de usuario y la de películas.
En la de usuario podremos darnos de alta, ver el perfil del usuario, dar de baja al usuario y loguearnos en la base de datos. Como extra, podemos dar dos roles a los usuarios: user o admin.
Por otro lado, en la de películas, hemos de ser capaces de hacer una búsqueda por el título, por el id y una búsqueda total de toda la lista de películas. Como extra, en este caso podremos filtrarlas por actor y por género.

### PLANTEAMIENTO

Con el patrón de MVC en mente he procedido a ordenar las carpetas internas en una aplicación principal, que enlaza todos los demás componentes y dividir en dos carpetas principales, películas (movie) y usuarios (user). 
Ambas contienen su propia carpeta de controller, model y router, para así ajustarse al patrón mencionado.

### TECNOLOGÍAS

- JavaScript
- Express
- MongoDB
- Mongoose
- Postman

### HOW IT WORKS (CÓMO FUNCIONA)

Ambas BBDD tienen que tener un CRUD.

Para el punto de crear tenemos en ambas este tipo de código:

```javascript

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
}

```

Para las búsquedas, tenemos en ambos una búsqueda general y una búsqueda por ID. En ambos, también podemos buscar por diferentes valores.

```javascript

module.exports.getMovieCollection = async (req, res) => {
    const movie = await Movie.find({});
    res.json(movie);
}

```
Para búsquedas por cualquier tipo de Clave he usado el siguiente código:

```javascript

module.exports.getMovieByKey = async (req, res) => {
    const query = {};
        if(req.query.title)query.title = req.query.title;
        if(req.query.director)query.director = req.query.director;
        if(req.query.genre)query.genre = req.query.genre;
        if(req.query.year)query.year = req.query.year;    const movie = await Movie.find(query);
    res.json(movie);
    }

```

Y para búsquedas exactas por ID he procedido a utilizar el método findById propio de Mongoose.

```javascript

module.exports.getMovieById = async (req, res) => {
    const movie = await Movie.findById({_id: req.params.id})
    res.json(movie)
}

```

Otros dos métodos propios de Mongoose que he usado han sido findyIdAndDelete() y findByIdAndUpdate(). El primero para buscar por ID y borrar el Documento que corresponda, el segundo, hace lo mismo pero en lugar de borrar, cambia el parámetro que le indiquemos.

```javascript

module.exports.deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete({_id: req.params.id})
    res.json({movie : Movie})
}

```

```javascript

module.exports.modifyMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.json({movie : Movie})
}

```

### VISTA EN POSTMAN

Incluir fotos de como se ve.

### ÁRBOL DE ARCHIVOS

```tree

├── components
|       ├── movie
|       |   ├── controller.js
|       |   ├── model.js
|       |   └── router.js
|       └── user
|           ├── controller.js
|           ├── model.js
|           └── router.js
├── node_modules
|
├── package-lock.json
|
├── package.json
|
├── app.js
|
├── connection.js
|
├── middleware.js
|
├── .env
|
├── .gitignore
|
└── readme.md

````