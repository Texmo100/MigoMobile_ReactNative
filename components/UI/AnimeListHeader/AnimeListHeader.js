import React, {  useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';
import { View, StyleSheet, TextInput } from 'react-native';

const AnimeListHeader = () => {
    const [ search, setSearch ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(uiActions.setSearchTerm(search.toLowerCase()));
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
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 5,
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
