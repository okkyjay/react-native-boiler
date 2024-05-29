import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {AuthContext} from "../../context/AuthContext";

const ProfileScreen = () => {
    const {logout} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
            <Pressable onPress={logout}>Logout</Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default ProfileScreen;
