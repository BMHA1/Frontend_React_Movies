import './RentalsCard.scss'

const RentalCard= (props) => {

    return (
        <>
            <div className='cardRentals'>
                <span>{props.id}</span>
                <span>{props.name}</span>
                <span>{props.title}</span>
                <span>{props.totalPrice}$</span>
                <span>{props.email}</span>
            </div>
        </>
    )
}
export default RentalCard