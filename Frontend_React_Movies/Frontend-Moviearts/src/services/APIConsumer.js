
export const APIConsumer = {
    getMovies: async (text) => {
        const result = await fetch(`http://apimobiedb.com/movies?search=${text}`, {
            method: "GET"
        })
        return result
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
            let result = await fetch(`http://localhost:4000/users/login`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            return await result.json()
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
    getAllUsers: async () => {
        try {
            const result = await fetch(`http://localhost:4000/users`, {
                method: "GET"
            })
            
            return await result.json()

        } catch (error) {
            console.log(error)
        }
    }
}