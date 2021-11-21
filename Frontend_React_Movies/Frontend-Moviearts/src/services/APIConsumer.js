
export const APIConsumer = {
    getMovies: async (text) => {
        let movies;
        if (text) {
            const result = await fetch(`http://localhost:9525/movies?title=${text}`, {
                method: "GET",
                headers:{"Authorization" : "Bearer " + localStorage.getItem('token')}
            })
            movies = await result.json();
        } else {
            const result = await fetch(`http://localhost:9525/movies`, {
            method: "GET",
            headers:{"Authorization" : "Bearer " + localStorage.getItem('token')}
        })
        movies = await result.json();
        }
        return movies 
    },

    saveMovie: async (movie) => {
        const result = await fetch(`http://apimobiedb.com/movies`, {
            method: "POST",
            body: {
                movie
            }
        })
        return result
    },
    
    loginUser: async (email, password) => {
        try {
            let result = await fetch(`http://localhost:9525/users/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            
            const token = await result.json();
            console.log(
                token
            );
            return token 
        } catch (error) {

            console.log(error)
        }
    },

    CreateUser: async (name, surname, email, password) => {
        try {
            let result = await fetch(`http://localhost:4000/usuario/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "surname": surname,
                    "email": email,
                    "password": password

                })
            })

            return await result.json()
        } catch (error) {

            console.log(error)
        }
    },
    CreateAdmin: async (name, surname, email, password) => {
        try {
            let result = await fetch(`http://localhost:4000/user/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": name,
                    "surname": surname,
                    "email": email,
                    "password": password

                })
            })

            return await result.json()
        } catch (error) {

            console.log(error)
        }
    },
    getAllMovies: async () => {
        try {
            const result = await fetch(`http://localhost:4000/movies`, {
                method: "GET"
            })

            return await result.json()

        } catch (error) {
            console.log(error)
        }
    }
}