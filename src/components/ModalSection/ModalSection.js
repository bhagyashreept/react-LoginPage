import React, { useContext } from 'react';
import App from './components/src/App.js';

const ModalSection = () => {
  const user = useContext(UserContext);
  return;
  <UserContext.Consumer>
    <h1>{user}</h1>
  </UserContext.Consumer>;
};

export default ModalSection;
