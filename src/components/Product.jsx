
import React, { useState } from 'react';
import styles from './Product.module.css';

function Product({ name, price, description, emoji }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>{emoji}</div>

      <h3>{name}</h3>
      <p>{description}</p>
      <h4>₹{price}</h4>

      <button
        className={styles.favoriteBtn}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? '♥ Added to Favorites' : '♡ Add to Favorites'}
      </button>
    </div>
  );
}

export default Product;
