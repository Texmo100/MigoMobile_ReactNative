import React, { useContext, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';

import AnimeCard from '../../UI/AnimeCard/AnimeCard';
import AnimeListHeader from '../../UI/AnimeListHeader/AnimeListHeader';
import AnimeListFooter from '../../UI/AnimeListFooter/AnimeListFooter';
import MigoModal from '../../UI/MigoModal/MigoModal';
import MigoForm from '../../UI/MigoForm/MigoForm';

const AnimeList = ({ listType }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isCreateMode, setIsCreateMode] = useState(true);
    const [animeHolder, setAnimeHolder] = useState({});

    const dispatch = useDispatch();

    const animeWatchList = useSelector(state => state.anime.animeWatchList);
    const nextAnimeList = useSelector(state => state.anime.nextAnimeList);
    const isLoading = useSelector(state => state.ui.isLoading);

    const openUpdateForm = (animeType, animeData) => {
        setAnimeHolder({ animeType: animeType, animeData: animeData });
        setModalVisible(true);
        setIsCreateMode(false);
    };

    const openCreateForm = () => {
        setAnimeHolder({});
        setModalVisible(true);
        setIsCreateMode(true);
    };

    const submitAnimeHandler = (actionType, animeType, animeData) => {
        switch(actionType) {
            case 'create':
                onAddAnime(animeType, animeData);
                break;
            case 'update':
                const animeDocRef = animeData.docRef;
                const cleanAnimeData = animeCleanerObj({...animeData});
                onUpdateAnime(animeType, animeDocRef, cleanAnimeData);
                break;
        }
    };

    const animeCleanerObj = animeObj => {
        delete animeObj.docRef;
        return animeObj;
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(uiActions.setLocation(listType));
        }, [])
    );

    const animeRender = ({ item, index }) => {
        return (
            <AnimeCard
                animeData={item}
                index={index}
                type={listType === 'animes' ? 'anime' : 'nextAnime'}
                onUpdate={openUpdateForm}
            />
        );
    };

    if (isLoading) {
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

            <MigoModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
                {
                    isCreateMode
                    ?
                    <MigoForm
                        formType="create"
                        setModalVisible={setModalVisible}
                        onSubmitData={submitAnimeHandler}
                        animeType={listType === 'animes' ? 'anime' : 'nextAnime' }
                    />
                    :
                    <MigoForm
                        formType="update"
                        setModalVisible={setModalVisible}
                        onSubmitData={submitAnimeHandler}
                        animeType={animeHolder.animeType}
                        animeData={animeHolder.animeData}
                    />
                }
            </MigoModal>

            <FlatList
                data={listType === 'animes' ? animeWatchList : nextAnimeList}
                renderItem={(item, index) => animeRender(item, index)}
                keyExtractor={(item, index) => index}
                ListHeaderComponent={AnimeListHeader}
                ListFooterComponent={AnimeListFooter}
            />

            <TouchableOpacity style={styles.createActionAnime} onPress={openCreateForm}>
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
    createIcon: {
        fontSize: 25,
        fontWeight: 'bold',
    },

});

export default AnimeList;
