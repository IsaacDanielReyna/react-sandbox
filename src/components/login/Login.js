import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Collapse, makeStyles, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        paddingTop: '80px',
        width: '300px',
        margin: '0 auto',
    },
    form: {
        '& .MuiTextField-root, & .MuiButton-root': {
            margin: theme.spacing(1),
        },
    },
    alertContainer: {
        width: '100%',
        margin: theme.spacing(1),
    },
}));

export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hasInvalidUsername, setHasInvalidUsername] = useState(false);
    const [hasInvalidPassword, setHasInvalidPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [severity, setSeverity] = useState('error');
    let history = useHistory();

    function validateLogin(event) {
        event.preventDefault();
        let messages = [];
        let validUsername = false;
        let validPassword = false;

        // Validate username
        if (username === '') {
            messages.push('Username must not be empty');
        } else {
            validUsername = true;
        }

        // Validate password
        if (password === '') {
            messages.push('Password must not be empty');
        } else {
            validPassword = true;
        }

        // Toggle a red outline on the inputbox if the input is invalid
        setHasInvalidUsername(!validUsername);
        setHasInvalidPassword(!validPassword);

        // Authenticate
        if (validUsername && validPassword) {
            if (username === 'admin' && password === 'password') {
                localStorage.setItem('token', 'S0M3T0K3N');
                setSeverity('success');
                messages.push('Login Successful');
                setTimeout(() => history.push('/'), 1250);
            } else {
                messages.push('Wrong username or password');
            }
        }
        setAlertMessage(
            messages.map((message) => <div key={message}>{message}</div>)
        );
    }

    return (
        <>
            <div className={classes.formContainer}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        id="username"
                        label="Username"
                        variant="filled"
                        required
                        fullWidth
                        error={hasInvalidUsername}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="filled"
                        type="password"
                        required
                        fullWidth
                        error={hasInvalidPassword}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button
                        disabled={username === '' || password === ''}
                        variant="contained"
                        size="large"
                        color="primary"
                        fullWidth
                        type="submit"
                        onClick={validateLogin}
                    >
                        Login
                    </Button>
                    <div className={classes.alertContainer}>
                        <Collapse in={alertMessage.length > 0}>
                            <Alert severity={severity}>{alertMessage}</Alert>
                        </Collapse>
                    </div>
                    <Button
                        variant="outlined"
                        fullWidth
                        component={Link}
                        to="/registration"
                    >
                        Register?
                    </Button>
                </form>
            </div>
        </>
    );
}
