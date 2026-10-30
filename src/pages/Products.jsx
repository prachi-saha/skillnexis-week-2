
import React from 'react';
import Product from '../components/Product';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 1499,
      description: 'Enjoy clear sound and comfortable listening.',
      emoji: '🎧'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 2199,
      description: 'Keep track of your daily activities.',
      emoji: '⌚'
    },
    {
      id: 3,
      name: 'Travel Backpack',
      price: 999,
      description: 'A stylish bag for everyday use.',
      emoji: '🎒'
    }
  ];

  return (
    <div className="products-page">
      <h1>Our Products🥰</h1>
      <p>Explore our handpicked collection❤️</p>

      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            emoji={product.emoji}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
