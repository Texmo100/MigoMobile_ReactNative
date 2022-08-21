import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Genre = ({ genre }) => {
    return (
        <View style={styles.genre}>
            <Text style={styles.genreLabel}>{genre}</Text>
        </View>
    );
};

const AnimeCard = ({ animeData, index, type }) => {
    const [isActionsShown, setIsActionsShown] = useState(false);

    const { genres } = animeData;

    const actionsHandler = () => {
        setIsActionsShown(!isActionsShown);
    };

    if (type === 'anime') {
        return (
            <View style={styles.card}>
                <View style={styles.cardImage}>
                    <Text style={styles.cardImageLabel}>{index}</Text>
                </View>
                <TouchableOpacity style={styles.cardInfo} onPress={actionsHandler}>
                    <Text style={styles.cardInfoTitle}>{animeData.title}</Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>Episodes: </Text>
                        {animeData.episodes}
                    </Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>Seasons: </Text>
                        {animeData.seasons}
                    </Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>Status: </Text>
                        {animeData.status}
                    </Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>Score: </Text>
                        {animeData.score}
                    </Text>
                    <Text style={styles.cardInfoLabelGenres}>Genres: </Text>
                    <View style={styles.genres}>
                        {
                            genres
                                ?
                                genres.map((genre, index) => <Genre key={index} genre={genre} />)
                                :
                                null
                        }
                    </View>
                </TouchableOpacity>
                <View style={styles.cardActions}>
                    <TouchableOpacity style={isActionsShown ? styles.activeEditAction : styles.inactiveEditAction}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isActionsShown ? styles.activeDeleteAction : styles.inactiveDeleteAction}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (type === 'nextAnime') {
        return (
            <View style={styles.card}>
                <View style={styles.cardImage}>
                    <Text style={styles.cardImageLabel}>{index}</Text>
                </View>
                <TouchableOpacity style={styles.cardInfo} onPress={actionsHandler}>
                    <Text style={styles.cardInfoTitle}>{animeData.title}</Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>Recommendation Rate: </Text>
                        {animeData.recommendationRate}
                    </Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>Added at: </Text>
                        {animeData.addedAt}
                    </Text>
                    <Text style={styles.cardInfoLabel}>
                        <Text style={{ fontWeight: 'bold' }}>last update: </Text>
                        {animeData.lastUpdate}
                    </Text>
                </TouchableOpacity>
                <View style={styles.cardActions}>
                    <TouchableOpacity style={isActionsShown ? styles.activeEditAction : styles.inactiveEditAction}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={isActionsShown ? styles.activeDeleteAction : styles.inactiveDeleteAction}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    cardImage: {
        flex: 1,
        backgroundColor: '#777777',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    cardImageLabel: {
        fontSize: 15,
        color: '#e8e8e8',
    },
    cardInfo: {
        flex: 4,
        padding: 10,
    },
    cardInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    cardInfoLabel: {
        marginVertical: 2.5,
    },
    cardInfoLabelGenres: {
        marginVertical: 2.5,
        fontWeight: 'bold',
    },
    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    genre: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 5,
        borderRadius: 50,
        marginRight: 5,
        marginBottom: 5,
    },
    genreLabel: {
        fontSize: 10,
    },
    cardActions: {
        flex: 1,
        borderRadius: 5,
    },
    activeEditAction: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    inactiveEditAction: { display: 'none' },
    activeDeleteAction: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#922B21',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    inactiveDeleteAction: { display: 'none' },
});

export default AnimeCard;
