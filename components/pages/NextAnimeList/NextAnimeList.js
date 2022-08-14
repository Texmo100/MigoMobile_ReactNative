import React from 'react';
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NextAnimeList = ({ navigation }) => {
    return (
        <View style={styles.app}>
            <StatusBar
                backgroundColor="#212121"
                barStyle="light-content"
            />
            <Text style={styles.text}>Next anime List Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#e8e8e8',
    },
});

export default NextAnimeList;
