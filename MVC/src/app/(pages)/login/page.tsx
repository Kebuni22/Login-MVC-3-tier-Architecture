// loginpage.js
"use client"; // Marks the component as a Client Component
import React from 'react';
import './styles.css'; // Import the CSS file
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2>Welcome</h2>
        </div>
        <button className="login-button" onClick={() => signIn('google')}>
          Google Login
        </button> 
        <button
          className="login-button"
          onClick={() => {
            const options = {
              email: 'yasirus@gmail.com',
              password: '123',
            };
            signIn('credentials', options);
          }}
        >
          Credentials Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
