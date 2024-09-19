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
        <div>
            <button onClick={handleEditing}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}