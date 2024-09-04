import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useFetch from '../Hooks/useFetch';
import './smartphones.css';

const AllCategories = ({ addToCart }) => {
  const { data: products, loading, error } = useFetch('http://localhost:5000/Products');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page by product id
  };

  const handleFilter = () => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    return products?.filter((product) => {
      const price = parseFloat((product.price || '0').replace(/\s/g, ''));
      return price >= min && price <= max;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  const filteredProducts = handleFilter();

  return (
    <div className="products-container">
      <h2>All Products</h2>
      <div className="products-wrapper">
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

        <div className="products-grid">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-header" onClick={() => handleProductClick(product.id)}>
                  {product.timer && <div className="timer-badge">{product.timer}</div>}
                  {product.favorite && <div className="favorite-icon">❤️</div>}
                  {product.compare && <div className="compare-icon">🔄</div>}
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
                    <span className="old-price">
                      <del>{product.oldprice} сўм</del>
                    </span>
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
