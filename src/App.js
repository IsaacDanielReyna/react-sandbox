import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CyberTheme from './themes/CyberTheme';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Profile from './components/profile/Profile';
import Error404 from './components/errors/Error404/Error404';
import Navigation from './components/common/navigation/Navigation';
import PrivateRoute from './components/common/private-route/PrivateRoute';
import Container from '@material-ui/core/Container';
import Users from './components/users/Users';
import SideBar from './components/common/sidebar/SideBar';
import Box from '@mui/material/Box';

/**
 * App
 * @return {React.ReactElement}
 */
export default function App() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={CyberTheme}>
            <CssBaseline />
            <Router>
                <Navigation toggleDrawer={toggleDrawer} open={open} />
                <Box sx={{ display: 'flex' }}>
                    <SideBar isSidebarOpen={open} />
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/logout" component={Logout} />
                            <PrivateRoute
                                path="/profile/:username?"
                                component={Profile}
                                roles={['view-profile']}
                            />
                            <PrivateRoute
                                path="/users"
                                component={Users}
                                roles={['view-settings-menu']}
                            />
                            <Route component={Error404} />
                        </Switch>
                    </Container>
                </Box>
            </Router>
        </ThemeProvider>
    );
}
