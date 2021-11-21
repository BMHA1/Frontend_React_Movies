import './RentalsCard.scss'



const RentalCard= (props) => {
console.log(props.title)

    return (
        <>
            <div className='cardRentals'>
                <span>UserId:{props.id}</span>
                <span>Name: {props.name} </span>
                <span>{props.title}</span>
                <span> Price Total: {props.totalPrice}$</span>
                <span> Email: {props.email}</span>
            </div>
        </>
    )
}
export default RentalCard