import React, { useState } from 'react';

const UserManagement = () => {
    const [users, setUsers] = useState([
        { id: 1, username: 'admin1' },
        { id: 2, username: 'admin2' },
    ]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };

    const removeUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const UserForm = () => {
        const [username, setUsername] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            addUser({ id: users.length + 1, username });
            setUsername('');
        };
        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                />
                <button type="submit">Add User</button>
            </form>
        );
    };

    return (
        <div>
            <h2>Manage Users</h2>
            <UserForm />
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} 
                        <button onClick={() => removeUser(user.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
