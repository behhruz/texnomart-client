import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Product from './components/Product';
import FooterSection from './components/FooterSection';
import Footer from './components/Footer';

// Создаем контекст для фильтрации
export const SearchContext = React.createContext();

const App = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        // Передаем контекст поиска через провайдер
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <Header />
            <Banner />
            <Product />
            <FooterSection />
            <Footer />
        </SearchContext.Provider>
    );
};

export default App;
