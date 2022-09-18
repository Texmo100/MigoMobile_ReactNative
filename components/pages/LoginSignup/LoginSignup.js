import React from 'react';
import { StyleSheet ,View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';

const LoginSignup = ({ navigation }) => {
    return (
        <View style={styles.login}>
            <StatusBar backgroundColor="#000000" barStyle="light-content"/>

            <TouchableOpacity style={styles.signButton} onPress={() => navigation.navigate('Home')}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signButton: {
        width: 100,
        height: 45,
        backgroundColor: 'rgba(255,255,255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    text: {
        color: '#ffffff'
    },
});

export default LoginSignup;
