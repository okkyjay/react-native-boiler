import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const OnboardingScreen = () => {
    const { completeOnboarding } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the App!</Text>
            <Text style={styles.subtitle}>Let's get you set up.</Text>
            <Button title="Complete Onboarding" onPress={completeOnboarding} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default OnboardingScreen;
