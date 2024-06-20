import'./index.css'
const UserCard = ({image, fullName}) =>{
    return(
        <div className="users">
            <img src={image} alt={`${fullName} profile`}/>
            <h3>{fullName}</h3>
        </div>
    )
}
export default UserCard
