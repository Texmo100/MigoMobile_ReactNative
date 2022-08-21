import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList } from 'react-native';
import AppContext from '../../../store/AppContext';
import AnimeCard from '../../UI/AnimeCard/AnimeCard';
import AnimeListHeader from '../../UI/AnimeListHeader/AnimeListHeader';
import AnimeListFooter from '../../UI/AnimeListFooter/AnimeListFooter';

const AnimeWatchList = () => {
    const ctx = useContext(AppContext);

    const { animeWatchList } = ctx;

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
                ListHeaderComponent={AnimeListHeader}
                ListFooterComponent={AnimeListFooter}
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
});

export default AnimeWatchList;
