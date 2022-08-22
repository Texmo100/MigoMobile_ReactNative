import React from 'react';
import { View, Text, StyleSheet, Modal, Alert, Pressable } from 'react-native';

const MigoModal = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalView}>
                <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalText}>Close modal</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalButton: {
        width: 100,
        height: 50,
        backgroundColor: '#00ffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    modalText: {
        color: '#2b2b2b',
    },
});

export default MigoModal;
