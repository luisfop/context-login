import React, { createContext, useState, useEffect } from 'react';
import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, setUserLocalStorage } from './util';
import { login } from '../../services/api';

export const AuthContext = createContext<IContext>({} as IContext);


export const AuthProvider = ({ children }: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>();

    let authenticate = async (email: string, password: string) => {
        //login api service bringing the token
        const response = await login({email,password});

        const payload = { token: response.data.token, email };
        //saving in state and in localStorage
        setUser(payload);
        setUserLocalStorage(payload);
    };

    let logout = () => {
        setUser(null);
        setUserLocalStorage(null);
    }

    //If User is already logged;
    useEffect(() => {
        const user: IUser = getUserLocalStorage();

        if (user) {
            setUser(user);
        }

    }, [])

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
