import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const Home = () => {
    return (
        <View style={styles.app}>
            <Text style={styles.text}>Hey this is migoMobile</Text>
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

export default Home;
