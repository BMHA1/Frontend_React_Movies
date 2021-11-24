import './UserCard.scss'

const UserCard = (props) => {

    return (
        <>
            <div className='cardUser'>
                <div className="delete">{props.buton}</div><br />
                <h3>{props.name} {props.surname}</h3><br />
                <span>{props.id}</span><br />
                <span>{props.roleid}</span><br />
                <span>{props.email}</span><br />
            </div>
        </>
    )
}
export default UserCard