import React, { useState } from 'react';
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);

    React.useEffect(() => {
        axios.get('/list/').then(response => {
            if (response.data) {
                setUsers(response.data);
            }
        });
    }, []);

    return (
        <>
            <h1>Home</h1>
            {users.map((user, index) =>
                <div key={index}>
                    <p>Username: {user.username}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Paswword: {user.password}</p>
                    <hr/>
                </div>
            )}
        </>
    );
}
