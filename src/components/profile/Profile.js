import React, { useState } from 'react';
import userService from '../../services/user-service';

export default function Profile() {
    const [user, setUser] = useState({
        "username": "",
        "first_name": "",
        "last_name": "",
        "password": ""
    });

    React.useEffect(() => {
        userService.profile('jsmith').then(response => {
            if (response.data) {
                setUser(response.data);
            }
        });
    }, []);

    return (
        <>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Paswword: {user.password}</p>
        </>
    );
}
