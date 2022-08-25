import React from 'react';
import { Modal } from 'react-native';

const MigoModal = props => {
    const { modalVisible, setModalVisible } = props;

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            {props.children}
        </Modal>
    );
};

export default MigoModal;
