import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"; // This will include the common styles

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const navigate = useNavigate();

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen);
  };

  const closeCatalog = () => {
    setIsCatalogOpen(false);
    navigate("/"); // Redirect to home or any other desired route
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
        <div className="catalog-overlay" onClick={closeCatalog}>
          <div className="catalog" onClick={(e) => e.stopPropagation()}>
            <div className="catalog-sidebar">
              <Link to="/smartphones" className="catalog-item active">
                Смартфоны и гаджеты
              </Link>
              <Link to="/computers" className="catalog-item">
                Компьютерная техника
              </Link>
              <Link to="/tvs" className="catalog-item">
                Телевизоры и телекарты
              </Link>
              <Link to="/climate" className="catalog-item">
                Климатическая техника
              </Link>
              <Link to="/home-tech" className="catalog-item">
                Техника для дома
              </Link>
              <Link to="/office-tech" className="catalog-item">
                Офисная техника
              </Link>
              <Link to="/kitchen-tech" className="catalog-item">
                Техника для кухни
              </Link>
              <Link to="/household" className="catalog-item">
                Посудa для дома
              </Link>
              <Link to="/auto-goods" className="catalog-item">
                Товары для авто
              </Link>
              <Link to="/audio" className="catalog-item">
                Аудиотехника и Hi-Fi
              </Link>
              <Link to="/beauty-health" className="catalog-item">
                Красота и здоровье
              </Link>
              <button className="back-btn" onClick={toggleCatalog}>
                Назад
              </button>
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
