import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import UserService from '../../../services/user-service';
import PrivateComponent from '../private-component/PrivateComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& a': {
            textDecoration: 'none',
        },
        position: 'relative',
        zIndex: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navigation({ toggleDrawer, open }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            {open ? <MenuOpenIcon /> : <MenuIcon />}
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {window.location.hostname}
                        </Typography>
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>
                        <PrivateComponent roles={['view-profile']}>
                            <Link to="/profile">
                                <Button>Profile</Button>
                            </Link>
                        </PrivateComponent>
                        {UserService.getToken() ? (
                            <Button onClick={() => UserService.logout()}>
                                Logout
                            </Button>
                        ) : (
                            <Button onClick={() => UserService.login()}>
                                Login
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
