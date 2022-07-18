import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import axios from 'axios'
import UsersList from './components/UsersList'

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
  alert('adding user');
  axios.post('https://users-crud1.herokuapp.com/users/', newUser)
  .then(() => getUsers())
  .catch(error => console.log(error.response));
}
const deleteUser = id => {
  alert('removing user');
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers())
    .catch(error => console.log(error.response));
}

const selectUser = user => {
  alert('user selected');
  setUserSelected(user)
};

const updateUser = userUpdated =>{
  alert('user updated');
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
