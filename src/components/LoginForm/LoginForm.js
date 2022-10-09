import React, { useState } from 'react';
import './LoginForm.css';
import ModalSection from './ModalSection/Modalsection';

const LoginForm = (props) => {
  const [emailId, setEmailID] = useState('');
  const [pass, setPass] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const onEmailChangeHandler = (e) => {
    setEmailID(e.target.value);
    console.log(emailId);
  };

  const onPassChangeHandler = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  const lgnButtonHandler = () => {
    if (emailId.length === 0) {
      setIsEmailValid(false);
      console.log(emailId);
      console.log(isEmailValid);
      console.log(emailId.trim.length);
      props.getIsEmailValid(isEmailValid);
    } else {
      setIsEmailValid(true);
      console.log(isEmailValid);
    }
  };
  return (
    <div className="main-lgnform">
      <h1>Login</h1>
      <div>
        <input
          className={`email-lgn ${!isEmailValid ? `notValid` : ''}`}
          type="email"
          placeHolder="Email"
          autocomplete="nope"
          value={emailId}
          onChange={onEmailChangeHandler}
        />
      </div>
      <div className="pass-lgn">
        <input
          type="text"
          placeHolder="Password"
          value={pass}
          onChange={onPassChangeHandler}
        />
      </div>
      <div className="lgn-btn">
        <button onClick={lgnButtonHandler}>Login</button>
      </div>
    </div>
  );
};
export default LoginForm;
