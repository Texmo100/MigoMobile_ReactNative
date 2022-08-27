import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const MigoInput = ({ type, label, onInputChange, inputValue, inputPlaceholder, multiSelection }) => {
    if (type === "selection") {
        const selectionHandler = optionData => {
            const newOptions = [];

            if(multiSelection) {
                [...inputValue].forEach(option => {
                    if(option.id === optionData.id) {
                        option.isSelected = !optionData.isSelected;
                    }
                    newOptions.push(option);
                })
    
                onInputChange(newOptions);
            } else {
                [...inputValue].forEach(option => {
                    if(option.id === optionData.id) {
                        option.isSelected = true;
                        newOptions.push(option);
                    } else {
                        option.isSelected = false;
                        newOptions.push(option);
                    }
                })
                onInputChange(newOptions);
            }
        };

        return (
            <View style={styles.formInputContainer}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.optionsContainer}>
                    {
                        inputValue.map(option => (
                            <TouchableOpacity key={option.id} style={[styles.option, option.isSelected ?  styles.optionSelected : null]} onPress={() => selectionHandler(option)}>
                                <Text style={styles.optionText}>{option.titleOption}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        );
    }

    return (
        <View style={styles.formInputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                keyboardType={type === 'numeric' ? 'numeric' : 'default'}
                style={styles.input}
                onChangeText={onInputChange}
                value={inputValue}
                placeholder={inputPlaceholder}
                multiline={type === 'textArea' ? true : false}
                numberOfLines={type === 'textArea' ? 4 : null}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
        textAlignVertical: 'top',
        padding: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    option: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 5,
        width: 100,
        padding: 10,
    },
    optionText: {
        textTransform: 'capitalize',
        fontSize: 12,
    },
    optionSelected: {
        borderWidth: 1,
        borderColor: '#E30B5C',
    }
    
});

export default MigoInput;
