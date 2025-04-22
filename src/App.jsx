import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Catalogue from './pages/Catalogue'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'

function AppRouter() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={
          <>
            <div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/AppRouter.jsx</code> and save to test HMR
                </p>
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default AppRouter
