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

export default function App() {
    return (
        <ThemeProvider theme={CyberTheme}>
            <CssBaseline />
            <Router>
                <Navigation />
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/logout' component={Logout} />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <Route component={Error404} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}
