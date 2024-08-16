import React, { useState } from 'react';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    // Placeholder form for adding products
    const ProductForm = () => {
        const [name, setName] = useState('');
        const handleSubmit = (e) => {
            e.preventDefault();
            addProduct({ id: products.length + 1, name });
            setName('');
        };
        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Product Name" 
                    required 
                />
                <button type="submit">Add Product</button>
            </form>
        );
    };

    return (
        <div>
            <h2>Manage Products</h2>
            <ProductForm />
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} 
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement