import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = () => {
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <Button title="Login" onPress={login} />
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
});

export default LoginScreen;
