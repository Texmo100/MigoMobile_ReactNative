import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const AnimeListHeader = () => {
    return (
        <View style={styles.header}>
            <TextInput
                style={styles.search}
                placeholder='Search anime'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        // backgroundColor: '#333333',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        // padding: 5,
    },
    search: {
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});

export default AnimeListHeader;
