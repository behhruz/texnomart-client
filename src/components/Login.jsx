import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Кириш</h2>
        <label htmlFor="name">Исм</label>
        <input type="text" id="name" placeholder="Исингизни киритинг" />
        <label htmlFor="surname">Фамилия</label>
        <input type="text" id="surname" placeholder="Фамилиянгизни киритинг" />
        <label htmlFor="phone">Телефон рақами</label>
        <input type="tel" id="phone" placeholder="+998" />
        <button type="submit">Кириш</button>
      </form>
    </div>
  );
};

export default Login;
