import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const retrieveUsers = async () => {
      const newUsers = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(newUsers.data);
    };
    retrieveUsers();
  }, []);

  return (
    <div className="App">
      <table>
        <tr>
          <th>#</th>
          <th>Names</th>
          <th>Email</th>
          <th>Username</th>
        </tr>

        {users.map((user, index) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;