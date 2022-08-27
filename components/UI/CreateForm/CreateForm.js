import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import animeGenres from '../../../data/animeGenres';
import animeStatus from '../../../data/animeStatus';
import MigoInput from '../MigoInput/MigoInput';

const CreateForm = ({ modalVisible, setModalVisible }) => {
    const [title, setTitle] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [seasons, setSeasons] = useState("");
    const [genres, setGenres] = useState(animeGenres);
    const [status, setStatus] = useState(animeStatus);
    const [score, setScore] = useState("");
    const [description, setDescription] = useState("");
    const [personalComments, setPersonalComments] = useState("");

    return (
        <ScrollView style={styles.modalView}>
            <Text style={styles.formHeader}>Add anime</Text>
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
            <View style={styles.formButtons}>
                <TouchableOpacity style={[styles.formButton, styles.save]}>
                    <Text style={[styles.buttonText, styles.saveText]}>save changes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.formButton, styles.cancel]}>
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
        marginTop: 20,
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
        backgroundColor: '#00FFFF',
    },
    saveText: {
        color: '#2b2b2b',
    },
    cancel: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    cancelText: {
        color: '#e8e8e8',
    },

});

export default CreateForm;
