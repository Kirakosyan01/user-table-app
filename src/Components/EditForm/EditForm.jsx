import './EditForm.css';

export function EditForm({usersData, setUsersData, user}) {
    const handleCancel= (e) => {
        e.preventDefault();
        setUsersData(usersData.map((us) => us.id === user.id ? {...us, isEditing: false} : us))
    }
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        const {
            userName: {value: userName},
            userCity: {value: userCity},
            userState: {value: userState},
            userCountry: {value: userCountry},
            userCompany: {value: userCompany},
         } = e.target;
         const updatedUser = {
            id: user.id,
            userName,
            userCity,
            userState,
            userCountry,
            userCompany,
            isEditing: false,
         };
         setUsersData(
            usersData.map((us) => us.id === user.id ? updatedUser : us)
        );
         e.target.reset();
    }
  return (
    <div className='edit_form__div'>
      <form className='edit__form' onSubmit={handleSubmitEdit}>
        <label htmlFor="userName">Name:</label>
        <input type="text" defaultValue={user.userName} name="userName" placeholder="Name" />
        <label htmlFor="userCity">City:</label>
        <input type="text" defaultValue={user.userCity} name="userCity" placeholder="City" />
        <label htmlFor="userState">State:</label>
        <input type="text" defaultValue={user.userState} name="userState" placeholder="State" />
        <label htmlFor="userCountry">Country:</label>
        <input type="text" defaultValue={user.userCountry} name="userCountry" placeholder="Country" />
        <label htmlFor="userCompany">Company:</label>
        <input type="text" defaultValue={user.userCompany} name="userCompany" placeholder="Company" />
        <button className='save__button'>Save</button>
        <button className='edit_cancel__button' onClick={(e) => handleCancel(e)}>Cancel</button>
      </form>
    </div>
  );
}
