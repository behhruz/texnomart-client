import React, { useState, useEffect } from 'react';
import './smartphones.css'; // Ensure the CSS file is imported correctly

const AllCategories = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/Products') // Fetch products from your backend
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Unexpected data format');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleFilter = () => {
    return products.filter((product) => {
      // Safely parse and default values
      const price = parseFloat((product.price || '0').replace(/\s/g, ''));
      const min = parseFloat(minPrice || '0');
      const max = parseFloat(maxPrice || Infinity);

      return (
        price >= min &&
        price <= max
      );
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="products-container">
      <h2>All Products</h2>
      <div className='products-wrapper'>
        {/* Filter Inputs */}
        <div className="filter-container">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="filter-input"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="filter-input"
          />
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {handleFilter().length > 0 ? (
            handleFilter().map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-card-header">
                  {product.timer && (
                    <div className="timer-badge">{product.timer}</div>
                  )}
                  {product.favorite && (
                    <div className="favorite-icon">❤️</div>
                  )}
                  {product.compare && (
                    <div className="compare-icon">🔄</div>
                  )}
                </div>
                <img
                  src={product.url || '/default-image.png'}
                  alt={product.title || 'Product Image'}
                  className="product-image"
                />
                <button className="quick-view-btn">Быстрый просмотр</button>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-monthly-payment">
                  от {product.monthlyPayment} сўм /24 мес.
                </p>
                <p className="product-discount">
                  Выгода {product.savingAmount} сўм или в рассрочку
                </p>
                <p className="product-cost">
                  <span className="current-price">{product.price} сўм</span>
                  {product.oldprice && (
                    <span className="old-price"><del>{product.oldprice} сўм</del></span>
                  )}
                </p>
                <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                  Добавить в корзину
                </button>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
