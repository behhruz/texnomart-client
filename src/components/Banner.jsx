import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 5; // Количество слайдов
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    // Функция для переключения слайдов
    const goToSlide = (slide) => {
        if (slide < 1) slide = totalSlides;
        if (slide > totalSlides) slide = 1;
        setCurrentSlide(slide);
    };

 

    // Автоматическое переключение слайдов
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide % totalSlides) + 1);
        }, 4000); // Переключение каждые 5 секунд

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);

    return (
        <>
            <div className="carousel relative">
                <div className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://mini-io-api.texnomart.uz/newcontent/slider/129/JwgoKenUjB6HLrRcN41WLF0hvgAy7u21PiJ1hrVn.webp"
                        className="w-full transition-transform duration-500 transform" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">❮</button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://mini-io-api.texnomart.uz/newcontent/slider/126/SJ48qknCQ7bEJjjgQyqaiQQnkc5HNnv9wnnBFtTE.webp"
                        className="w-full transition-transform duration-500 transform" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">❮</button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://mini-io-api.texnomart.uz/newcontent/slider/125/ncE5osdXToFGD4dOnMond9irsrajCHeI1VtLoy5I.webp"
                        className="w-full transition-transform duration-500 transform" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">❮</button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://mini-io-api.texnomart.uz/newcontent/slider/127/oghM5W5zMO9VcROrfF6qgYB0KME6Q7r1Pmxo9zzL.webp"
                        className="w-full transition-transform duration-500 transform" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">❮</button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">❯</button>
                    </div>
                </div>
                <div className={`carousel-item relative w-full ${currentSlide === 5 ? 'block' : 'hidden'}`}>
                    <img
                        src="https://mini-io-api.texnomart.uz/newcontent/slider/111/UH41dN5xd1kutlHW5SkSM9zV2pM8MmbybfsysDQT.webp"
                        className="w-full transition-transform duration-500 transform" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={() => goToSlide(currentSlide - 1)} className="btn btn-circle">❮</button>
                        <button onClick={() => goToSlide(currentSlide + 1)} className="btn btn-circle">❯</button>
                    </div>
                </div>
                {/* Индикаторы */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[...Array(totalSlides)].map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-1 rounded-full ${currentSlide === index + 1 ? 'bg-black' : 'bg-white'}`}
                            onClick={() => goToSlide(index + 1)}
                        ></button>
                    ))}
                </div>
            </div>  </>
    );
};

export default Banner;
