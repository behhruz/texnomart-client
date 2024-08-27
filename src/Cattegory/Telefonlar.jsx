import React, { useState, useEffect } from 'react';

const Telefonlar = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/Products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mx-10 my-5'>
      {product.map((v, i) => (
        <div key={i} className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <div className="relative">
            <img src={v.img1} alt={v.title1} className="w-full h-56 object-contain mb-4" />
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs rounded px-2 py-1">
              0•0•12
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-2">{v.title1}</h2>
          <p className="text-gray-500 mb-1">{v.costMonth1}</p>
          <p className="text-gray-500 mb-1">{v.costMonth2}</p>
          <p className="text-red-600 line-through mb-1">{v.oldCost}</p>
          <p className="text-green-600 text-xl font-bold">{v.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default Telefonlar;
