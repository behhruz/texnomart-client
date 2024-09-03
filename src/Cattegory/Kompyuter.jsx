import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Kompyuter = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Productsni olish
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/Products/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched Products:", data); // Ma'lumotlarni tekshirish uchun
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  // Xiaomi mahsulotlarini filtrlash
  const xiaomiProducts = products.filter(product => product.cattegory === 'Noutbuk');
  console.log("Filtered Xiaomi Products:", xiaomiProducts); // Filtrlangan mahsulotlarni konsolda tekshirish

  return (
    <>
      <Header />
      <div className="flex gap-6 flex-wrap justify-center items-center my-10">
        {error && <p>{error}</p>}
        {xiaomiProducts.length > 0 ? (
          xiaomiProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 w-[20%] hover:shadow-lg">
              <div className="relative">
                <img className="w-full h-[250px] object-contain" src={product.url} alt={product.title} />
              </div>
              <div className="mt-4">
                <p className="text-gray-600 font-semibold text-[17px]">{product.title}</p>
              </div>
              <div className="flex flex-col">
                <div className='w-[100%] bg-slate-200 rounded-2xl flex justify-center items-center my-2'>
                  <p className="text-green-600 font-bold text-[12px]">{product.costMonth1}</p>
                </div>
                <div className='w-[100%] bg-slate-200 rounded-2xl flex justify-center items-center'>
                  <p className="text-green-600 font-bold text-[13px]">{product.costMonth2}</p>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <del className="text-gray-400">{product.oldprice}</del>
                <p className="text-xl font-bold text-gray-900">{product.price}</p>
              </div>
              <p className="text-sm text-green-600">{/* Add discount information here */}</p>
            </div>
          ))
        ) : (
          <p>Kompyuter mahsulotlari topilmadi.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Kompyuter;
