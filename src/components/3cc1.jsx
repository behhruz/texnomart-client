import React from 'react';
import useFetch from '../Hooks/useFetch';
import './Card.css';

const Krups = () => {
  const filterKrupsProducts = (data) => {
    return data.filter(product => product.brand?.toLowerCase() === "krups");
  };

  const { data: products, loading, error } = useFetch('http://localhost:5000/Products', filterKrupsProducts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className="products-container">
      <h2>Krups Products</h2>
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
          <p>No Krups products available.</p>
        )}
      </div>
    </div>
  );
};

export default Krups;
