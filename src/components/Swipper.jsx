import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Help from '../FooterSectonPages/Help';

const Cattegory = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        // Kategoriyalarni olish
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/Cattegory/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        // Brendlarni olish
        const fetchBrands = async () => {
            try {
                const response = await fetch('http://localhost:5000/Brands/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBrands(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchBrands();
    }, []);

    if (error) {
        return <div><Help /></div>;
    }

    return (
        <>
            <div className="swiper flex space-x-4 px-5 py-7 mx-10 carousel rounded-box">
                {brands.map((v, i) => (
                    <Link to={`/${v.to.replace(/\s+/g, '-').toLowerCase()}`} key={i}>
                        <div className="card flex flex-col items-center justify-center w-[180px] bg-white shadow-lg h-[50px] carousel-item py-3 px-3">
                            <div className='flex justify-center items-center w-full h-full'>
                                <img className="h-[50px] w-auto max-w-[80px] object-contain" src={v.brandIMG} alt={v.brand} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <h1 className='text-black mx-10 text-[20px] font-mono'>Ommabop toifalar</h1>
            <div className="swiper flex space-x-4 px-5 py-7 mx-10 carousel rounded-box">
                {categories.map((v, i) => (
                    <Link to={`/${v.to.replace(/\s+/g, '-').toLowerCase()}`} key={i}>
                        <div className="card flex flex-col items-center gap-5 w-[220px] bg-white shadow-lg h-[70px] carousel-item py-1 px-1">
                            <div className='flex justify-center items-center gap-6 px-5'>
                                <img className="flex h-[44px] mb-2 my-3 w-[44px]" src={v.img} alt={v.title} />
                                <p className="flex text-[15px] font-bold">{v.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Cattegory;
