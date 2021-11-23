
import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../services/APIConsumer';
import RentalsCard from '../Components/RentalsCard/RentalsCard'
import './Myrentals.scss'
// import decode from "jwt-decode"




const Myrentals = () => {

    const [rentals, setRentals] = useState([])
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState(false)




    const getRentalsId = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        let userId = user._id;

            console.log(userId)
        setTimeout(async () => {
            try {
                let resul = await APIConsumer.getAllRentals(userId)
                console.log(resul)
                setRentals(resul)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(true)
                setLoading(false)
            }
        }, 5000)
    }

    useEffect(() => {
        getRentalsId()
    }, [])

    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <h1>Loading...</h1>}
            <div className="rentalsList">
                {rentals.map((rentals) => {
                    return (
                        <RentalsCard
                            id={rentals._id}
                            name={rentals.userId.name} surname={rentals.userId.username}
                            title={rentals.movieId.map((e) => e.title + '  ')}
                            totalPrice={rentals.totalPrice}
                            email={rentals.userId.email} />
                    )
                })}
            </div>
        </>
    )

}
export default Myrentals