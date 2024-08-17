import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"; // This will include the common styles

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="location">
          <i className="fas fa-map-marker-alt"></i> Тошкент
        </div>
        <div className="top-links">
          <Link to="/stores">Бизнинг дўконларимиз</Link>
          <Link to="/legal">Юридик шахслар учун</Link>
          <Link to="/payment-methods">Тўлов усуллари</Link>
        </div>
        <div className="contact">
          <span>Алоқа маркази :</span>
          <a href="tel:+998712099944">+99871 209 99 44</a>
          <div className="language-dropdown">
            <i className="fas fa-globe"></i> Ўз
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="logo">texnomart*</div>
        <button className="catalog-btn" onClick={toggleCatalog}>
          <i className="fas fa-bars"></i> Каталог
        </button>
        <div className="search-bar">
          <input type="text" placeholder="Қидириш" />
        </div>
        <div className="nav-icons">
          <Link to="/login">Кириш</Link>
          <Link to="/favorites">Севимлилар</Link>
          <Link to="/cart">Саватча</Link>
        </div>
      </div>
      <div className="bottom-nav">
        <Link to="/promotions">АКЦИЯЛАР</Link>
        <Link to="/installments">Муддатли тўлов 0•0•12</Link>
        <Link to="/conditioners">ҲАВО СОВУТГИЧЛАР</Link>
        <Link to="/smartphones">СМАРТФОНЛАР</Link>
        <Link to="/refrigerators">МУЗЛАТГИЧЛАР</Link>
        <Link to="/vacuum-cleaners">ЧАНГЮТГИЧЛАР</Link>
        <Link to="/all-categories">БАРЧА КАТЕГОРИЯЛАР</Link>
      </div>
      {isCatalogOpen && (
        <div className="catalog-overlay">
          <div className="catalog">
            <div className="catalog-sidebar">
              <div className="catalog-item active">
                <span>Смартфоны и гаджеты</span>
              </div>
              <div className="catalog-item">Компьютерная техника</div>
              <div className="catalog-item">Телевизоры и телекарты</div>
              <div className="catalog-item">Климатическая техника</div>
              <div className="catalog-item">Техника для дома</div>
              <div className="catalog-item">Офисная техника</div>
              <div className="catalog-item">Техника для кухни</div>
              <div className="catalog-item">Посудa для дома</div>
              <div className="catalog-item">Товары для авто</div>
              <div className="catalog-item">Аудиотехника и Hi-Fi</div>
              <div className="catalog-item">Красота и здоровье</div>
              
              {}
              <button className="back-btn" onClick={toggleCatalog}>Назад</button>
            </div>
            <div className="catalog-content">
              <div>
                <h3>СМАРТФОНЫ</h3>
                <ul>
                  <li>Samsung</li>
                  <li>Xiaomi</li>
                  <li>Vivo</li>
                  <li>iPhone</li>
                  <li>HONOR</li>
                  <li>Huawei</li>
                  <li>Infinix</li>
                  <li>OPPO</li>
                  <li>Nothing Phone</li>
                </ul>
              </div>
              <div>
                <h3>ГАДЖЕТЫ</h3>
                <ul>
                  <li>Смарт часы</li>
                  <li>Умные напольные весы</li>
                </ul>
              </div>
              <div>
                <h3>АКСЕССУАРЫ ДЛЯ ТЕЛЕФОНОВ</h3>
                <ul>
                  <li>Внешние аккумуляторы</li>
                  <li>Держатели для смартфонов</li>
                  <li>Зарядные устройства</li>
                  <li>Игровые аксессуары</li>
                  <li>USB кабель для телефона</li>
                  <li>Карты памяти</li>
                  <li>Моноподы для селфи</li>
                  <li>Наушники и гарнитуры</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
