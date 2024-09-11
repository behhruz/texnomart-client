import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import './productDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`http://localhost:5000/Products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product data: {error}</p>;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-container">
      <h1>{product.title}</h1>
      <img src={product.url || '/default-image.png'} alt={product.title} className="product-image" />
      <p>Price: {product.price} сўм</p>
      <p>Description: {product.description || 'No description available'}</p>
      <p>Monthly Payment: от {product.monthlyPayment} сўм /24 мес.</p>
      <p>Savings: Выгода {product.savingAmount} сўм</p>
      {product.oldprice && <p>Old Price: <del>{product.oldprice} сўм</del></p>}
    </div>
  );
};

export default ProductDetail;
