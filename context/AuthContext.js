import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

    useEffect(() => {
        const loadAuthData = async () => {
            const authStatus = await AsyncStorage.getItem('isAuthenticated');
            const onboardingStatus = await AsyncStorage.getItem('isOnboardingComplete');
            if (authStatus === 'true') {
                setIsAuthenticated(true);
            }
            if (onboardingStatus === 'true') {
                setIsOnboardingComplete(true);
            }
        };
        loadAuthData();
    }, []);

    const login = async () => {
        await AsyncStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
    };

    const completeOnboarding = async () => {
        await AsyncStorage.setItem('isOnboardingComplete', 'true');
        setIsOnboardingComplete(true);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isOnboardingComplete, login, completeOnboarding, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
