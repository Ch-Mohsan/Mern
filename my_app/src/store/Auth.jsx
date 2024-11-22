import { createContext, useContext, useEffect, useState } from "react";

const userEndPoint = 'http://localhost:5000/api/auth/user';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState('');

    const store_jwt = (jwt_token) => {
        setToken(jwt_token);
        localStorage.setItem('token', jwt_token);
    };

    const logout = () => {
        console.log('logout');
        setToken('');
        setUser('');
        localStorage.removeItem('token');
    };

    const isLoggedIn = !!token;

    const userAuthorization = async () => {
        try {
            const response = await fetch(userEndPoint, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData); // Set user data if authorized
            
            } else {
                
                logout(); 
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            logout();
        }
    };

    useEffect(() => {
        if (token) {
            userAuthorization(); 
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ store_jwt, logout, isLoggedIn, user, userAuthorization,token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
