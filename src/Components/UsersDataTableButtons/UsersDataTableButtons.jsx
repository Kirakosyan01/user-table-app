export function UsersDataTableButtons({setUsers, setShowForm, showForm}){
    
    const handleShowForm = () => {
        setShowForm(true)
    }
    const handleCancel = () => {
        setShowForm(false)
    }
    const handleDeleteAll = () => {
        setUsers([])
    }

    return (
        <div>
            {showForm ? <button onClick={handleCancel}>Cancel</button> : <button onClick={handleShowForm}>Create</button>}
            <button onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}