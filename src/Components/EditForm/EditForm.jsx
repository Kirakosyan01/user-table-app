export function EditForm({usersData, setUsersData, user}) {
  return (
    <div>
      <form>
        <input type="text" name="userName" placeholder="Name" />
        <input type="text" name="userCity" placeholder="City" />
        <input type="text" name="userState" placeholder="State" />
        <input type="text" name="userCountry" placeholder="Country" />
        <input type="text" name="userCompany" placeholder="Company" />
        <button>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
}
