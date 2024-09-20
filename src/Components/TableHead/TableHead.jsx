import './TableHead.css';

export function TableHead({handleSubmit}) {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className='table_head'>
        <input type="text" name="userName" placeholder="Name" />
        <input type="text" name="userCity" placeholder="City" />
        <input type="text" name="userState" placeholder="State" />
        <input type="text" name="userCountry" placeholder="Country" />
        <input type="text" name="userCompany" placeholder="Company" />
        <button className='add__button'>Add</button>
      </form>
    </div>
  );
}
