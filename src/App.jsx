import { useState, useEffect } from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import axios from 'axios';
import UsersList from './components/UsersList';
import swal from 'sweetalert';


function App() {

  const[users, setUsers] = useState([])
  const [ userSelected, setUserSelected ] = useState(null);

useEffect(() =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
 },[])

 const getUsers = () => {
  axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
}
const addUser = (newUser) =>{
  swal("Good job!", "You add a new user!", "success");
  axios.post('https://users-crud1.herokuapp.com/users/', newUser)
  .then(() => getUsers())
  .catch(error => console.log(error.response));
}
const deleteUser = id => {
  swal("Warning!", "You removed a user! This action can not be undone", "warning");
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
    .catch(error => console.log(error.response));
}

const selectUser = user => {
  swal("Info!", "Use the form to update the user! ", "info");
  setUserSelected(user)
};

const updateUser = userUpdated =>{
  swal("Good job!", "User updated!", "success");
  axios.put(`https://users-crud1.herokuapp.com/users/${userUpdated.id}/`, userUpdated)
  .then(() => getUsers())
}

const deselectUser = () => setUserSelected(null)


  return (
    <div className="App">
      <UsersForm addUser={addUser} userSelected={userSelected} updateUser={updateUser} deselectUser={deselectUser}/>
      <UsersList users={users} deleteUser={deleteUser} selectUser={selectUser}/>
    </div>
  )
}

export default App
