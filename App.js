import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Catalog</Link>
        <Link to="/registration" style={{ marginRight: '10px' }}>Register</Link>
        <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
