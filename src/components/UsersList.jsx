import React from 'react';

const UsersList = ({users, deleteUser, selectUser}) => {

    return (
        <aside>
        <ul>
             {
                users.map(user => (
                    <li key={user.id} className='user-card'>
                        <div className='user-info'>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <small>{user.email}</small>
                        <strong><i className="fa-solid fa-cake-candles"></i>{user.birthday}</strong>
                        </div>
                        <div className='btns'>
                        <button onClick={() => deleteUser(user.id)} className="delete"><i className="fa-solid fa-trash-can"></i></button>
                        <button onClick={() => selectUser(user)} className="update"><i className="fa-solid fa-pencil"></i></button>
                        </div>
                    </li>
                ))
            }  
        </ul>
        </aside>
    );
};

export default UsersList;