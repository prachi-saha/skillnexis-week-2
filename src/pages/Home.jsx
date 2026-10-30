
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to the Mini Store!</h1>
        <p>
          Discover useful products & organize your
          everyday tasks in one place.
        </p>
        <Link to="/products" className="home-btn">
          Explore Products🔥
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>Our Products🥰</h2>
          <p>Explore our collection of various useful products.</p>
          <Link to="/products">View Products ➡️</Link>
        </div>

        <div className="feature-card">
          <h2>My Tasks</h2>
          <p>Keep track of your daily activities.</p>
          <Link to="/tasks">Manage Tasks➡️ </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
