import api from '../utils/api';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'https://keycloak.isaacreyna.com',
    realm: 'demo',
    clientId: 'local-auth',
});

const initKeycloak = (onAuthenticatedCallback) => {
    keycloak
        .init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
                window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256',
        })
        .then(() => {
            onAuthenticatedCallback();
        })
        .catch((err) => console.error(err));
};

const login = keycloak.login;

const logout = keycloak.logout;

const getToken = () => keycloak.token;

const updateToken = (successCallback) =>
    keycloak.updateToken(5).then(successCallback).catch(login);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

const profile = (username) => {
    return api.get(`/profile/${username}/`);
};

const register = (user) => {
    return api.post(`/register/`, user);
};

const getUsers = () => {
    return api.get('list');
};

const UserService = {
    initKeycloak,
    login,
    logout,
    getToken,
    updateToken,
    getUsername,
    hasRole,
    profile,
    register,
    getUsers,
};

export default UserService;
