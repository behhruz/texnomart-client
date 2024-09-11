import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from '../App'; // Импортируем контекст

import "./header.css"; 

const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext); // Используем контекст

  // Обработчик изменения значения в поле поиска
  const handleInputChange = (e) => {
    setSearchValue(e.target.value); // Обновляем значение поиска
  };

  return (
    <header className="header">
      {/* Остальная часть вашего компонента */}
      <div className="main-nav">
        <div className="logo">texnomart*</div>
        <button className="catalog-btn">
          <i className="fas fa-bars"></i> Каталог
        </button>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Қидириш" 
            value={searchValue} 
            onChange={handleInputChange} 
          />
        </div>
        <div className="nav-icons">
          <Link to="/login">Кириш</Link>
          <Link to="/favorites">Севимлилар</Link>
          <Link to="/cart">Саватча</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
