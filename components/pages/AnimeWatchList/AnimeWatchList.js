import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const AnimeWatchList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>AnimeWatchList page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
    },
    text: {
        color: '#e8e8e8',
    },
});

export default AnimeWatchList;
