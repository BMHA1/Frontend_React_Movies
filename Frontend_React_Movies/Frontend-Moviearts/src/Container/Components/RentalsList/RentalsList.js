
import React, { useEffect, useState } from "react";
import { APIConsumer } from '../../../services/APIConsumer';
import RentalsCard from '../../Components/RentalsCard/RentalsCard'
import Button from "../Button/Button";
import './RentalsList.scss'
import Loading from "../Loading/Loading"



const RentalList = () => {

    const [rentals, setRentals] = useState([])
    const [loading, setLoading] = useState([true])
    const [error, setError] = useState(false)


    const getRentals = () => {
        console.log('hola')
        setTimeout(async () => {
            try {
                let resul = await APIConsumer.getAllRentals()
                console.log(resul)
                setRentals(resul)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(true)
                setLoading(false)
            }
        }, 3000)
    }

    useEffect(() => {
        getRentals()
    }, [])

    const DeleteRentals = async (id) => {
        console.log(id)
        await APIConsumer.deleteRentals(id)
        console.log("despues del await")
        setLoading(true)
        getRentals()


        // console.log(deleteRentals)
        // setRentals(deleteRentals)
    }

    return (
        <>
            {error && <h1>¡I'm sorry, something has happened!</h1>}
            {loading && <Loading />}
            <div className="rentalsList">
                {rentals.map((rentals) => {
                    return (
                        <RentalsCard
                            buton={<Button className='boton-delete' onClick={() => DeleteRentals(rentals._id)}>x</Button>}
                            id={rentals._id}
                            name={rentals.userId.name} surname={rentals.userId.username}
                            movies={rentals.movieId}
                            totalPrice={rentals.totalPrice}
                            email={rentals.userId.email}
                        />
                    )
                })}
            </div>
        </>
    )

}
export default RentalList