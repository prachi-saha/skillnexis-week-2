
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Tasks from './pages/Tasks';

import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>MiniHub</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/tasks">My Tasks</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </main>

      <footer>
        <p>MiniHub | Stay Organized, Shop Smart.</p>
      </footer>
    </div>
  );
}

export default App;
