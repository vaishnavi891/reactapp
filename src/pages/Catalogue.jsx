import React from 'react';
const products = [
  { id: 1, name: 'Product 1', description: 'This is a great product.', price: '$10.00' },
  { id: 2, name: 'Product 2', description: 'This is another great product.', price: '$15.00' },
  { id: 3, name: 'Product 3', description: 'Yet another great product.', price: '$20.00' },
];

const Catalogue = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Catalogue Page</h2>
      <p style={styles.subtitle}>List of products available for purchase:</p>
      
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>{product.price}</p>
            <button style={styles.button}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fa',
    margin: 0,
    padding: '20px',
    maxWidth: '1200px',
    margin: '50px auto',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '30px',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  productName: {
    fontSize: '1.25rem',
    color: '#333',
    marginBottom: '10px',
  },
  productDescription: {
    color: '#555',
    marginBottom: '15px',
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

export default Catalogue;
