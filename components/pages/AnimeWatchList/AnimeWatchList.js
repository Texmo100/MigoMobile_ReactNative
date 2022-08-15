import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList, Dimensions } from 'react-native';
import animeWatchList from '../../../data/animeWatchList';
import AnimeCard from '../../UI/AnimeCard/AnimeCard';

const windowWidth = Dimensions.get('screen').width;

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerLabel}>Migo</Text>
        </View>
    );
};

const AnimeWatchList = () => {
    const animeRender = ({ item, index }) => (
        <AnimeCard
            animeData={item}
            index={index}
        />
    );

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#000000"
                barStyle="light-content"
            />
            <FlatList
                data={animeWatchList}
                renderItem={(item, index) => animeRender(item, index)}
                keyExtractor={(item, index) => index}
                ListFooterComponent={Footer}
            />
            <TouchableOpacity style={styles.createAction}>
                <Text style={styles.createIcon}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121'
    },
    createAction: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#E30B5C',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    createIcon: {
        fontSize: 25,
        fontWeight: 'bold',
    },
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

export default AnimeWatchList;
