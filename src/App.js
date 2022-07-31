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
import Register from './components/register/Register';
import SideBar from './components/common/sidebar/SideBar';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';

export default function App() {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <ThemeProvider theme={CyberTheme}>
            <CssBaseline />
            <Router>
                <Navigation toggleDrawer={toggleDrawer} open={open}/>
                <Box sx={{ display: 'flex' }}>
                    <SideBar isOpen={open}/>
                    <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                        </Typography>
                    </Box>
                </Box>
                <Container>
                    <Switch>
                        <PrivateRoute exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/logout' component={Logout} />
                        <Route exact path='/registration' component={Register} />
                        <PrivateRoute path='/profile/:username?' component={Profile} />
                        <Route component={Error404} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}
