import { EditForm } from "../EditForm/EditForm";
import { TableBodyButtons } from "../TableBodyButtons/TableBodyButtons";

export const TableBody = ({ usersData, setUsersData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>City</td>
            <td>State</td>
            <td>Country</td>
            <td>Company</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{usersData.indexOf(user) + 1}</td>
                {user.isEditing ? (
                  <td colSpan={6}>
                    <EditForm />
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
