import { APIConsumer } from '../../../services/APIConsumer';
import { APIConsumer } from '../../../services/APIConsumer';
import RentalsCard from '../../Components/RentalsCard/RentalsCard'
import './UserList.scss'




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
        }, 5000)
    }

    useEffect(() => {
        getRentals()
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
                            name={rentals.name} surname={rentals.surname}
                            title={rentals.title}
                            totalPrice={rentals.totalPrice}
                            email={rentals.email} />
                    )
                })}
            </div>

        </>
    )

}
export default RentalList