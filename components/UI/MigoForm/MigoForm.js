import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import animeGenres from '../../../data/animeGenres';
import animeStatus from '../../../data/animeStatus';
import MigoInput from '../MigoInput/MigoInput';

const MigoForm = ({ formType, setModalVisible, onSubmitData }) => {
    const [title, setTitle] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [seasons, setSeasons] = useState("");
    const [genres, setGenres] = useState(animeGenres);
    const [status, setStatus] = useState(animeStatus);
    const [score, setScore] = useState("");
    const [description, setDescription] = useState("");
    const [personalComments, setPersonalComments] = useState("");
    const [isFormValid, setIsFormValid] = useState(true);

    const submitFormHandler = () => {
        const genresValue = optionSubtractor(genres, true);
        const statusValue = optionSubtractor(status, false);

        const animeData = {
            title: title,
            episodes: episodes,
            seasons: seasons,
            genres: genresValue,
            status: statusValue,
            score: score,
            description: description,
            personalComments: personalComments,
        };

        if(!formValidator(animeData)) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
            onSubmitData(animeData);
            closeModalHandler();
        }
    };

    const formValidator = formData => {
        let flag = true;
        if(!formData.title) flag = false;
        if(!formData.episodes || formData.episodes === '0') flag = false;
        if(!formData.episodes || formData.episodes === '0') flag = false;
        if(formData.genres.lenght === 0) flag = false;
        if(!formData.status) flag = false;
        if(!formData.score || formData.score === '0') flag = false;
        if(!formData.description) flag = false;
        if(!formData.personalComments) flag = false;
        return flag;
    };

    const optionSubtractor = (options, multi) => {
        if(multi) {
            const optionsSelected = [];
            options.forEach(option => {
                if(option.isSelected) optionsSelected.push(option.titleOption);
            });
            return optionsSelected;
        }

        let optionSelected = "";
        options.forEach(option => {
            if(option.isSelected) optionSelected = option.titleOption;
        });
        return optionSelected;
    };

    const closeModalHandler = () => {
        setModalVisible(false);
        stateCleaner();
    };

    const stateCleaner = () => {
        setTitle("");
        setEpisodes("");
        setEpisodes("");
        setSeasons("");
        // setGenres();
        // setStatus();
        setScore("");
        setDescription("");
        setPersonalComments("");
    };

    return (
        <ScrollView style={styles.modalView}>
            <TouchableOpacity style={styles.close} onPress={() => closeModalHandler()}>
                    <Text style={styles.closeIcon}>{"<"}</Text>
            </TouchableOpacity>

            <Text style={styles.formHeader}>Add anime</Text>

            {
                !isFormValid && <Text style={styles.errorMessage}>All the fields are required</Text>
            }

            <MigoInput
                type="text"
                label="title"
                onInputChange={setTitle}
                inputValue={title}
                inputPlaceholder="title"
            />

            <MigoInput
                type="numeric"
                label="episodes"
                onInputChange={setEpisodes}
                inputValue={episodes}
                inputPlaceholder="episodes"
            />

            <MigoInput
                type="numeric"
                label="seasons"
                onInputChange={setSeasons}
                inputValue={seasons}
                inputPlaceholder="seasons"
            />

            <MigoInput
                type="selection"
                label="genres"
                onInputChange={setGenres}
                inputValue={genres}
                multiSelection={true}
            />

            <MigoInput
                type="selection"
                label="status"
                onInputChange={setStatus}
                inputValue={status}
                multiSelection={false}
            />

            <MigoInput
                type="numeric"
                label="score"
                onInputChange={setScore}
                inputValue={score}
                inputPlaceholder="score"
            />

            <MigoInput
                type="textArea"
                label="description"
                onInputChange={setDescription}
                inputValue={description}
                inputPlaceholder="description"
            />

            <MigoInput
                type="textArea"
                label="personal comments"
                onInputChange={setPersonalComments}
                inputValue={personalComments}
                inputPlaceholder="personal comments"
            />

            {
                !isFormValid && <Text style={styles.errorMessage}>Errors need your attention!</Text>
            }


            <View style={styles.formButtons}>
                <TouchableOpacity style={[styles.formButton, styles.save]} onPress={() => submitFormHandler()}>
                    <Text style={[styles.buttonText, styles.saveText]}>save changes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.formButton, styles.cancel]} onPress={() => closeModalHandler()}>
                    <Text style={[styles.buttonText, styles.cancelText]}>cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: 'black',
    },
    formHeader: {
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 10,
    },
    formButtons: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    formButton: {
        flex: 1,
        height: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 15,
        textTransform: 'capitalize'
    },
    save: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    saveText: {
        color: '#e8e8e8',
    },
    cancel: {
        backgroundColor: '#922B21',
    },
    cancelText: {
        color: '#e8e8e8',
    },
    close: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 45,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        position: 'absolute',
        top: 10,
        left: 0,
    },
    closeIcon: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#E30B5C',
    },
    errorMessage: {
        alignSelf: 'center',
        color: '#922B21',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 10,
        borderRadius: 50,
    },

});

export default MigoForm;
