import './UserCard.scss'

const UserCard = (props) => {

    return (
        <>
            <div className='cardUser'>
                <h3>{props.name} {props.surname}</h3>
                <span>{props.id}</span>
                <span>{props.roleid}</span>
                <span>{props.email}</span>
            </div>
        </>
    )
}
export default UserCard