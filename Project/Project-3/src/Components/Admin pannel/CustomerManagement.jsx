import React, { useState } from 'react';

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
        { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    ]);

    return (
        <div>
            <h2>Manage Customers</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerManagement