import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserService from '../../../services/user-service';

export default function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                roles && UserService.hasRole(roles) ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}
