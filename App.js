import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthProvider, AuthContext } from './context/AuthContext';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/dashboard/HomeScreen';
import SettingsScreen from './screens/account/SettingsScreen';
import ProfileScreen from './screens/account/ProfileScreen';


import {View, Text, StyleSheet, Platform} from 'react-native';





const CustomHeader = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    const { isAuthenticated, isOnboardingComplete } = React.useContext(AuthContext);

    if (!isOnboardingComplete) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    }

    if (!isAuthenticated) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                header: () => <CustomHeader title={"Image Editor"} />
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // Add shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Add elevation for Android
        elevation: 4,
        // Add zIndex for iOS to ensure shadow is visible
        zIndex: Platform.OS === 'ios' ? 1 : 0,
    },
    headerTitle: {
        color: '#000',
        fontSize: 15,
    },
});