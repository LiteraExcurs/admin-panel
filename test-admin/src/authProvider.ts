import { AuthProvider } from "react-admin";
import { API_URL } from "./app-config";

export const authProvider: AuthProvider = {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        const req = new Request(
            API_URL + '/auth/login',
            {
                method: 'POST',
                body: JSON.stringify({ login: username, password }),
                headers: { 
                    'Content-Type': 'application/json' 
                }
            }
        )
        return fetch(req).then((res) => {
            if(res.status < 200 || res.status >= 300) {
                throw new Error(res.statusText)
            }
            return res.json();
        }).then((auth) => {
            localStorage.setItem('login', JSON.stringify(auth.access_token))
        }).catch(() => {
            throw new Error('Произошла ошибка авторизации')
        })
        //дефолтный код для отладки без авторизации на беке, принимает любой логин:
        // localStorage.setItem("login", login);
        // accept all username/password combinations
        //return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('login');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('login');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('login')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};