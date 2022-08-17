import React, {  useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import AppContext from '../../../store/AppContext';

const AnimeListHeader = () => {
    const [ search, setSearch ] = useState("");
    const ctx = useContext(AppContext);
    const { onSearchHandler } = ctx;

    useEffect(() => {
        onSearchHandler(search.toLowerCase());
    }, [search]);

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.search}
                placeholder='Search anime'
                onChangeText={(text) => setSearch(text)}
                value={search}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        // backgroundColor: '#333333',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        // padding: 5,
    },
    search: {
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});

export default AnimeListHeader;
