import React, { useState, useEffect } from 'react';
import './smartphones.css'; // Import the CSS file

const Smartphones = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'Telefon'; // Desired category name

  useEffect(() => {
    fetch(`http://localhost:5000/Products`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Filter products based on the category
        const filteredProducts = data.filter(product => product.cattegory === "Telefon");
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="products-container">
      <h2>{category}</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card">
              {product.discount && (
                <div className="discount-badge">{product.discount}</div>
              )}
              <img
                src={product.url || '/default-image.png'} // Default image fallback
                alt={product.title}
                className="product-image"
              />
              <button className="quick-view-btn">Быстрый просмотр</button>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-cost">
                <span className="current-price">{product.price}</span>
                {product.oldCost && (
                  <span className="old-price"> {product.oldCost}</span>
                )}
              </p>
              <p className="product-cat">{product.category}</p>
              <p className="product-brand">{product.brand}</p>
              <p className="product-sell-status">
                {product.isSell ? 'In Stock' : 'Out of Stock'}
              </p>
              {product.isGift && (
                <div className="giftbox-badge">Giftbox в подарок</div>
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
          <p>No Smartphones available.</p>
        )}
      </div>
    </div>
  );
};

export default Smartphones;
