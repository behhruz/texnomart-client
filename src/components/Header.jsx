import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
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
        <button className="catalog-btn">
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
        <Link to="/all-catigories">БАРЧА КАТЕГОРИЯЛАР</Link>
      </div>
    </header>
  );
};

export default Header;
