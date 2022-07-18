import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser, userSelected, updateUser, deselectUser}) => {

const[firstName,setFirstName] = useState("");
const[lastName,setLastName] = useState("");
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[birthday,setBirthday] = useState("");


const submit = e =>{
    e.preventDefault();
    const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email, 
        password: password, 
        birthday: birthday
    }
    if(userSelected !== null){
        newUser.id = userSelected.id
        updateUser(newUser);
        deselectUser();
    }else{
        addUser(newUser);
        reset()
    }
}

const reset = () =>{
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setBirthday('');
}

    useEffect(() => {
        if(userSelected !== null){
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        }else{
            reset();
        }
    },[userSelected])
    
    const cancelApear = () =>{
        if(userSelected !== null){
            return (
                <>
                    <button type='button' onClick={deselectUser} className="cancel">cancel</button>
                </>
            );
        }
    }

    return (
        <main>
        <form onSubmit={submit}>
            <h2>Manage Users</h2>

            <div className='user-name'>
                <label htmlFor="firstName"><i className="fa-solid fa-user"></i></label>
                <input
                    type="text"
                    id='firstName'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    placeholder='First name'
                    required />

                <label htmlFor="lastName"></label>
                <input
                    type="text"
                    id='lastName'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    placeholder='Last name' 
                    required/>
            </div>

            <div>
                <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                <input
                    type="email"
                    id='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder='email'
                    className='input-long' 
                    required/>
            </div>

            <div>
                <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                <input
                    type="password"
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder='password'
                    className='input-long'
                    required />
            </div>

            <div>
                <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                <input
                    type="date"
                    id='birthday' 
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                    className='input-long'
                    required/>
            </div>

            <button type='submit'>{userSelected !== null ? 'save' : 'add' }</button>
            {cancelApear()}
            
        </form>
        </main>
    );
};

export default UsersForm;