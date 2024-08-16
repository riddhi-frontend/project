import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductManagement from './ProductManagement';
import CustomerManagement from './CustomerManagement';
import UserManagement from './UserManagement';

const Dashboard = () => {
    return (
        <Router>
            <div>
                <h1>Admin Dashboard</h1>
                <nav>
                    <Link to="/products">Manage Products</Link>
                    <Link to="/customers">Manage Customers</Link>
                    <Link to="/users">Manage Users</Link>
                </nav>
                <Routes>
                    <Route path="/products" element={<ProductManagement />} />
                    <Route path="/customers" element={<CustomerManagement />} />
                    <Route path="/users" element={<UserManagement />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Dashboard;