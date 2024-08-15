import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-container">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div className="input-container">
            <input type="text" required />
            <label>Surname</label>
          </div>
          <div className="input-container">
            <input type="tel" required />
            <label>Phone Number</label>
          </div>
          <button type="submit" className="login-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
