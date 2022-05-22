import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& a': {
            textDecoration: 'none',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navigation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Isaac Daniel Reyna
                    </Typography>
                    <Link to='/'>
                        <Button>Home</Button>
                    </Link>
                    <Link to='/profile'>
                        <Button>Profile</Button>
                    </Link>
                    <Link to='/registration'>
                        <Button>Register</Button>
                    </Link>                    
                    <Link to='/login'>
                        <Button>Login</Button>
                    </Link>
                    <Link to='/logout'>
                        <Button>Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
