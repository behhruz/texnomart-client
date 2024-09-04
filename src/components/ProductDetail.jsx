// ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './smartphones.css'; // Use the same CSS file if needed

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/Products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.url || '/default-image.png'} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Available:</strong> {product.isSell ? 'In Stock' : 'Out of Stock'}</p>
      {product.isGift && <p><strong>Giftbox:</strong> Yes</p>}
      <p><strong>Cost per Month:</strong> {product.costMonth1} {product.costMonth2 ? `+ ${product.costMonth2}` : ''}</p>
    </div>
  );
};

export default ProductDetails;
