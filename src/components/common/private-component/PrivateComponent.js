import React from 'react';
import UserService from '../../../services/user-service';

export default function PrivateComponent({ roles, children }) {
    return roles && UserService.hasRole(roles) ? children : <></>;
}
