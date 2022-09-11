import React from 'react';
import { Redirect } from 'react-router-dom';
import UserService from '../../services/user-service';
export default function Logout() {
    if (UserService.getToken()) {
        UserService.logout();
    }
    return <Redirect to="/" />;
}
