export function TableHead({handleSubmit}) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="userName" placeholder="Name" />
        <input type="text" name="userCity" placeholder="City" />
        <input type="text" name="userState" placeholder="State" />
        <input type="text" name="userCountry" placeholder="Country" />
        <input type="text" name="userCompany" placeholder="Company" />
        <button>Add</button>
      </form>
    </div>
  );
}
