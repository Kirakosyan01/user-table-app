import './TableBody.css';
import { EditForm } from "../EditForm/EditForm";
import { TableBodyButtons } from "../TableBodyButtons/TableBodyButtons";

export const TableBody = ({ usersData, setUsersData }) => {
  return (
    <div className='table__body'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{usersData.indexOf(user) + 1}</td>
                {user.isEditing ? (
                  <td colSpan={6}>
                    <EditForm usersData={usersData} setUsersData={setUsersData} user={user}/>
                  </td>
                ) : (
                  <>
                    <td>{user.userName}</td>
                    <td>{user.userCity}</td>
                    <td>{user.userState}</td>
                    <td>{user.userCountry}</td>
                    <td>{user.userCompany}</td>
                  </>
                )}
                {user.isEditing || (
                  <td>
                    <TableBodyButtons
                      usersData={usersData}
                      setUsersData={setUsersData}
                      userId={user.id}
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
