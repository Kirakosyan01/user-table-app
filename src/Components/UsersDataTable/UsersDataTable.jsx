import './UsersDataTable.css';
import { TableHead } from "../TableHead/TableHead.jsx";
import { useState } from "react";
import { UsersDataTableButtons } from "../UsersDataTableButtons/UsersDataTableButtons.jsx";
import { TableBody } from "../TableBody/TableBody.jsx";

export function UsersDataTable(){
    const [usersData, setUsersData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            userName: {value: userName},
            userCity: {value: userCity},
            userState: {value: userState},
            userCountry: {value: userCountry},
            userCompany: {value: userCompany},
         } = e.target;
         const newUser = {
            id: new Date().getTime().toString(),
            userName,
            userCity,
            userState,
            userCountry,
            userCompany,
            isEditing: false,
         }
         setUsersData([...usersData, newUser]);
         setShowForm(false);
        e.target.reset();
    }

    return (
        <div className="data__table">
            <UsersDataTableButtons setUsers={setUsersData} setShowForm={setShowForm} showForm={showForm}/>
           {showForm && <TableHead handleSubmit={handleSubmit} />}
           <TableBody usersData={usersData} setUsersData={setUsersData}/>
        </div>
    )
}