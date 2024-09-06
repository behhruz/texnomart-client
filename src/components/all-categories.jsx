import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Help from '../FooterSectonPages/Help';
import FunctionLeft from '../Function/FunctionLeft';
import { Link } from 'react-router-dom';

const Allcategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetching data from localhost
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/AllCattegory');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data); // Assuming data is an array of categories
      } catch (error) {
        setError('Ma\'lumotni yuklashda xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.'); // Error message
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div>
        <Help />
      </div>
    );
  }

  return (
    <>
      <Header />
      <FunctionLeft />
      <div className="categories-container flex flex-wrap justify-center gap-4 my-6">
        {categories.map((category, index) => (
          <Link key={index} to={`/${category.to}`}>
            <div className="category-card bg-[#f7f7f7] w-[252px] h-[480px] rounded-lg p-[10px] pt-[10px] pb-[32px] px-[20px]">
              <img src={category.img} alt={category.title} className="category-image w-[90px] h-[90px]" />
              <h2 className="category-title text-[15px] font-semibold mt-3 mb-[20px] hover:text-orange-300 transition-colors duration-300 cursor-pointer">
                {category.title}
              </h2>
              <ul className="category-descriptions list-none p-0">
                {Object.keys(category)
                  .filter(key => key.startsWith('description'))
                  .map((descKey, idx) => (
                    <Link>
                      <li className="text-[14px] mt-2 hover:text-orange-300 transition-colors duration-300 cursor-pointer" key={idx}>
                        {category[descKey]}
                      </li>
                    </Link>

                  ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Allcategories;
