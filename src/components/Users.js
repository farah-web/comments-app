import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Users = () => {
    const [users, setUser] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState(null)

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        const data = axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const selectUser = (id) => {
        let user = users[id - 1];
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone);
        setId(user.id)
    }

    const updateUser = () => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            name: name,
            email: email,
            phone: phone,
        })
            .then((response) => {
                users.map((x) => {
                    if (x.id === response.data.id) {
                        x.name = response.data.name
                        x.email = response.data.email
                        x.phone = response.data.phone
                    }
                    setUser([...users]);
                    setName('')
                    setPhone('')
                    setEmail('')

                })
            }).catch((error) => error.message)
    }

    const deleteUser = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const newUsers = users.filter((x) => x.id !== response.data.id)
                setUser(newUsers);
            })
            .catch((error) => error.message)
    }

    return (
        <div className='users'>
            <h1>Update User Data With API </h1>
            <div className="users__data">

                <div className="users__display">
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Operations</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((users, i) =>

                                    <tr key={i}>
                                        <td>{users.id}</td>
                                        <td>{users.name}</td>
                                        <td>{users.email}</td>
                                        <td>{users.phone}</td>
                                        <td id='operations'><button className='btn td-btn' onClick={() => deleteUser(users.id)}>Delete</button> &nbsp; &nbsp;
                                            <button className='btn td-btn' onClick={() => selectUser(users.id)}>Update</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className='users__update'>
                    <h2>Fetch User Record</h2>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /><br />
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
                    <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} /> <br /><br />
                    <button className='btn' onClick={updateUser} >Update User</button>
                </div>
            </div>
        </div>
    )
}

export default Users
