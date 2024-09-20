import './TableBodyButtons.css';

export function TableBodyButtons({usersData, setUsersData, userId}){
    const handleDelete = () => {
        setUsersData(usersData.filter((user) => user.id !== userId))
    }
    const handleEditing = () => {
        setUsersData(usersData.map((user) => 
            user.id === userId ? {...user, isEditing: true} : user
        ))
    }
    return (
        <div className='acton_buttons'>
            <button className='edit__button' onClick={handleEditing}>Edit</button>
            <button className='delete__button' onClick={handleDelete}>Delete</button>
        </div>
    )
}