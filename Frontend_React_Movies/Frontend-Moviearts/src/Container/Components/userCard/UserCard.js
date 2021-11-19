import './UserCard.css'

const UserCard = (props) => {

    return (
        <>
            <div className ='cardUser'>
                <h3> Usuario{props.name} {props.surname}</h3>
                <span>id: {props.id}</span>
                <span>Email: {props.email}</span>
            </div>
        </>
    )
}
export default UserCard 