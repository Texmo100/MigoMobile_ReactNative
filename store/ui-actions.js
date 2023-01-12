import firestore from '@react-native-firebase/firestore';
import { animeActions } from "./anime-slice";

export const searchAnime = (currentLocation, searchTerm) => {
    return dispatch => {
        firestore()
            .collection(currentLocation)
            .onSnapshot((querySnapshot, error) => {
                if (error || !querySnapshot) {
                    console.log(error);
                }

                const animeList = [];
                querySnapshot.forEach(doc => {
                    animeList.push({ ...doc.data(), docRef: doc.id });
                });

                const newAnimeList = [...animeList].filter(anime => animeSearcher(anime.title.toLowerCase(), searchTerm));

                dispatch(animeActions.getAnimeList({ animeListType: currentLocation, animeList: newAnimeList }));
            });
    };
};

const animeSearcher = (animeTitle, objective) => animeTitle.includes(objective) ? true : false;
