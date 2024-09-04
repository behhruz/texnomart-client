// TVs.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './smartphones.css'; // Use the same CSS file if needed

const TVs = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const category = 'TVs'; // Desired category name

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
        const filteredProducts = data.filter(product => product.cattegory === "TV");
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

  const handleProductClick = (id) => {
    // Navigate to the product details page by product id
    navigate(`/product/${id}`);
  };

  return (
    <div className="products-container">
      <h2>{category}</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-card" onClick={() => handleProductClick(product.id)}>
              {product.discount && (
                <div className="discount-badge">{product.discount}</div>
              )}
              <img
                src={product.url || '/default-image.png'} // Default image fallback
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-cost">
                <span>{product.price}</span>
                {product.oldCost && (
                  <span className="old-price"> {product.oldCost}</span>
                )}
              </p>
              <p className="product-cat">{product.cattegory}</p>
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
          <p>No TVs available.</p>
        )}
      </div>
    </div>
  );
};

export default TVs;
