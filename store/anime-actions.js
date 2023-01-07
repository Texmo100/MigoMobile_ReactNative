import { animeActions } from "./anime-slice";
import { uiActions } from "./ui-slice";
import firestore from '@react-native-firebase/firestore';

const animesRef = firestore().collection('animes');
const nextAnimesRef = firestore().collection('nextAnimes');

export const fetchAnimeData = () => {
    
};