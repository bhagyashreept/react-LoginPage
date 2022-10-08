import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [emailId, setEmailID] = useState('');

  return (
    <div className="main-lgnform">
      <h3>Login</h3>
      <div className="email-lgn">
        <input type="email" placeHolder="Email" autocomplete="nope" />
      </div>
      <div className="pass-lgn">
        <input type="text" placeHolder="Password" />
      </div>
      <div className="lgn-btn">
        <button>Login</button>
      </div>
    </div>
  );
};
export default LoginForm;
