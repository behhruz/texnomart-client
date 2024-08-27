import React, { useContext } from 'react';
import { DataContext } from '../context/Providers';

const Footer = () => {

  return (

    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-16">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Возник вопрос? Звоните</h3>
          <p className="text-2xl">+998 71 209 99 44</p>
          <div className="flex space-x-4">
            <a href="#" className="block">
              <img src="src/assets/play.png" alt="Google Play" className="h-10" />
            </a>
            <a href="#" className="block">
              <img src="src/assets/appstore.png" alt="App Store" className="h-10" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Компания</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Юридическим лицам</a>
            </li>
            <li>
              <a href="#" className="hover:underline">О Техномарт</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Новости и блоги</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Проверка IMEI</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Информация</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Бесплатная доставка</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Бонусная система</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Работа в Техномарт</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Личный кабинет</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Контактные номера</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Помощь покупателю</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Возврат товара</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Гарантия на товары</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Часто задаваемые вопросы</a>
            </li>
          </ul>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:underline">Узнать свой бонус</a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-8" />

      <div className="container mx-auto text-center text-sm px-4 space-y-2">
        <a href="#" className="text-blue-400 hover:underline block">Адреса магазинов Тошкент</a>
        <p>2016-2024 ©technomart.uz. Все права защищены. Указанная стоимость товаров и условия их приобретения действительны по состоянию на текущую дату.</p>
      </div>
    </footer>
  );
};

export default Footer;
