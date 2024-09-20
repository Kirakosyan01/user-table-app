import './UsersDataTableButtons.css';

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
        <div className="table__buttons">
            {showForm ? <button className="cancel__button" onClick={handleCancel}>Cancel</button> : <button className="create__button" onClick={handleShowForm}>Create</button>}
            <button className="delete_all__button" onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}