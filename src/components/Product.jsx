import React, { useState, useEffect } from 'react';

const Product = () => {
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
        <>
            <h1 className='text-black'>Ommabop toifalar</h1>
            <div className="swiper flex space-x-4 px-5 py-7 carousel rounded-box">
                {
                    product.map((v, i) => (
                        <div key={i} className="card flex w-[303px] flex-col items-center gap-5 h-full rounded-[25px] carousel-item py-1 px-1">
                            <div className='flex flex-col justify-center items-center gap-6 px-5 bg-slate-100 w-full h-full rounded-[25px]'>
                                <img className="flex h-[265px] mb-2 my-3" src={v.url} alt={v.title} />
                                <h1>{v.brand}</h1>
                            </div>
                            <div>
                                <p></p>
                                <p className="flex text-sm">{v.title}</p>
                                <del className='text-gray-400 w-[100px]'>3 619 000</del>
                                <p>{v.costMonth2}</p>
                                <h1>{v.cost}</h1>
                            
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Product;
