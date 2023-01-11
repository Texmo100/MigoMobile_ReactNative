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
                    animeList.push({...doc.data(), docRef: doc.id});
                });

                dispatch(animeActions.getAnimeList({ animeListType: currentLocation, animeList: animeList }));
                dispatch(uiActions.setIsNotLoading());
            });
        }));
    };
};
