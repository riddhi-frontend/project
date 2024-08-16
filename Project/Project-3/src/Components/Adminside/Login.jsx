import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('customer'); // Default role is 'customer'

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you would typically send the credentials to your backend server for authentication
        console.log(`Logging in as: ${role}`);
        console.log(`Username: ${username}, Password: ${password}`);

        // Placeholder for authentication logic
        if (username === 'admin' && password === 'adminpass') {
            // Redirect to admin dashboard
            console.log('Redirect to admin dashboard');
        } else if (username === 'customer' && password === 'customerpass') {
            // Redirect to customer page
            console.log('Redirect to customer page');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
