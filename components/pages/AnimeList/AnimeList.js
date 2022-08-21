import React, { useContext, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AppContext from '../../../store/AppContext';
import AnimeCard from '../../UI/AnimeCard/AnimeCard';
import AnimeListHeader from '../../UI/AnimeListHeader/AnimeListHeader';
import AnimeListFooter from '../../UI/AnimeListFooter/AnimeListFooter';

const AnimeList = ({ listType }) => {
    const ctx = useContext(AppContext);

    const { animeWatchList, nextAnimeList, isLoading, onLocationHandler } = ctx;

    if(listType === 'animes') {
        const animeRender = ({ item, index }) => (
            <AnimeCard
                animeData={item}
                index={index}
                type='anime'
            />
        );

        useFocusEffect(
            useCallback(() => {
                onLocationHandler('animes');
            }, [])
        );

        if(isLoading) {
            return (
                <View style={[styles.container, styles.loading]}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
    
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
                    ListHeaderComponent={AnimeListHeader}
                    ListFooterComponent={AnimeListFooter}
                />
                <TouchableOpacity style={styles.createActionAnime}>
                    <Text style={styles.createIcon}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if(listType === 'nextAnimes') {
        const animeRender = ({ item, index }) => (
            <AnimeCard
                animeData={item}
                index={index}
                type='nextAnime'
            />
        );

        useFocusEffect(
            useCallback(() => {
                onLocationHandler('nextAnimes');
            }, [])
        );

        if(isLoading) {
            return (
                <View style={[styles.container, styles.loading]}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
    
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#000000"
                    barStyle="light-content"
                />
                <FlatList
                    data={nextAnimeList}
                    renderItem={(item, index) => animeRender(item, index)}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={AnimeListHeader}
                    ListFooterComponent={AnimeListFooter}
                />
                <TouchableOpacity style={styles.createActionNextAnime}>
                    <Text style={styles.createIcon}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121'
    },
    loading: {
        justifyContent: 'center',
    },
    createActionAnime: {
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
    createActionNextAnime: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#1E90FF',
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    createIcon: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});

export default AnimeList;
