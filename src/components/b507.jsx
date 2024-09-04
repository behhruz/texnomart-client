import React, { useState, useEffect } from 'react';
import './Card.css';

const B507 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'Samsung'; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/Products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        if (Array.isArray(data)) {
          const filteredProducts = data.filter(product => product.brand === category);
          setProducts(filteredProducts);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="products-container">
      <h2>{category}</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id || product.title} className="product-card">
              {product.discount && (
                <div className="discount-badge">{product.discount}</div>
              )}
              <img
                src={product.url || '/default-image.png'}
                alt={product.title || 'No Title'}
                className="product-image"
              />
              <button className="quick-view-btn">Быстрый просмотр</button>
              <h3 className="product-title">{product.title || 'No Title'}</h3>
              <div className="price-container">
                <span className="current-price">{product.price || 'N/A'}</span>
                {product.oldprice && (
                  <span className="old-price"> {product.oldprice}</span>
                )}
              </div>
              <p className="product-cat">{product.category || 'No Category'}</p>
              <p className="product-brand">{product.brand || 'No Brand'}</p>
              <p className="product-sell-status">
                {product.isSell ? 'In Stock' : 'Out of Stock'}
              </p>
              {product.isGift && (
                <div className="giftbox-badge">Giftbox в подарок</div>
              )}
              <p className="product-cost-month">
                {product.costMonth1 || 'N/A'}
                {product.costMonth2 && (
                  <span className="cost-month-2"> {product.costMonth2}</span>
                )}
              </p>
            </div>
          ))
        ) : (
          <p>No Smartphones available.</p>
        )}
      </div>
    </div>
  );
};

export default B507;