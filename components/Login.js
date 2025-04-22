import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful for ' + formData.email);
    // Here you can add actual login logic
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
