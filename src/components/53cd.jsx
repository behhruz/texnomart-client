import React, { useState, useEffect } from 'react';
import './Card.css'; // Ensure this CSS file is in the correct directory

const Oppo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/Products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); 
        if (Array.isArray(data)) {
          const filteredProducts = data.filter(product => product.brand === 'Oppo');
          console.log('Filtered Oppo products:', filteredProducts);
          setProducts(filteredProducts);
        } else {
          throw new Error('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="products-container">
      <h2>Oppo</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-card">
              {product.discount && (
                <div className="discount-badge">{product.discount}</div>
              )}
              <img
                src={product.url || '/default-image.png'}
                alt={product.title}
                className="product-image"
              />
              <button className="quick-view-btn">Quick View</button>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-cost">
                <span className="current-price">{product.price}</span>
                {product.oldprice && (
                  <span className="old-price"> {product.oldprice}</span>
                )}
              </p>
              <p className="product-cat">{product.category}</p>
              <p className="product-brand">{product.brand}</p>
              <p className="product-sell-status">
                {product.isSell ? 'In Stock' : 'Out of Stock'}
              </p>
              {product.isGift && (
                <div className="giftbox-badge">Giftbox Included</div>
              )}
              <p className="product-cost-month">
                {product.costMonth1}
                {product.costMonth2 && (
                  <span className="cost-month-2"> {product.costMonth2}</span>
                )}
              </p>
            </div>
          ))
        ) : (
          <p>No Oppo products available.</p>
        )}
      </div>
    </div>
  );
};

export default Oppo;
