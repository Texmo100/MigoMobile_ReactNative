import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView} from 'react-native';

const CreateForm = ({ modalVisible, setModalVisible }) => {
    const [title, setTitle] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [seasons, setSeasons] = useState("");
    const [genres, setGenres] = useState([]);
    const [status, setStatus] = useState("");
    const [score, setScore] = useState("");
    const [description, setDescription] = useState("");
    const [personalComments, setPersonalComments] = useState("");

    return (
        <ScrollView style={styles.modalView}>
            <Text style={styles.formHeader}>Add anime</Text>
            <View style={styles.formInputContainer}>
                <Text style={styles.label}>title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                    placeholder="title"
                />
            </View>

            <View style={styles.formInputContainer}>
                <Text style={styles.label}>episodes</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEpisodes}
                    value={episodes}
                    placeholder="episodes"
                    keyboardType='numeric'
                />
            </View>

            <View style={styles.formInputContainer}>
                <Text style={styles.label}>seasons</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSeasons}
                    value={seasons}
                    placeholder="seasons"
                    keyboardType='numeric'
                />
            </View>

            {/* genres */}

            {/* status */}

            <View style={styles.formInputContainer}>
                <Text style={styles.label}>score</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setScore}
                    value={score}
                    placeholder="score"
                    keyboardType='decimal-pad'
                />
            </View>

            <View style={styles.formInputContainer}>
                <Text style={styles.label}>description</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="description"
                    multiline={true}
                    numberOfLines={4}
                />
            </View>

            <View style={styles.formInputContainer}>
                <Text style={styles.label}>personal comments</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPersonalComments}
                    value={personalComments}
                    placeholder="personal comments"
                    multiline={true}
                    numberOfLines={4}
                />
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
    formInputContainer: {
        marginHorizontal: 10,
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    label: {
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#e8e8e8',
        marginBottom: 5,
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        textAlignVertical: 'top'
    },

});

export default CreateForm;
