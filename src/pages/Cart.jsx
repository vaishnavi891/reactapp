import React, { useState } from 'react';

// Sample cart data (can be replaced with dynamic data)
const cartItems = [
  { id: 1, name: 'Product 1', price: 10.00, quantity: 2 },
  { id: 2, name: 'Product 2', price: 15.00, quantity: 1 },
  { id: 3, name: 'Product 3', price: 20.00, quantity: 3 },
];

const Cart = () => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cart Page</h2>
      <p style={styles.subtitle}>Your selected items will appear here.</p>
      <div style={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <h3 style={styles.productName}>{item.name}</h3>
            <p style={styles.productDetails}>Price: ${item.price.toFixed(2)}</p>
            <p style={styles.productDetails}>Quantity: {item.quantity}</p>
            <p style={styles.productDetails}>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button style={styles.removeButton}>Remove</button>
          </div>
        ))}
      </div>

      <div style={styles.totalPriceContainer}>
        <h3 style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button style={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

// Styles for the Cart page
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fa',
    padding: '20px',
    margin: '50px auto',
    maxWidth: '1200px',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#555',
    marginBottom: '30px',
  },
  cartItems: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  productName: {
    fontSize: '1.25rem',
    color: '#333',
  },
  productDetails: {
    color: '#555',
    marginBottom: '10px',
  },
  removeButton: {
    padding: '8px 15px',
    backgroundColor: '#FF5733',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  removeButtonHover: {
    backgroundColor: '#C1351D',
  },
  totalPriceContainer: {
    marginTop: '40px',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: '20px',
  },
  checkoutButton: {
    padding: '12px 25px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  checkoutButtonHover: {
    backgroundColor: '#218838',
  },
};

export default Cart;
