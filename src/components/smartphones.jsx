import React, { useState, useEffect } from 'react';
import './smartphones.css';

const Smartphones = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = 'Smartphones'; // Kategoriya to'g'ri yozilganiga ishonch hosil qiling

  useEffect(() => {
    fetch(`http://localhost:5000/Products/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === category // Bu yerda `category` to'g'ri yozilgan bo'lishi kerak
        );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
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
                src={product.url || '/default-image.png'}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-cost">
                <span className="current-price">{product.price}</span>
                {product.oldprice && (
                  <span className="old-price"> {product.oldprice}</span>
                )}
              </p>
              <p className="product-cost-month">
                {product.costMonth1}
              </p>
              <p className="product-saving">
                Выгода {product.saving} сум или в рассрочку
              </p>
            </div>
          ))
        ) : (
          <p>No smartphones available.</p>
        )}
      </div>
    </div>
  );
};

export default Smartphones;
