import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;

const AnimeListFooter = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerLabel}>Migo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: windowWidth,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'
    },
    footerLabel: {
        fontSize: 20,
        fontWeight: '300',
    }
});

export default AnimeListFooter;
