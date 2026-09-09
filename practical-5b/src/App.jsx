import axios from "axios";
import {useEffect, useState} from "react";

function App(){
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.cm/user")
    .then((response) => {
      setUsers(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const filteredUsers = users.filter((user => 
    user.name.toLowerCase().include(search.toLowerCase())
  ));

  return (
    <div>
      <h1>
        User List
      </h1>
      <input type="text" placeholder="Search User..." value={search} onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}

export default App;