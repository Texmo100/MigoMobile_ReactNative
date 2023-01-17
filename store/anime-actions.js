import { animeActions } from "./anime-slice";
import { uiActions } from "./ui-slice";
import firestore from '@react-native-firebase/firestore';
import watch from "redux-watch";
import store from './index';

export const fetchAnimeData = () => {
    return dispatch => {
        dispatch(uiActions.setIsLoading());

        let w = watch(store.getState, 'ui.location');

        store.subscribe(w((newVal, oldVal) => {
            let currentLocation = newVal === oldVal ? oldVal : newVal;

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

                    dispatch(animeActions.getAnimeList({ animeListType: currentLocation, animeList: animeList }));
                    dispatch(uiActions.setIsNotLoading());
                });
        }));
    };
};

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

export const addAnimeToList = (animeType, anime) => {
    return (dispatch, getState) => {
        const currentState = getState();
        let currentLocation = currentState.ui.location;

        firestore()
            .collection(currentLocation)
            .add(anime);

        dispatch(animeActions.addAnime({ animeType, anime }));
    };
};

export const updateAnimeFromList = (animeType, animeRef, animeData) => {
    return (dispatch, getState) => {
        const currentState = getState();
        let currentLocation = currentState.ui.location;

        firestore()
            .collection(currentLocation)
            .doc(animeRef)
            .update(animeData);

        dispatch(animeActions.updateAnime({ animeType, animeRef, animeData }));
    };
};

export const deleteAnimeFromList = (animeType, animeRef) => {
    return (dispatch, getState) => {
        const currentState = getState();
        let currentLocation = currentState.ui.location;

        firestore()
            .collection(currentLocation)
            .doc(animeRef)
            .delete();

        dispatch(animeActions.deleteAnime({ animeType, animeRef }));
    };
};
