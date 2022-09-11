import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserService from './services/user-service';

UserService.initKeycloak(() =>
    ReactDOM.render(<App />, document.getElementById('root'))
);
