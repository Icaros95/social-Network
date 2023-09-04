import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from '../interfaces/authInterface';

export const AuthContext = createContext<Auth>({} as Auth);

interface AuthProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider = ({ children }: AuthProps) => {
    const [currentUser, setCurrentUser ] = useState(
        JSON.parse(localStorage.getItem("user") || '{}')
    );

    const login = async (inputs: Object) => {
        const res = await axios.post('/api/auth/login', inputs, {
            withCredentials: true, // trabajando con cookies, es necesario colocar esta línea para evitar problemas => basicamente, indica que se hará uso de credenciales
        });
        
        setCurrentUser(res.data);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            { children }
        </AuthContext.Provider>
    );
};