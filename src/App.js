import React, { createContext, useState, useContext } from 'react';
import LoginForm from './components/LoginForm/LoginForm.js';
import './components/LoginForm/LoginForm.css';
import ModalSection from './components/ModalSection/ModalSection.js';
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function App() {
  const [isEmailValid, setIsEmailValid] = useState();
  const getIsEmailValid = (isValid) => {
    if (isValid) {
      setIsEmailValid(true);
      console.log('ISVALID???' + isValid);
    } else {
      console.log('notvalidd');
    }
  };
  return (
    <UserContext.Provider isEmailValid={isEmailValid}>
      <div className="main-login">
        <LoginForm getIsEmailValid={getIsEmailValid} />
        <ModalSection />
      </div>
    </UserContext.Provider>
  );
}
