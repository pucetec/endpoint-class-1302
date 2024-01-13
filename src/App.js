import React, { useEffect, useState } from "react";
import axios from "axios";  // Ajustado el import de axios


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const retrieveUsers = async () => {
      try {
        const newUsers = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(newUsers.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    retrieveUsers();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
