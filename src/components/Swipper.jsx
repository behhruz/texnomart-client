import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cattegory = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [brands, setBrands] = useState([]);
    const [soldProducts, setSoldProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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

    useEffect(() => {
        const fetchSoldProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/isSelled');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSoldProducts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchSoldProducts();
    }, []);

    const handleBrandClick = (brandId) => {
        navigate(`${brandId}`);
    };

    const handleCategoryClick = (categoryId) => {
        navigate(`${categoryId}`);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="swiper flex space-x-4 px-5 py-7 mx-10 carousel rounded-box">
                {brands.map((v, i) => (
                    <div
                        key={i}
                        className="card flex flex-col items-center gap-5 bg-white shadow-lg carousel-item py-1 px-1 justify-center"
                        onClick={() => handleBrandClick(v.id)}
                    >
                        <div className="flex justify-center items-center gap-6 px-5">
                            <img className="flex h-[30px] mb-2 my-3 w-[80px]" src={v.brandIMG} alt={v.brand} onError={() => console.log(`Error loading image: ${v.brandIMG}`)} />
                        </div>
                    </div>
                ))}
            </div>
            <h1 className="text-black mx-10 text-[20px] font-mono">Ommabop toifalar</h1>
            <div className="swiper flex space-x-4 px-5 py-7 mx-10 carousel rounded-box">
                {categories.map((v, i) => (
                    <div
                        key={i}
                        className="card flex flex-col items-center gap-5 w-[220px] bg-white shadow-lg h-[70px] carousel-item py-1 px-1"
                        onClick={() => handleCategoryClick(v.id)}
                    >
                        <div className="flex justify-center items-center gap-6 px-5">
                            <img className="flex h-[44px] mb-2 my-3 w-[44px]" src={v.img} alt={v.title} onError={() => console.log(`Error loading image: ${v.img}`)} />
                            <p className="flex text-[15px] font-bold">{v.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cattegory;
