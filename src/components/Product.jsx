import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../App'; // Импортируем контекст

const Product = () => {
    const [products, setProducts] = useState([]);
    const [clickCounts, setClickCounts] = useState({});
    const [error, setError] = useState(null);
    const { searchValue } = useContext(SearchContext); // Получаем значение поиска из контекста

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/Products/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);

                const initialClickCounts = {};
                data.forEach(product => {
                    initialClickCounts[product.id] = 0;
                });
                setClickCounts(initialClickCounts);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    // Фильтрация продуктов на основе значения поиска
    const filteredProducts = products.filter(product => 
        product.title && searchValue 
            ? product.title.toLowerCase().includes(searchValue.toLowerCase()) 
            : true
    );

    const handleButtonClick = (product) => {
        setClickCounts(prevCounts => ({
            ...prevCounts,
            [product.id]: prevCounts[product.id] + 1
        }));

        // addToFavorites(product); // Добавление продукта в избранное (если нужно)
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1 className='text-black'>Ommabop toifalar</h1>
            <div className="swiper flex space-x-4 px-5 py-7 carousel rounded-box flex-wrap gap-y-10 gap-10 justify-center items-center">
                {
                    filteredProducts.map((product, i) => (
                        <div key={i} className="card flex w-[303px] flex-col items-center gap-5 h-full rounded-[25px] carousel-item py-1 px-1">
                            <div className='flex flex-col justify-center items-center gap-6 px-5 bg-slate-100 w-full h-full rounded-[25px]'>
                                <img className="flex h-[265px] mb-2 my-3" src={product.url} alt={product.title} />
                                <h1>{product.brand}</h1>
                            </div>
                            <div className=''>
                                <button
                                    className='bg-yellow-400 rounded-[25px] w-[150px] btn-ens-action data-rel="3a621038674"'
                                    onClick={() => handleButtonClick(product)}
                                >
                                    <p>+ Savatga qoshis</p>
                                </button>
                                <p className="flex text-sm">{product.title}</p>
                                <p>{product.costMonth2}</p>
                                <h1>{product.cost}</h1>
                                <p>Savvat: {clickCounts[product.id]}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Product;
